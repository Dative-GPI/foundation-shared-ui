import { ref, computed, onBeforeUnmount, watch } from 'vue';
import { useAccessibilityPreferences } from './useAccessibilityPreferences';

export function useCountUp(options: {
  value: number | string,
  duration?: number,
  countUp?: boolean,
  pad?: number,
  startOnVisible?: boolean,
  easing?: (t: number) => number
}) {
  const {
    value,
    duration = 800,
    countUp = true,
    pad = 2,
    startOnVisible = true,
    easing = easeOutCubic
  } = options;
  
  const { prefersReducedMotion } = useAccessibilityPreferences();
  const current = ref(0);
  const rafId = ref(0);
  const hasAnimated = ref(false);
  
  // Easing function
  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }
  
  // Target value computation
  const target = computed(() => {
    const n = Number(value);
    return Number.isFinite(n) ? Math.trunc(n) : 0;
  });
  
  // Formatted display value
  const displayText = computed(() => {
    const s = String(countUp ? current.value : target.value);
    return pad > 0 ? s.padStart(pad, "0") : s;
  });
  
  // Animation function
  function animate(from: number, to: number, animDuration: number) {
    cancelAnimationFrame(rafId.value);
    const start = performance.now();
    
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / animDuration);
      const v = from + (to - from) * easing(t);
      current.value = Math.round(v);
      if (t < 1) {
        rafId.value = requestAnimationFrame(step);
      }
    };
    
    rafId.value = requestAnimationFrame(step);
  }
  
  // Start animation
  function start() {
    if (!countUp) {
      current.value = target.value;
      return;
    }
    
    if (prefersReducedMotion) {
      current.value = target.value;
      return;
    }
    
    animate(current.value, target.value, duration);
    hasAnimated.value = true;
  }
  
  // Clean up
  onBeforeUnmount(() => {
    cancelAnimationFrame(rafId.value);
  });
  
  // The restart method can be useful when the value changes.
  function restart() {
    if (hasAnimated.value || !startOnVisible) {
      start();
    }
  }
  
  // Monitor changes in value
  watch(() => value, () => {
    restart();
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