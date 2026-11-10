# Étape 4 — FSSynoptic (grille infinie)

`FSWorkspace` + `freeLayout`. Des widgets posés librement, qui peuvent se superposer.

## Modèle

`WorkspaceItem` avec `x, y, width, height` en px monde et `z` (ordre d'affichage). Pas de calque, pas de groupe, pas de rotation.

## `FSSynoptic`

| Prop | Défaut | Sens |
|---|---|---|
| `items` (v-model) | `[]` | éléments |
| `editable` | `false` | édition |
| `gridSize` | `8` (à confirmer) | pas de la grille de fond et du snap |
| `snap` | `true` | aligner positions et tailles sur `gridSize` |
| `handles` | les 8 | poignées par défaut |
| `accept` | — | payloads externes acceptés |

- Grille infinie, pan/zoom en édition et en consultation.
- Ouverture à 100 %, centrée sur le contenu (à confirmer, question ouverte 5).
- Superposition permise : `preview` / `commit` ne déplacent jamais les autres éléments.
- Ordre d'affichage : exposé `bringToFront(id)`, `sendToBack(id)`, `bringForward(id)`, `sendBackward(id)`. Ils réécrivent les `z` et passent par l'historique.
- Un nouvel élément déposé est placé au premier plan.
- Slot `item` : `{ item, rect, selected, moving, resizing }`.

## Critères d'acceptation

- Tests jest : `freeLayout` (snap, min/max), fonctions d'ordre d'affichage.
- Story : synoptique éditable avec éléments superposés, actions d'ordre, liste à déposer, mode consultation.
