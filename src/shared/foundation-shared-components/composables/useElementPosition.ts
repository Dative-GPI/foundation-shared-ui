import _ from "lodash";
import { ref, type Ref, onMounted, onUnmounted } from "vue";

/**
 * Composable générique pour obtenir la position, la taille, le scroll et la fenêtre visible d'un élément DOM.
 * Fournit width, height, top, left, scrollTop, scrollLeft, scrollWidth, scrollHeight, clientWidth, clientHeight, parents, viewportTop, viewportHeight, etc.
 * @param root ref de l'élément à observer
 * @param selectors Liste de sélecteurs CSS pour trouver les parents scrollables (optionnel)
 */
export function useElementPosition(root: Ref<any>, selectors: string[] = [".fs-fade-out"]) {
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

  // Fenêtre visible (intersection avec parents scrollables + viewport)
  const viewportTop = ref(0);
  const viewportBottom = ref(0);
  const viewportHeight = ref(0);
  const viewportLeft = ref(0);
  const viewportRight = ref(0);
  const viewportWidth = ref(0);

  let intersectionObserver: IntersectionObserver | null = null;
  let parents: Element[] = [];

  // À appeler dans v-resize
  const refresh = () => {
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

    // Calcul de la fenêtre visible
    let absTop = rect.top;
    let absBottom = rect.bottom;
    let absLeft = rect.left;
    let absRight = rect.right;

    for (const parent of parents) {
      const parentRect = parent.getBoundingClientRect();
      absTop = Math.max(absTop, parentRect.top);
      absBottom = Math.min(absBottom, parentRect.bottom);
      absLeft = Math.max(absLeft, parentRect.left);
      absRight = Math.min(absRight, parentRect.right);
    }
    
    absTop = Math.max(absTop, 0);
    absBottom = Math.min(absBottom, window.innerHeight);
    absLeft = Math.max(absLeft, 0);
    absRight = Math.min(absRight, window.innerWidth);

    viewportTop.value = absTop;
    viewportBottom.value = absBottom;
    viewportHeight.value = absBottom - absTop;
    viewportLeft.value = absLeft;
    viewportRight.value = absRight;
    viewportWidth.value = absRight - absLeft;
  }//, 16, { leading: false, trailing: true });

  // À utiliser dans @scroll
  const onScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    scrollTop.value = target.scrollTop;
    scrollLeft.value = target.scrollLeft;
  };

  onMounted(() => {
    if (!root.value) { return; }
    const element = root.value.$el ? root.value.$el : root.value;
    // Recherche des parents scrollables via selectors
    parents = [];
    for (const selector of selectors) {
      let node = element.closest(selector);
      while (node) {
        if (!parents.includes(node)) { parents.push(node); }
        node = node.parentElement?.closest(selector) || null;
      }
    }
    // IntersectionObserver pour callback sur visibilité
    intersectionObserver = new IntersectionObserver(refresh, { root: null, threshold: Array.from({ length: 10 }, (_, i) => i / 10) });
    intersectionObserver.observe(element);
    // Scroll listeners
    document.addEventListener("scroll", refresh);
    for (const node of parents) {
      node.addEventListener("scroll", refresh);
    }
  });

  onUnmounted(() => {
    if (intersectionObserver) {
      intersectionObserver.disconnect();
    }
    for (const node of parents) {
      node.removeEventListener("scroll", refresh);
    }
    document.removeEventListener("scroll", refresh);
    parents = [];
  });

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
    parents,
    viewportTop,
    viewportBottom,
    viewportHeight,
    viewportLeft,
    viewportRight,
    viewportWidth,
    refresh,
    onScroll
  };
}
