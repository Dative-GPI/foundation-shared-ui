import { onBeforeUnmount, watch } from 'vue';

export function useResize(
  getElement: () => HTMLElement | null | undefined,
  onResize: () => void
) {
  let resizeObserver: ResizeObserver | null = null;

  const stopObserving = () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  };

  watch(
    () => getElement(),
    (newElement) => {
      stopObserving();

      if (newElement && typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          onResize();
        });
        resizeObserver.observe(newElement);
      }
    },
    { immediate: true }
  );

  onBeforeUnmount(() => {
    stopObserving();
  });

  return {};
}