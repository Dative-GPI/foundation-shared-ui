import type { Ref } from "vue";
import { ref } from "vue";

export const useThrottle = () => {
  const timeOutId: Ref<any> = ref(null);
  const trailingCall: Ref<Function | null> = ref(null);

  const throttle = (callback: Function, wait: number, leading: boolean = true, trailing: boolean = true, ...args: any[]): void => {
    trailingCall.value = () => callback(...args);
    if (timeOutId.value) {
        return;
    };
    if (leading) {
      callback(...args);
      trailingCall.value = null;
    }
    timeOutId.value = setTimeout(() => handleTrailing(wait, trailing), wait);
  };

  const handleTrailing = (wait: number, trailing: boolean = true): void => {
    if (trailing && trailingCall.value) {
      trailingCall.value();
      trailingCall.value = null;
      timeOutId.value = setTimeout(() => handleTrailing(wait, trailing), wait);
    }
    else {
      cancel();
    }
  }

  const cancel = (): void => {
    if (timeOutId.value) {
      clearTimeout(timeOutId.value);
      timeOutId.value = null;
    }
  };

  return {
    throttle,
    cancel
  };
}