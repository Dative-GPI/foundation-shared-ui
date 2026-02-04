import { uuidv4 } from "@dative-gpi/bones-ui";
import { h, render, nextTick, getCurrentInstance, onBeforeUnmount, type Component, type VNode } from "vue";

export function useDynamicVNode<TProps extends Record<string, any>>(component: Component) {
  const id = uuidv4();

  let vnode: VNode | null = null;
  let container: HTMLElement | null = null;

  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error("useDynamicVNode must be used inside setup()");
  }

  const appContext = instance.appContext;

  const mount = async (props: TProps) => {
    await nextTick();

    const mountPoint = document.getElementById(id);
    if (!mountPoint) {
      return;
    }

    unmount();

    container = mountPoint;

    vnode = h(component, props);
    vnode.appContext = appContext;

    render(vnode, container);
  };

  const unmount = () => {
    if (container) {
      render(null, container);
    }
    vnode = null;
    container = null;
  };

  const sanitizeStyle = (style?: string): string =>
    style
      ? style.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      : "";

  const getHtml = (style?: string) => {
    const safeStyle = sanitizeStyle(style);
    return `<div id="${id}"${safeStyle ? ` style="${safeStyle}"` : ""}></div>`;
  };

  onBeforeUnmount(unmount);

  return {
    mount,
    unmount,
    getHtml
  };
}
