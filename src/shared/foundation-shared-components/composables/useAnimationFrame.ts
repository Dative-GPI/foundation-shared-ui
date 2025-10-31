import { onBeforeUnmount, ref, readonly } from 'vue';

export const useAnimationFrame = (callback: () => void) => {
  let animationId: number | null = null;
  const isActive = ref(false);

  const start = () => {
    if (isActive.value) {
      return;
    }
    isActive.value = true;
  
    const animate = () => {
      if (!isActive.value) {
          return;
      }

      callback();
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
  };

  const stop = () => {
    isActive.value = false;
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    };

    onBeforeUnmount(() => {
      stop();
    });

    return {
      start,
      stop,
      isActive: readonly(isActive)
    };
};