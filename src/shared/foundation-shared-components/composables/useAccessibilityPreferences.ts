import { ref, onMounted } from 'vue';

export function useAccessibilityPreferences() {
  const prefersReducedMotion = ref(false);
  
  onMounted(() => {
    prefersReducedMotion.value = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;
    
    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', (e) => {
        prefersReducedMotion.value = e.matches;
      });
    }
  });
  
  return {
    prefersReducedMotion
  };
}