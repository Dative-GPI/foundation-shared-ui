# Espaces de travail graphiques — vue d'ensemble

Statut : **specs en cours** (2026-11-06).

## Objectif

Un moteur front d'espace de travail, réutilisable et configurable, pour trois usages :

| Usage | Composant | Espace | Éléments |
|---|---|---|---|
| Tableau de bord | `FSDashboard` | grille finie (colonnes fixes), positions en cellules, tassement vers le haut | widgets |
| Synoptique | `FSSynoptic` | grille infinie, positions libres, superposition, ordre d'affichage | widgets |
| Builder de requête | `FSNodeGraph` | espace infini, nœuds reliés par des liens (type Node-RED) | nœuds + ports + liens |

Notions communes : déplacer et redimensionner les éléments au drag, déposer un élément venant de l'extérieur (liste de widgets, de nœuds…), zoom/pan, annuler/rétablir.

Le workspace est un **outil front sans métier** : couleurs, rendu des éléments, règles de liaison entre nœuds, etc. sont fournis à l'usage par props, fonctions et slots.

## Décisions

| # | Décision |
|---|---|
| D1 | Tout est fait maison, sans lib de graphe ni de gestes (pas de Vue Flow, pas d'interact.js). |
| D2 | Nouveau package `@dative-gpi/foundation-shared-workspace` (`src/shared/foundation-shared-workspace`). |
| D3 | Scope v1 : zoom/pan + annuler/rétablir. Sélection simple seulement (pas de multi-sélection, pas de magnétisme/guides). |
| D4 | `FSDashboard` est créé dans le nouveau package. `FBaseDashboard` (DAT-Foundation) l'utilisera plus tard : **on ne touche pas à DAT-Foundation pour l'instant**. Le modèle `Widget` (`id, x, y, width, height`) doit rester compatible. |
| D5 | Synoptique : pas d'objet « calque », juste un ordre d'affichage (`z`) par élément. |
| D6 | Synoptique en consultation : taille réelle + pan/zoom. |
| D7 | Liens entre nœuds : le moteur n'impose rien. Une fonction fournie à l'usage décide si deux ports peuvent être reliés. Couleurs et rendu des liens configurables. |
| D8 | L'édition marche sur tablette (drag, resize, pinch-zoom au doigt). |
| D9 | Poignées de redimensionnement configurables par élément (prop `handles` sur `FSWorkspaceItem`). |
| D10 | Pas de rotation. |
| D11 | Toutes les interactions passent par les **Pointer Events** (souris, tactile, stylet), y compris le drop depuis l'extérieur. Le drag HTML5 natif est abandonné : il marche mal au doigt (raison du code tactile actuel de `FSDraggable`). |
| D12 | Les composables travaillent sur l'**état** (positions dans le repère de l'espace), jamais en lisant/modifiant le DOM (`closest`, `dataset`, `style.width`…). Le rendu se déduit de l'état. |

## Architecture

```
Primitives (composables, sans métier)
  usePointerGesture · useDragSession · useDraggable · useDropZone
  useResizable · useViewport · useHistory
        │
        ▼
FSWorkspace (+ FSWorkspaceItem, FSWorkspaceBackground)
  viewport, éléments, sélection, historique, drop extérieur,
  « layout » fourni en prop qui décide du placement
        │
        ├── gridLayout  → FSDashboard
        ├── freeLayout  → FSSynoptic
        └── freeLayout  → FSNodeGraph (+ FSWorkspacePort, FSWorkspaceEdges)
        │
        ▼
Métier (DAT-Foundation, plus tard) : FBaseDashboard, synoptique, query builder
```

Rendu : DOM. Les éléments sont positionnés en absolu dans un calque « monde » transformé (`translate + scale`). Les liens sont dessinés dans un SVG du même calque. La grille de fond est un `background` du conteneur, recalé sur le pan/zoom.

## Arborescence du package

```
src/shared/foundation-shared-workspace/
  package.json · index.ts · AGENTS.md
  composables/   usePointerGesture, useViewport, useResizable, useHistory, useWorkspace
  layouts/       gridLayout.ts, freeLayout.ts (fonctions pures, testées en jest)
  models/        WorkspaceItem, Rect, ResizeHandle, WorkspaceLayout, WorkspaceEdge…
  components/    FSWorkspace, FSWorkspaceItem, FSWorkspaceBackground,
                 FSWorkspacePort, FSWorkspaceEdges,
                 FSDashboard, FSSynoptic, FSNodeGraph
```

## Étapes

| Étape | Fichier | Contenu |
|---|---|---|
| 1 | [01-primitives.md](01-primitives.md) | Drag/drop en Pointer Events, `FSDraggable` sans template, `FSDropZone`, migration de `FSDataTableUI` |
| 2 | [02-workspace.md](02-workspace.md) | `FSWorkspace` : viewport, éléments, resize, sélection, historique, drop extérieur |
| 3 | [03-dashboard.md](03-dashboard.md) | `FSDashboard` (grille finie), parité avec `FBaseDashboard` |
| 4 | [04-synoptic.md](04-synoptic.md) | `FSSynoptic` (grille infinie, ordre d'affichage) |
| 5 | [05-node-graph.md](05-node-graph.md) | `FSNodeGraph` (ports, liens, règle de liaison) |
| — | (DAT-Foundation) | `FBaseDashboard` utilise `FSDashboard` |

Chaque étape : stories Storybook (règles `dev/storybook/AGENTS.md`), tests jest pour la logique pure, composants au format du repo (`defineComponent` + `setup`), couleurs via `ColorEnum`.

## Questions ouvertes

1. **Où vivent les primitives de drag/drop ?** `FSDataTableUI` (shared-components) utilise `FSDraggable`. Si les primitives sont dans le package workspace, shared-components dépendrait de workspace, alors que workspace dépend déjà de shared-components (`FSRow`, couleurs…). **Proposition** : `useDraggable`, `useDropZone`, `useDragSession`, `usePointerGesture`, `FSDraggable` et `FSDropZone` dans shared-components. Tout le reste dans workspace.
2. **Conflit scroll / drag au doigt** sur le dashboard (scroll natif) : proposition = appui long (~150 ms, comme aujourd'hui) pour saisir un élément au doigt, glisser directement sinon fait défiler.
3. **Touche Suppr** sur l'élément sélectionné : le workspace émet `remove` et l'usage décide ? (proposé)
4. **Volume cible** : combien d'éléments au maximum (synoptique, graphe) ? Décide si on prévoit la virtualisation (le dashboard actuel utilise `v-lazy`).
5. **Zoom/pan mémorisés** (par utilisateur, par écran) ou remis à zéro à chaque ouverture ?
