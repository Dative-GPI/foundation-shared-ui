import { onMounted, onBeforeUnmount } from 'vue';

export function useResize(
  getElement: () => HTMLElement | null | undefined,
  onResize: () => void
) {
  let resizeObserver: ResizeObserver | null = null;

  onMounted(() => {
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        onResize();
      });
      const element = getElement();
      if (element) {
        resizeObserver.observe(element);
      }
    }

    window.addEventListener('resize', onResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
    resizeObserver?.disconnect();
    resizeObserver = null;
  });

  return {
    resize: onResize
  };
}