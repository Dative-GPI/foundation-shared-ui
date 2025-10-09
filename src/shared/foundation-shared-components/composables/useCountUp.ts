import { ref, computed, onBeforeUnmount, watch, type Ref, type ComputedRef, isRef } from 'vue';
import { useAccessibilityPreferences } from './useAccessibilityPreferences';

// Fonction utilitaire pour obtenir la valeur d'une référence ou d'une valeur simple
function unrefValue<T>(value: T | Ref<T> | ComputedRef<T>): T {
  return isRef(value) ? value.value : value;
}

export function useCountUp(options: {
  value: number | string | Ref<number | string> | ComputedRef<number | string>,
  duration?: number | Ref<number>,
  countUp?: boolean | Ref<boolean>,
  pad?: number | Ref<number>,
  startOnVisible?: boolean | Ref<boolean>,
  easing?: (t: number) => number
}) {
  const { prefersReducedMotion } = useAccessibilityPreferences();
  
  // Internal states
  const current = ref(0);
  const rafId = ref(0);
  const hasAnimated = ref(false);

  // Default easing function
  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  // Get options with their default values
  const easing = options.easing || easeOutCubic;

  // Calculate derived values
  const target = computed(() => {
    const rawValue = unrefValue(options.value);
    const n = Number(rawValue);
    return Number.isFinite(n) ? Math.trunc(n) : 0;
  });
  
  const displayText = computed(() => {
    const showCountUp = unrefValue(options.countUp ?? true);
    const padLength = unrefValue(options.pad ?? 2);
    
    const s = String(showCountUp ? current.value : target.value);
    return padLength > 0 ? s.padStart(padLength, "0") : s;
  });
  
  // Main animation function
  function animate(from: number, to: number, animDuration: number) {
    cancelAnimationFrame(rafId.value);
    const startTime = performance.now();
    
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / animDuration);
      
      const easedProgress = easing(progress);
      const currentValue = from + (to - from) * easedProgress;
      
      current.value = Math.round(currentValue);
      
      if (progress < 1) {
        rafId.value = requestAnimationFrame(step);
      }
    };
    
    rafId.value = requestAnimationFrame(step);
  }

  // Start the animation
  function start() {
    const shouldCountUp = unrefValue(options.countUp ?? true);
    
    if (!shouldCountUp || prefersReducedMotion.value) {
      // If animation is disabled or reduced motion preference is set, jump to final value
      current.value = target.value;
      return;
    }
    
    const animDuration = unrefValue(options.duration ?? 800);
    animate(current.value, target.value, animDuration);
    hasAnimated.value = true;
  }

  // Restart the animation (useful for value changes)
  function restart() {
    const startWhenVisible = unrefValue(options.startOnVisible ?? true);
    
    if (!startWhenVisible || hasAnimated.value) {
      start();
    }
  }

  // Watch for value changes to restart the animation
  watch(() => unrefValue(options.value), () => {
    restart();
  });

  // Clean up ongoing animations on unmount
  onBeforeUnmount(() => {
    cancelAnimationFrame(rafId.value);
  });
  
  return {
    current,
    target,
    displayText,
    start,
    restart,
    hasAnimated
  };
}