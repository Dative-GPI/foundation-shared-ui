import { type Ref, ref, onBeforeUnmount, watch, type ComponentPublicInstance } from 'vue';


export function useElementVisibility(
  target: Ref<ComponentPublicInstance | null>,
  threshold = 0.3
) {
  const onVisible: Ref<(() => void) | null> = ref(null);
  let observer: IntersectionObserver | null = null;
  
  const startObserver = (el: Element) => {
    stopObserver();

    observer = new IntersectionObserver(([entry]) => {
      const visible = Boolean(entry?.isIntersecting);
      if (visible && onVisible.value) {
        onVisible.value();
      }
    }, { threshold });

    observer.observe(el);
  };

  const stopObserver = () => {
    observer?.disconnect();
    observer = null;
  };

  watch(target , (newVal) => {
    console.log('Target changed:', newVal);
    if(newVal && newVal.$el){
      startObserver(newVal.$el);
    }
  }, { immediate: true });

  onBeforeUnmount(stopObserver);

  return { 
    onVisible
   };
}