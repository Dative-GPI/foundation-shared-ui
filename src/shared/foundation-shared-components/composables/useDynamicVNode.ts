import { uuidv4 } from "@dative-gpi/bones-ui";
import { h, render, nextTick, getCurrentInstance, onBeforeUnmount, type Component, type VNode } from "vue";

export function useDynamicVNode<TProps extends Record<string, any>>(component: Component<TProps>) {
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
      throw new Error(`Mount point with id "${id}" not found`);
    }

    if (!container) {
      container = document.createElement("div");
      mountPoint.appendChild(container);
    }

    vnode = h(component, props);
    vnode.appContext = appContext;

    render(vnode, container);
  };

  const unmount = () => {
    if (container) {
      render(null, container);
      container.remove();
    }
    vnode = null;
    container = null;
  };

  const getHtml = (style?: Partial<CSSStyleDeclaration>) => {
    const el = document.createElement("div");
    el.id = id;
    Object.assign(el.style, style);
    return el.outerHTML;
  };

  onBeforeUnmount(unmount);

  return {
    mount,
    unmount,
    getHtml
  };
}
