import { ref, onMounted, onBeforeUnmount, isRef, unref, watch, type ComponentPublicInstance } from 'vue';

/**
 * useElementVisibility
 *
 * Observe la visibilité d'un élément (ou d'une instance de composant Vue) via IntersectionObserver.
 *
 * Accepté pour `targetRefOrElement` :
 * - une Ref pointant sur une instance de composant (ComponentPublicInstance) ou un Element,
 * - une instance de composant (ComponentPublicInstance),
 * - un Element,
 * - null.
 *
 * Quand l'élément devient visible (selon le `threshold`), `onVisible` est appelé.
 *
 * Retour :
 * - isVisible: Ref<boolean> — état réactif indiquant si l'élément est visible.
 *
 * Notes :
 * - Si la cible est une Ref, la composable la surveille et démarre l'observateur dès que son `$el` est disponible.
 * - L'observateur est déconnecté automatiquement dans onBeforeUnmount.
 *
 * @param targetRefOrElement Ref|ComponentPublicInstance|Element|null - cible à observer
 * @param onVisible () => void - callback appelé quand l'élément devient visible
 * @param threshold number - seuil d'intersection (par défaut 0.3)
 */
export function useElementVisibility(
  targetRefOrElement: any, // Ref<ComponentPublicInstance|Element> | ComponentPublicInstance | Element | null
  onVisible: () => void,
  threshold = 0.3
) {
  // Référence réactive indiquant si l'élément est visible
  const isVisible = ref(false);

  // IntersectionObserver courant (nullable)
  let observer: IntersectionObserver | null = null;

  /**
   * resolveElement
   * - Normalize l'input pour retourner un Element utilisable par IntersectionObserver
   * - Gère : Ref, ComponentPublicInstance (.$el) et Element
   * - retourne un élément DOM ou null si non résolvable
   */
  const resolveElement = (input: any): Element | null => {
    if (!input) {
      return null;
    }
    const valeurEntree = isRef(input) ? unref(input) : input;

    if (!valeurEntree) {
      return null;
    }
    // Si c'est une instance de composant Vue, retourner son $el
    if ((valeurEntree as ComponentPublicInstance)?.$el) {
      return (valeurEntree as ComponentPublicInstance).$el as Element;
    }
    // Si c'est déjà un Element DOM, le retourner
    return valeurEntree instanceof Element ? valeurEntree : null;
  };

  /**
   * startObserver
   * - Crée l'IntersectionObserver et observe l'élément passé.
   * - Met à jour isVisible et appelle onVisible quand l'élément devient intersectant.
   */
  const startObserver = (el: Element) => {
    stopObserver(); // déjà observé

    observer = new IntersectionObserver(([entry]) => {
      const visible = Boolean(entry?.isIntersecting);
      isVisible.value = visible;
      if (visible && onVisible) {
        onVisible();
      }
    }, { threshold });

    observer.observe(el);
  };

  // Déconnecte et annule l'observer
  const stopObserver = () => {
    observer?.disconnect();
    observer = null;
  };

  // Au montage du composant, tenter de résoudre la cible et démarrer l'observer si possible.
  onMounted(() => {
    const elementCible = resolveElement(targetRefOrElement);
    if (elementCible) {
      startObserver(elementCible);
    }
  });

  // Si l'argument est une Ref, on la surveille pour démarrer l'observer dès que la valeur est disponible/.$el est prêt.
  if (isRef(targetRefOrElement)) {
    
    watch(targetRefOrElement, (newVal) => {
      const elementCible = resolveElement(newVal);
      if (elementCible) {
        startObserver(elementCible);
      }
    }, { immediate: true });
  }

  // Nettoyage automatique
  onBeforeUnmount(stopObserver);

  return { isVisible };
}