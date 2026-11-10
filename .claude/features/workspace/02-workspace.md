# Étape 2 — FSWorkspace

Moteur commun aux trois usages. Ne connaît ni widget, ni nœud, ni grille de dashboard : il délègue le placement à un **layout**.

## Modèle

```ts
interface WorkspaceItem {
  id: string;
  x: number;      // unités du layout (cellules pour la grille, px pour le libre)
  y: number;
  width: number;
  height: number;
  z?: number;     // ordre d'affichage (synoptique)
}

type ResizeHandle = "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";

interface Rect { x: number; y: number; width: number; height: number } // px monde
```

Le workspace reçoit les éléments en `v-model:items` et n'émet une nouvelle liste **qu'à la fin d'un geste**. Les données métier restent chez l'usage : le workspace ne lit que `id` et la géométrie.

## Layout

Objet de fonctions pures, fourni en prop. Il porte toute la différence entre grille finie et espace libre.

```ts
interface WorkspaceLayout {
  toRect(item: WorkspaceItem): Rect;                       // unités → px monde
  fromRect(rect: Rect): Pick<WorkspaceItem, "x"|"y"|"width"|"height">; // px → unités, avec snap
  preview(items: WorkspaceItem[], change: WorkspaceItem): WorkspaceItem[]; // pendant le geste
  commit(items: WorkspaceItem[], change: WorkspaceItem): WorkspaceItem[];  // fin du geste
  bounds?(items: WorkspaceItem[]): Rect | null;            // null = infini
}
```

- `gridLayout({ columns, columnWidth, rowHeight, spacing })` : snap aux cellules, tassement vers le haut (reprise de `computeLayout`). Voir étape 3.
- `freeLayout({ gridSize?, snap })` : px libres, snap optionnel sur `gridSize`, superposition permise.

## Composants

### `FSWorkspace`

| Prop | Défaut | Sens |
|---|---|---|
| `items` (v-model) | `[]` | éléments |
| `layout` | — | `WorkspaceLayout` |
| `editable` | `false` | autorise déplacement, resize, drop, historique |
| `pannable` | `true` | pan au drag du fond / deux doigts |
| `zoomable` | `true` | zoom molette (+ Ctrl) / pinch |
| `minZoom` / `maxZoom` | `0.1` / `4` | bornes du zoom |
| `accept` | `() => false` | quels payloads externes peuvent être déposés |
| `background` | `"grid"` | `"grid"`, `"dots"`, `"none"`, ou slot `background` |
| `selected` (v-model) | `null` | id de l'élément sélectionné |

Émis : `update:items`, `update:selected`, `drop(payload, item)` (élément créé depuis l'extérieur, position déjà calculée), `remove(id)` (touche Suppr, voir question ouverte 3).

Slots : `default` (les `FSWorkspaceItem`), `background`, `overlay` (dessus du monde, ex. liens), `drop-preview` (fantôme pendant un drop externe).

Exposé (slot + `ref`) : `undo`, `redo`, `canUndo`, `canRedo`, `zoomIn`, `zoomOut`, `fit`, `screenToWorld`, `worldToScreen`.

### `FSWorkspaceItem`

Enfant de `FSWorkspace` (contexte par `provide/inject`). Positionne son contenu à partir du rect calculé par le layout et branche les gestes.

| Prop | Défaut | Sens |
|---|---|---|
| `itemId` | — | id dans `items` |
| `draggable` | `true` | déplaçable |
| `handles` | `["se"]` | poignées de redimensionnement affichées (`[]` = pas de resize) |
| `minWidth` / `minHeight` / `maxWidth` / `maxHeight` | — | contraintes, en unités du layout |
| `dragHandle` | `false` | si vrai, seul l'élément qui porte `handleProps` (slot) démarre le déplacement |

Slot par défaut : `{ rect, selected, moving, resizing, handleProps }`.
Pendant un geste, le contenu de l'élément ne reçoit plus les événements (`pointer-events: none`), comme aujourd'hui.

```vue
<FSWorkspace v-model:items="items" :layout="layout" editable>
  <FSWorkspaceItem
    v-for="item in items"
    :key="item.id"
    :itemId="item.id"
    :handles="['e', 'se', 's']"
    :minWidth="2"
  >
    <MyWidget :widget="item" />
  </FSWorkspaceItem>
</FSWorkspace>
```

### `FSWorkspaceBackground`

Grille ou points, dessinés en `background` CSS (comme le SVG du dashboard actuel) et recalés sur pan/zoom. Couleur par défaut `ColorEnum.Light`, configurable.

## Composables internes

- `useViewport` : `{ x, y, zoom }`, conversion écran ↔ monde, molette, pinch, `fit(rect)`.
- `useResizable` : nouveau rect à partir de la poignée tirée et du déplacement, contraintes min/max.
- `useHistory<T>` : pile d'états. On empile seulement à la fin d'un geste (déplacement, resize, drop, suppression), jamais pendant. Ctrl+Z, Ctrl+Shift+Z / Ctrl+Y. L'état empilé est générique pour que le graphe y mette aussi ses liens.
- `useWorkspace` : `provide/inject` du contexte (layout, viewport, état du geste, sélection).

## Comportements

- Déplacer : drag sur l'élément → `layout.preview` à chaque mouvement (aperçu) → `layout.commit` au relâchement → `update:items`.
- Redimensionner : drag sur une poignée, même cycle.
- Drop externe : `FSWorkspace` est une `FSDropZone`. Pendant le survol, fantôme à la position snappée (taille lue dans le payload). Au dépôt : `drop(payload, item)` avec `x, y, width, height` déjà calculés. L'usage ajoute l'élément à sa liste.
- Sélection : clic sur un élément = sélection, clic sur le fond = désélection, une seule à la fois.
- Échap : annule le geste en cours (retour à l'état d'avant).
- Lecture seule (`editable = false`) : pas de poignées, pas de drag d'éléments, pan/zoom selon props.
- Tactile : un doigt sur le fond = pan, deux doigts = pinch-zoom, appui long sur un élément = saisie. Poignées agrandies si `(pointer: coarse)`.

## Critères d'acceptation

- Les trois usages des étapes 3 à 5 se construisent sans modifier `FSWorkspace`.
- Tests jest : `freeLayout`, `useHistory`, conversions du viewport.
- Story : workspace libre avec quelques éléments, liste externe à déposer, boutons annuler/rétablir et zoom.
