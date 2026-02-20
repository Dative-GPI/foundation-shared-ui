import { h, render, getCurrentInstance, onBeforeUnmount, type Component, type VNode } from "vue";

export function useDynamicVNode<TProps extends Record<string, any>>(component: Component<TProps>) {

  let vnode: VNode | null = null;
  let container: HTMLElement | null = null;
  let mountPoint: HTMLElement | null = null;

  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error("useDynamicVNode must be used inside setup()");
  }

  const appContext = instance.appContext;

  const mount = async (props: TProps) => {
    if (!mountPoint) {
      throw new Error(`You must call getElement() first to create the mount point`);
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

  const getElement = (style?: Partial<CSSStyleDeclaration>): HTMLElement => {
    if (!mountPoint) {
      mountPoint = document.createElement("div");
    }
    mountPoint = document.createElement("div");
    Object.assign(mountPoint.style, style ?? {});
    return mountPoint;
  };

  const destroy = () => {
    unmount();
    mountPoint = null;
  };

  onBeforeUnmount(destroy);

  return {
    mount,
    unmount,
    getElement
  };
}
