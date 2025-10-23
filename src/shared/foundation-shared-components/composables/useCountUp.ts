import { ref, computed, watch, unref, type MaybeRefOrGetter } from 'vue';
import { useRafFn } from '@vueuse/core';
import { useAccessibilityPreferences } from './useAccessibilityPreferences';

export interface UseCountUpOptions {
  value: MaybeRefOrGetter<number | string>;
  duration?: MaybeRefOrGetter<number>;
  countUp?: MaybeRefOrGetter<boolean>;
  pad?: MaybeRefOrGetter<number>;
  startOnVisible?: MaybeRefOrGetter<boolean>;
  easing?: (t: number) => number;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// Helper function to handle MaybeRefOrGetter
function toValue<T>(value: MaybeRefOrGetter<T>): T {
  return typeof value === 'function' ? (value as () => T)() : unref(value);
}

export function useCountUp(options: UseCountUpOptions) {
  const { prefersReducedMotion } = useAccessibilityPreferences();
  
  // Convert to refs
  const targetValue = computed(() => {
    const rawValue = toValue(options.value);
    const n = Number(rawValue);
    return Number.isFinite(n) ? Math.trunc(n) : 0;
  });
  
  const duration = computed(() => toValue(options.duration ?? 800));
  const countUpEnabled = computed(() => toValue(options.countUp ?? true));
  const padLength = computed(() => toValue(options.pad ?? 2));
  const startOnVisible = computed(() => toValue(options.startOnVisible ?? false));
  const easing = options.easing ?? easeOutCubic;
  
  // State
  const current = ref(0);
  const hasAnimated = ref(false);
  const startTime = ref(0);
  const from = ref(0);
  const to = ref(0);
  
  // Display text
  const displayText = computed(() => {
    const value = countUpEnabled.value ? current.value : targetValue.value;
    const text = String(value);
    return padLength.value > 0 ? text.padStart(padLength.value, "0") : text;
  });
  
  // Animation using VueUse's useRafFn
  const { pause, resume } = useRafFn(() => {
    const elapsed = performance.now() - startTime.value;
    const progress = Math.min(1, elapsed / duration.value);
    
    if (progress >= 1) {
      current.value = to.value;
      pause();
      return;
    }
    
    const easedProgress = easing(progress);
    current.value = Math.round(from.value + (to.value - from.value) * easedProgress);
  }, { immediate: false });
  
  function start() {
    if (!countUpEnabled.value || prefersReducedMotion.value) {
      current.value = targetValue.value;
      hasAnimated.value = true;
      return;
    }
    
    from.value = current.value;
    to.value = targetValue.value;
    startTime.value = performance.now();
    hasAnimated.value = true;
    resume();
  }
  
  function restart() {
    if (!startOnVisible.value || hasAnimated.value) {
      start();
    }
  }
  
  // Auto-restart on value change
  watch(targetValue, () => {
    restart();
  });
  
  return {
    current,
    target: targetValue,
    displayText,
    start,
    restart,
    hasAnimated
  };
}