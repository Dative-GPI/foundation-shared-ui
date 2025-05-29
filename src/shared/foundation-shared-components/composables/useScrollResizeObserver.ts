import { onMounted, onUnmounted } from "vue";

/**
 * Composable pour gérer automatiquement le scroll et l'observation d'un élément (IntersectionObserver) afin de déclencher un callback.
 * @param rootRef ref de l'élément à observer (ex: root du composable useElementPosition)
 * @param callback fonction à appeler à chaque scroll ou intersection
 * @param selectors liste de sélecteurs CSS pour trouver les parents scrollables (optionnel)
 */
export function useScroll(rootRef: any, callback: () => void, selectors: string[] = [".fs-fade-out"]) {
  let intersectionObserver: IntersectionObserver | null = null;
  let parents: Element[] = [];

  onMounted(() => {
    if (!rootRef.value) {return;}
    const element = rootRef.value.$el ? rootRef.value.$el : rootRef.value;
    // Recherche des parents scrollables
    for (const selector of selectors) {
      let node = element.closest(selector);
      while (node) {
        parents.push(node);
        node = node.parentElement?.closest(selector) || null;
      }
    }
    // IntersectionObserver pour callback sur visibilité
    intersectionObserver = new IntersectionObserver(callback, { root: null, threshold: Array.from({ length: 10 }, (_, i) => i / 10) });
    intersectionObserver.observe(element);
    // Scroll listeners
    document.addEventListener("scroll", callback);
    for (const node of parents) {
      node.addEventListener("scroll", callback);
    }
  });

  onUnmounted(() => {
    if (intersectionObserver) {
      intersectionObserver.disconnect();
      intersectionObserver = null;
    }
    document.removeEventListener("scroll", callback);
    for (const node of parents) {
      node.removeEventListener("scroll", callback);
    }
    parents = [];
  });
}
