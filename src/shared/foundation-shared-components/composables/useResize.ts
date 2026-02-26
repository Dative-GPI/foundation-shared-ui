import { onMounted, onBeforeUnmount } from 'vue';

export function useResize(
  getElement: () => HTMLElement | null | undefined,
  onResize: () => void
) {
  let resizeObserver: ResizeObserver | null = null;

  onMounted(() => {
    const element = getElement();
    if (!element) return;
     if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(element);
    } else {
      window.addEventListener('resize', onResize);
    }
  });

  onBeforeUnmount(() => {
     if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    } else {
      window.removeEventListener('resize', onResize);
    }
  });
}