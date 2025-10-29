import { ref, computed, watch, type Ref, onBeforeUnmount } from 'vue';
import { useAccessibilityPreferences } from './useAccessibilityPreferences';

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
};

function useAnimationFrame(callback: () => void) {
    let animationId: number | null = null;
    let isActive = false;

    const start = () => {
      if (isActive) {
        return;
      }
      isActive = true;
    
      const animate = () => {
        if (!isActive) {return;}
        
        callback();
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    };

    const stop = () => {
      isActive = false;
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      };

      // Cleanup automatique
      onBeforeUnmount(() => {
        stop();
      });

      return {
        start,
        stop,
        isActive: computed(() => isActive)
      };
  };

export function useCountUp(
    value: Ref<number>,
    duration = 800,
    countUp = true,
    pad = 2,
    startOnVisible = false,
    easing = easeOutCubic
) {
  const { prefersReducedMotion } = useAccessibilityPreferences();
  
  // Convert to refs
  const targetValue = computed(() => {
    const n = Number(value.value);
    return Number.isFinite(n) ? Math.trunc(n) : 0;
  });
  
  // State
  const current = ref<number>(0);
  const hasAnimated = ref<boolean>(false);
  const startTime = ref<number>(0);
  const from = ref<number>(0);
  const to = ref<number>(0);

  // Display text
  const displayText = computed(() => {
    const value = prefersReducedMotion.value ? targetValue.value : current.value;
    const text = String(value);
    return pad > 0 ? text.padStart(pad, "0") : text;
  });
  
  const { start: afStart, stop: afStop } = useAnimationFrame(() => {
    const elapsed = performance.now() - startTime.value;
    const progress = Math.min(1, elapsed / duration);
    
    if (progress >= 1) {
      current.value = to.value;
      afStop();
      return;
    }
    
    const easedProgress = easing(progress);
    current.value = Math.round(from.value + (to.value - from.value) * easedProgress);
  });
  
  function start() {
    if (!countUp || prefersReducedMotion.value) {
      current.value = targetValue.value;
      hasAnimated.value = true;
      return;
    }
    
    from.value = current.value;
    to.value = targetValue.value;
    startTime.value = performance.now();
    hasAnimated.value = true;
    afStart();
  }
  
  function restart() {
    afStop();
    hasAnimated.value = false;
    current.value = 0;
    start();
  }
  
  // Auto-restart on value change
  watch(targetValue, () => {
    if (!startOnVisible || hasAnimated.value) {
      start();
    }
  }, { immediate: true });
  
  return {
    current,
    target: targetValue,
    displayText,
    start,
    restart,
    hasAnimated
  };
}