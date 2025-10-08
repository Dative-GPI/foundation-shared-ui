export function useAccessibilityPreferences() {
  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;
  
  return {
    prefersReducedMotion
  };
}
