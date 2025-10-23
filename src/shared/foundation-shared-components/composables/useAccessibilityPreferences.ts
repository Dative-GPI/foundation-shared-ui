import { ref, onMounted, onBeforeUnmount } from 'vue';

const PREFERS_REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function useAccessibilityPreferences() {
  const prefersReducedMotion = ref(false);
  let mediaQuery: MediaQueryList | null = null;

  const handleChange = (e: MediaQueryListEvent) => {
    prefersReducedMotion.value = e.matches;
  };
  
  onMounted(() => {
    
    mediaQuery = window.matchMedia?.(PREFERS_REDUCED_MOTION_QUERY) || null;
    prefersReducedMotion.value = mediaQuery?.matches || false;
    
    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    }
  });

  onBeforeUnmount(() => {
    if (mediaQuery?.removeEventListener) {
      mediaQuery.removeEventListener('change', handleChange);
    }
  });

  return {
    prefersReducedMotion
  };
}