import { ref, computed, watch, type Ref, type ComponentPublicInstance } from 'vue';
import { useAccessibilityPreferences } from './useAccessibilityPreferences';
import { useAnimationFrame } from './useAnimationFrame';
import { useElementVisibility } from './useElementVisibility';

export function useCountUp(
    targetValue: Ref<number>,
    duration = ref<number>(800),
    pad = ref<number>(2),
    startOnVisible = ref<boolean>(false),
    elementRef: Ref<ComponentPublicInstance | null> = ref(null),
    easing = (t: number) =>  1 - Math.pow(1 - t, 3)
) {
  const { prefersReducedMotion } = useAccessibilityPreferences();
  
  const { onVisible } = useElementVisibility(
    elementRef
  );
  
  const current = ref<number>(0);
  const animating = ref<boolean>(false);
  const startTime = ref<number>(0);
  const from = ref<number>(0);
  const to = ref<number>(0);

  const displayText = computed(() => {
    const text = String(current.value);
    return pad.value > 0 ? text.padStart(pad.value, "0") : text;
  });
  
  const { start: afStart, stop: afStop } = useAnimationFrame(() => {
    const elapsed = performance.now() - startTime.value;
    const progress = Math.min(1, elapsed / duration.value);
    
    if (progress >= 1) {
      current.value = to.value;
      animating.value = false;
      afStop();
      return;
    }
    
    const easedProgress = easing(progress);
    current.value = Math.round(from.value + (to.value - from.value) * easedProgress);
  });
  
  const start = () => {
    if (prefersReducedMotion.value) {
      current.value = targetValue.value;
      animating.value = false;
      return;
    }
    
    from.value = current.value;
    to.value = targetValue.value;
    startTime.value = performance.now();
    animating.value = true;
    afStart();
  }
  
  watch(targetValue, () => {
    start();
  }, { immediate: true });

  onVisible.value = () => {
    if (startOnVisible.value && !animating.value) {
      current.value = from.value;
      start();
    }
  };  
  
  return {
    displayText,
  };
}