# Étape 3 — FSDashboard (grille finie)

`FSWorkspace` + `gridLayout`. Remplacera à terme la partie espace de travail de `FBaseDashboard` (DAT-Foundation). **On ne modifie pas DAT-Foundation à cette étape.**

## Référence existante (DAT-Foundation, `src/shared/Foundation.Shared.UI`)

- `components/dashboard/FBaseDashboard.vue` : liste de widgets à gauche (ajout au clic), grille à droite.
- `composables/dashboards/useDashboardWidgets.ts` : `computeLayout` (tri par `y, x`, chaque widget descend jusqu'à la première place libre, l'élément en cours de geste est prioritaire).
- `composables/dashboards/useDashboardGrid.ts` : `columnWidth` fixe ou `auto`, lignes = dernier widget + 5 en édition (10 minimum), fond SVG.
- `useDashboardGrabInteractions.ts` / `useDashboardResizeInteractions.ts` : souris seulement, resize coin bas-droit.

## `gridLayout`

```ts
gridLayout({ columns, columnWidth: number | "auto", rowHeight, spacing })
```

- `toRect` : `left = x * (cellWidth + spacing)`, `width = w * (cellWidth + spacing) - spacing` (formules actuelles).
- `fromRect` : arrondi à la cellule la plus proche, borné aux colonnes.
- `preview` / `commit` : `computeLayout` repris en fonction pure, l'élément modifié est prioritaire.
- Les widgets qui dépassent `columns` sont ignorés (comportement actuel). « Plus de place » ne lève plus d'exception : le geste est refusé.
- `bounds` : largeur fixe, hauteur = dernière ligne occupée (+ 5 lignes en édition, 10 minimum).

## `FSDashboard`

| Prop | Défaut | Sens |
|---|---|---|
| `items` (v-model) | `[]` | widgets (`id, x, y, width, height` + métier) |
| `columns` | `12` (à confirmer) | nombre de colonnes |
| `columnWidth` | `"auto"` | largeur d'une colonne, ou `auto` = remplit le conteneur |
| `rowHeight` | — | hauteur d'une ligne |
| `spacing` | — | espace entre cellules |
| `editable` | `false` | édition |
| `handles` | `["se"]` | poignées par défaut des widgets |
| `accept` | — | payloads externes acceptés |

- Pas de zoom/pan : scroll natif du conteneur.
- Slot `item` : `{ item, rect, selected, moving, resizing }`. L'usage y met son widget. Configurer, dupliquer, supprimer restent côté métier (`FBaseDashboard`).
- Drop externe : fantôme de la taille du widget, snappé sur la grille, tassement appliqué en aperçu.
- Tactile : appui long pour saisir un widget, sinon le doigt fait défiler (question ouverte 2).

## Parité avec `FBaseDashboard`

- [ ] mêmes formules de position et de taille ;
- [ ] même tassement vers le haut, élément en cours de geste prioritaire ;
- [ ] même calcul du nombre de lignes ;
- [ ] même fond de grille ;
- [ ] le geste continue pendant le scroll du conteneur (offset de scroll pris en compte) ;
- [ ] relâcher hors de la grille annule le geste.

Ajouts : drop depuis l'extérieur, tactile, annuler/rétablir, poignées configurables.

## Critères d'acceptation

- Tests jest de `gridLayout` sur des cas repris du comportement actuel.
- Story : dashboard éditable + liste de widgets à déposer.
