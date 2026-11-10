# Étape 1 — Primitives de drag/drop et FSDraggable sans template

## Constat

`FSDraggable` (`components/lists/FSDraggable.vue`) :

- drag HTML5 natif + code tactile maison qui imite les événements `dragover` / `drop` ;
- lié au tableau : `item.index`, `elementSelector`, `dataset.initialIndex`, `dataset.item` ;
- affiche un `FSRow` (donc impose un élément et une mise en page) ;
- seul utilisateur : `FSDataTableUI` (réordonnancement des lignes et des tuiles).

Le dashboard de DAT-Foundation a ses propres composables souris, sans tactile, qui lisent et modifient le DOM.

## Objectif

Une seule mécanique de drag, en Pointer Events, utilisable :

- sans template (composables) ;
- dans un template, via `FSDraggable` / `FSDropZone` **sans rendu propre** ;
- pour réordonner une liste et pour déposer un élément dans un workspace.

## Composables

### `usePointerGesture(options)`

Brique la plus basse : un geste d'un pointeur.

- `pointerdown` → seuil de démarrage → `move` → `end` ou `cancel`.
- Seuil : distance (défaut 4 px) **ou** appui long en tactile (défaut 150 ms, voir question ouverte 2).
- `setPointerCapture` pour suivre le pointeur hors de l'élément.
- Échap ou `pointercancel` → `cancel`.
- Un clic sans dépasser le seuil reste un clic.
- Retourne les handlers à poser (`onPointerdown`) et l'état (`active`, `start`, `current`, `delta`).

### `useDragSession()`

État partagé (singleton) du drag en cours, pour que source et zone de dépôt se parlent sans DOM :

```ts
interface DragSession<T = unknown> {
  payload: T;            // donnée transportée, fournie par la source
  pointer: Point;        // position écran courante
  overZone: string|null; // zone survolée
}
```

### `useDraggable(options)`

Source de drag.

| Option | Type | Sens |
|---|---|---|
| `payload` | `() => T` | donnée transportée (ex. `{ kind: "widget", templateId, width, height }`) |
| `disabled` | `boolean` | désactive le drag |
| `handle` | `boolean` | si vrai, seul l'élément qui porte `handleProps` démarre le drag |

Retourne `{ dragging, props, handleProps }`.
Pendant le drag, un aperçu suit le pointeur. Par défaut c'est une copie de l'élément, et le slot `preview` de `FSDraggable` permet de le remplacer.

### `useDropZone(options)`

Zone de dépôt. Le survol se calcule à partir des rectangles des zones enregistrées et de la position du pointeur, pas avec `elementFromPoint`.

| Option | Type | Sens |
|---|---|---|
| `accept` | `(payload) => boolean` | la zone accepte-t-elle ce payload |
| `onEnter / onOver / onLeave` | `(payload, point) => void` | survol (`point` en coordonnées écran) |
| `onDrop` | `(payload, point) => void` | dépôt |

Retourne `{ over, accepted, props }`.

## Composants sans template

```vue
<FSDraggable
  :payload="() => widgetTemplate"
  v-slot="{ props, dragging }"
>
  <FWidgetTemplateTile v-bind="{ ...props, ...widgetTemplate }" :class="{ dragging }" />
</FSDraggable>

<FSDropZone
  :accept="(p) => p.kind === 'widget'"
  @drop="onDrop"
  v-slot="{ props, over, accepted }"
>
  <div v-bind="props">…</div>
</FSDropZone>
```

- Aucun élément ajouté : le slot par défaut est rendu tel quel.
- L'usage pose `props` sur l'élément de son choix (pas de `cloneVNode` caché).
- Émis : `dragstart`, `dragend`, `drop`.

## Migration de `FSDataTableUI`

- Réordonnancement des lignes (mode table) et des tuiles (mode itérateur) sur `FSDraggable` / `FSDropZone`.
- Suppression de `elementSelector`, `dataset.*` et du code tactile maison.
- Non-régression à vérifier : réordonner à la souris et au doigt, en mode table et tuiles, `draggableDisabled`, l'événement de réordonnancement émis.

## Critères d'acceptation

- Drag souris, doigt et stylet avec le même code.
- Un clic sur une source ne démarre pas de drag.
- Échap annule un drag en cours.
- Stories : `FSDraggable` (liste réordonnable, source vers zone de dépôt) et `FSDropZone`.
- Tests jest sur la logique du seuil et de la session.
