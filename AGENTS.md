# Instructions pour les agents

Ce fichier ne contient que des règles validées. Les règles spécifiques à une partie du repo sont dans un `AGENTS.md` situé dans le dossier concerné.

## Index

- [dev/storybook/AGENTS.md](dev/storybook/AGENTS.md) — règles d'écriture des stories Storybook (`*.stories.ts`). À lire avant de créer ou modifier une story.

## Couleurs

Définitions : `src/shared/foundation-shared-components/models/colors.ts`. Thème par défaut : `src/shared/foundation-shared-components/themes/default.ts`.

- Les couleurs du thème sont listées dans `ColorEnum` (`Background`, `Light`, `Dark`, `Primary`, `Error`, `Warning`, `Alert`, `Success`).
- La prop `color` des composants est de type `ColorBase` : une valeur de `ColorEnum` ou un code hexadécimal `#RRGGBB`.
- Dans le code des composants, utiliser `ColorEnum` (ex. `ColorEnum.Primary`), pas une string brute (`"primary"`).
- Chaque couleur se décline selon `ColorVariations` :
  - `base` : la couleur pure ;
  - `light` : version plus claire (vers le blanc, légèrement désaturée) ;
  - `soft` : version légèrement plus brillante et claire ;
  - `dark` : version plus sombre ;
  - `<variation>Contrast` : couleur à utiliser par-dessus la variation (texte, icône) pour la lisibilité.
  Les gris ont un traitement particulier pour rester lisibles.
- Pour calculer les variations d'une couleur : `useColors().getColors(color: ColorBase): ColorVariations` (`composables/useColors.ts`).

### Couleurs dans `FSCard` et ses enfants

- Une `FSCard` avec une `color` l'applique en fond et en bordure, et définit une couleur de contenu par défaut.
- Les enfants (`FSSpan`, `FSIcon`…) sans couleur explicite héritent de cette couleur de contenu, qui suit automatiquement les états de la carte (hover, active…).
- Pour colorer un élément custom tout en suivant les états de la carte, utiliser `contentVariant`, exposé par le slot par défaut de `FSCard`. C'est une clé de `ColorVariations` (`"lightContrast"`, `"baseContrast"`, `"darkContrast"`…) : l'appliquer sur les variations de la couleur de la carte.

## Enums

- Les enums du domaine vont dans `src/shared/foundation-shared-domain/enums`.
- Toujours commencer par `None = 0`.
- Code de traduction d'une valeur : `ui.<nom-de-l-enum>.<valeur>`, en kebab-case (ex. `ui.chart-type.score-card`, `ui.alert-status.triggered`).

## Props communes

Garder la même sémantique partout :

| Prop | Défaut | Sens |
|---|---|---|
| `disabled` | `false` | Désactive toute interaction et applique le style inactif (fields, boutons, checkbox, options, slider, toggle set, boutons des dialogs…). |
| `readonly` | `false` | (Fields) valeur non modifiable, mais **sans** le style grisé de `disabled`. |
| `showRemove` | `true` | (`FSTag`, `FSTagGroup`) affiche le bouton de suppression. |
| `selectable` | `true` sur les listes, `false` sur les tiles | Active la sélection (colonne de cases à cocher sur les listes, coche/effet actif sur les tiles). |
| `singleSelect` | `false` | Limite la sélection à un seul élément. Sur un tile : pas de case à cocher, la sélection se voit sur la carte. |

- La prop `showSelect` sur les listes est dépréciée (elle n'agit que sur le mode table, via l'héritage d'attributs vers `FSDataTable`). Ne pas l'utiliser.
- Sur `FSTile`, l'affichage de la coche dépend de `selectable`, mais aussi de la présence d'un autre écouteur du clic sur la carte.

## DataTables : listes et explorers

- **List** : liste sans navigation, un ou plusieurs types d'éléments sans hiérarchie.
- **Explorer** : navigation par dossiers, plusieurs types d'éléments (ex. `Group` + `DeviceOrganisation`, ou `DashboardOrganisation` + `DashboardShallow` + `Folder`).

Couches pour une entité Foundation :

| Composant | Emplacement | Rôle | Commun à toutes les entités |
|---|---|---|---|
| `FSDataTableUI` | foundation-shared-components | — | ✅ |
| `FSDataTable` | foundation-core-components | — | ✅ |
| `FSBaseXxxxxList` / `Explorer` | foundation-core-components | Structure générale de la table (colonnes, types, comportements) | ❌ |
| `BaseXxxxxList` / `Explorer` | `Foundation.Core.UI/.../Xxxxxx/` | Spécificités Foundation, principalement le routage au clic | ❌ |
| `MainXxxxxsList` / `Explorer` | `Foundation.Core.UI/.../Xxxxxx/` | Liste principale : définit le code `TABLES.XXXXXS_LIST_MAIN` et les boutons d'action | ❌ |

Couches pour une entité d'extension :

| Composant | Emplacement | Rôle | Commun à toutes les entités |
|---|---|---|---|
| `FSDataTableUI` | foundation-shared-components | — | ✅ |
| `FEDataTable` | foundation-extension-core-ui | — | ✅ |
| `BaseXxxxxList` / `Explorer` | `ExtensionName.Core.UI/.../Xxxxxx/` | Structure générale de la table + routage au clic | ❌ |
| `MainXxxxxsList` / `Explorer` | `ExtensionName.Core.UI/.../Xxxxxx/` | Liste principale : définit le code `TABLES.XXXXXS_LIST_MAIN` et les boutons d'action | ❌ |

Seules les couches `foundation-shared-components` et `foundation-core-components` sont dans ce repo.

## Hauteurs (FSRow, FSCol…)

- `height="100%"` : quand le parent n'a qu'un seul enfant, qui prend toute sa hauteur.
- `height="fill"` : quand le parent a plusieurs enfants et que l'un d'eux doit prendre l'espace restant (équivalent à `flex: 1`).
- `min-height` : définit un plancher. `min-height: 0` force un enfant à rétrécir si son parent est plus petit.

Interdit :

- un pourcentage de hauteur autre que `100%` ;
- `fill` dans un parent sans dimension (overflow imprévisible) ;
- compter uniquement sur `min-height` pour la mise en page : prévoir un scroll ou un masquage si le contenu dépasse ;
- mélanger plusieurs stratégies de hauteur (% + flex + min-height) sans tester.

## Watch et computed

- `computed` : pour une valeur dérivée (transformer, combiner des données). Pas de logique impérative dedans.
- `watch` : pour exécuter du code impératif quand une donnée change (appel API, synchronisation externe, timer…).
- Source d'un `watch` : une ref directement (`watch(a, …)`), ou une fonction qui retourne la valeur (`watch(() => props.x, …)`).
- Plusieurs sources : toujours un tableau de fonctions, jamais une fonction qui retourne un tableau (sinon, nouvelle référence de tableau à chaque évaluation, donc déclenchements inutiles).

  ```ts
  watch([() => a.value, () => b.value], ([na, nb]) => { /* ... */ }); // ✅
  watch(() => [a.value, b.value], ([na, nb]) => { /* ... */ });       // ❌
  ```

- Options : `immediate: true` exécute le callback une première fois immédiatement ; `deep: true` observe les changements internes d'un objet ou d'un tableau.
