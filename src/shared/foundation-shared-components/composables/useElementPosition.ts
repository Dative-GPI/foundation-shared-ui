import _ from "lodash";
import { ref, type Ref } from "vue";

/**
 * Composable générique pour obtenir la position, la taille et le scroll d'un élément DOM.
 * Fournit width, height, top, left, scrollTop, scrollLeft, scrollWidth, scrollHeight, clientWidth, clientHeight.
 * La méthode `refresh` doit être appelée par la directive v-resize du composant parent.
 */
export function useElementPosition(root: Ref<any>) {
  const width = ref(0);
  const height = ref(0);
  const top = ref(0);
  const left = ref(0);
  const scrollTop = ref(0);
  const scrollLeft = ref(0);
  const scrollWidth = ref(0);
  const scrollHeight = ref(0);
  const clientWidth = ref(0);
  const clientHeight = ref(0);

  // À appeler dans v-resize
  const refresh = _.throttle(() => {
    if (!root.value) { return; }
    const el = root.value.$el ? root.value.$el : root.value;
    const rect = el.getBoundingClientRect();
    width.value = rect.width;
    height.value = rect.height;
    top.value = rect.top;
    left.value = rect.left;
    clientWidth.value = el.clientWidth;
    clientHeight.value = el.clientHeight;
    scrollWidth.value = el.scrollWidth;
    scrollHeight.value = el.scrollHeight;
  }, 16, { leading: false, trailing: true });

  // À utiliser dans @scroll
  const onScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    scrollTop.value = target.scrollTop;
    scrollLeft.value = target.scrollLeft;
  };

  return {
    root,
    width,
    height,
    top,
    left,
    scrollTop,
    scrollLeft,
    scrollWidth,
    scrollHeight,
    clientWidth,
    clientHeight,
    refresh,
    onScroll
  };
}
