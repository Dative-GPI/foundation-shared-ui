import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useElementVisibility(element: HTMLElement | null, options: {
  threshold?: number,
  onVisible?: () => void
}) {
  const { 
    threshold = 0.3,
    onVisible
  } = options;
  
  const isVisible = ref(false);
  const observer = ref<IntersectionObserver | null>(null);
  
  onMounted(() => {
    if (!element) {
      console.warn('useElementVisibility: No element provided');
      return;
    }
    
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting;
        if (entry.isIntersecting && onVisible) {
          onVisible();
        }
      });
    }, { threshold });
    
    observer.value.observe(element);
  });
  
  onBeforeUnmount(() => {
    observer.value?.disconnect();
  });
  
  return {
    isVisible
  };
}