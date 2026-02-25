import { h, render, getCurrentInstance, onBeforeUnmount, toValue, type Component, type MaybeRefOrGetter, watch } from "vue";

export function useDynamicVNode<TProps extends Record<string, any>>(component: Component<TProps>) {

  let container: HTMLElement | null = null;
  let mountPoint: HTMLElement | null = null;
  let stopWatching: (() => void) | null = null;

  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error("useDynamicVNode must be used inside setup()");
  }

  const appContext = instance.appContext;

  const mount = (getProps: MaybeRefOrGetter<TProps>) => {
    if (!mountPoint) {
      throw new Error(`You must call getElement() first to create the mount point`);
    }

    if (!container) {
      container = document.createElement("div");
      mountPoint.appendChild(container);
    }

    if (stopWatching) {
      stopWatching();
    }
    stopWatching = watch(getProps, () => {
      const vnode = h(component, toValue(getProps));
      vnode.appContext = appContext;
      render(vnode, container!);
    }, { immediate: true });
  };

  const unmount = () => {
    if (stopWatching) {
      stopWatching();
      stopWatching = null;
    }
    if (container) {
      render(null, container);
      container.remove();
    }
    container = null;
  };

  const getElement = (style?: Partial<CSSStyleDeclaration>): HTMLElement => {
    if (!mountPoint) {
      mountPoint = document.createElement("div");
    }
    Object.assign(mountPoint.style, style ?? {});
    return mountPoint;
  };

  const destroy = () => {
    unmount();
    if (mountPoint) {
      mountPoint.remove();
      mountPoint = null;
    }
  };

  onBeforeUnmount(destroy);

  return {
    mount,
    unmount,
    getElement
  };
}
