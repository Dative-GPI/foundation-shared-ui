# Étape 5 — FSNodeGraph (builder de nœuds)

`FSWorkspace` + `freeLayout` + ports et liens. Base du futur builder de requête, mais **sans aucune règle métier** : tout ce qui est spécifique (types de nœuds, couleurs, liaisons autorisées) est fourni à l'usage.

## Modèle

```ts
interface WorkspacePortRef { nodeId: string; portId: string }

interface WorkspaceEdge {
  id: string;
  from: WorkspacePortRef; // port de sortie
  to: WorkspacePortRef;   // port d'entrée
}
```

Les nœuds sont des `WorkspaceItem`. Les ports ne sont pas dans le modèle : ils sont déclarés dans le template du nœud.

## `FSNodeGraph`

| Prop | Défaut | Sens |
|---|---|---|
| `items` (v-model) | `[]` | nœuds |
| `edges` (v-model) | `[]` | liens |
| `editable` | `false` | édition |
| `canConnect` | `() => true` | `(from, to, edges) => boolean` : le lien est-il autorisé |
| `edgeColor` | `ColorEnum.Dark` | couleur des liens, ou `(edge) => ColorBase` |
| `edgeShape` | `"bezier"` | `"bezier"`, `"step"`, `"straight"` |
| `accept` | — | payloads externes acceptés (nouveaux nœuds) |

Slots :

- `item` : `{ item, rect, selected, moving }`. L'usage y dessine son nœud et y place ses `FSWorkspacePort`.
- `edge` : `{ edge, path, from, to, selected }` pour remplacer le rendu d'un lien.

L'historique couvre nœuds **et** liens.

## `FSWorkspacePort`

À placer dans le slot `item`. S'enregistre auprès du graphe, qui mesure sa position dans le nœud pour accrocher les liens.

| Prop | Défaut | Sens |
|---|---|---|
| `portId` | — | id unique dans le nœud |
| `direction` | — | `"input"` ou `"output"` |
| `side` | `"left"` en entrée, `"right"` en sortie | côté d'où part le lien |
| `color` | `ColorEnum.Primary` | couleur du port |

Slot par défaut : `{ connecting, valid, connected }` pour styler le port.

## `FSWorkspaceEdges`

Calque SVG dans le monde, sous les nœuds. Dessine les liens et le lien temporaire pendant une connexion.

## Comportements

- Relier : drag depuis un port → lien temporaire qui suit le pointeur → pendant le drag, chaque port est marqué valide/invalide via `canConnect` → relâcher sur un port valide ajoute le lien (`update:edges`), ailleurs annule.
- Sélectionner un lien : clic dessus (zone de clic élargie). Suppr → `remove-edge(id)` (même logique que la question ouverte 3).
- Déplacer un nœud : ses liens suivent en direct.
- Supprimer un nœud : c'est l'usage qui retire aussi ses liens (le graphe ne modifie pas `edges` de lui-même).

## Critères d'acceptation

- Tests jest : calcul des chemins de liens, `canConnect` appelé avec les bons arguments.
- Story : quelques nœuds de types différents, règle `canConnect` d'exemple (sortie → entrée, pas deux liens sur une même entrée), liste de nœuds à déposer.
