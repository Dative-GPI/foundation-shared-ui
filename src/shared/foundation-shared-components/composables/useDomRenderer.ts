import { h, render, getCurrentInstance, onBeforeUnmount, toValue, type Component, type MaybeRefOrGetter, watch } from "vue";

interface RenderHandle {
  unmount: () => void;
  getElement: (style?: Partial<CSSStyleDeclaration>) => HTMLElement;
}

interface Subscriber {
  container: HTMLElement | null;
  mountPoint: HTMLElement;
  stopWatching: (() => void) | null;
}

export function useDomRenderer<TProps extends Record<string, any>>(component: Component<TProps>) {

  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error("useDomRenderer must be used inside setup()");
  }

  const appContext = instance.appContext;
  const subscribers = new Map<symbol, Subscriber>();

  const mount = (getProps: MaybeRefOrGetter<TProps>, style?: Partial<CSSStyleDeclaration>): RenderHandle => {
    const id = Symbol();
    const mountPoint = document.createElement("div");
    Object.assign(mountPoint.style, style ?? {});

    const container = document.createElement("div");
    mountPoint.appendChild(container);

    const stopWatching = watch(
      getProps,
      () => {
        const vnode = h(component, toValue(getProps));
        vnode.appContext = appContext;
        render(vnode, container);
      },
      { immediate: true }
    );

    subscribers.set(id, { container, mountPoint, stopWatching });

    const unmount = () => {
      const subscriber = subscribers.get(id);
      if (!subscriber) return;

      if (subscriber.stopWatching) {
        subscriber.stopWatching();
      }
      render(null, subscriber.container!);
      subscriber.container!.remove();
      subscriber.mountPoint.remove();
      subscribers.delete(id);
    };

    const getElement = (newStyle?: Partial<CSSStyleDeclaration>): HTMLElement => {
      const subscriber = subscribers.get(id);
      if (!subscriber) {
        throw new Error("This render handle has already been unmounted");
      }
      Object.assign(subscriber.mountPoint.style, newStyle ?? {});
      return subscriber.mountPoint;
    };

    return { unmount, getElement };
  };

  const unmountAll = () => {
    for (const [id, subscriber] of subscribers) {
      if (subscriber.stopWatching) {
        subscriber.stopWatching();
      }
      render(null, subscriber.container!);
      subscriber.container!.remove();
      subscriber.mountPoint.remove();
      subscribers.delete(id);
    }
  };

  onBeforeUnmount(unmountAll);

  return {
    mount,
    unmountAll,
  };
}