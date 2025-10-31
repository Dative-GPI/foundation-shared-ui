import { onBeforeUnmount, computed } from 'vue';

export const useAnimationFrame = (callback: () => void) => {
  let animationId: number | null = null;
  let isActive = false;

  const start = () => {
    if (isActive) {
      return;
    }
    isActive = true;
  
    const animate = () => {
      if (!isActive) {
          return;
      }

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

    onBeforeUnmount(() => {
      stop();
    });

    return {
      start,
      stop,
      isActive: computed(() => isActive)
    };
};