# Analyse PR #623 "Update/fs card"

## 📋 Informations générales
- **Nombre de commits** : 27
- **Fichiers modifiés** : 35
- **Additions** : +936 lignes
- **Suppressions** : -1111 lignes
- **État** : Ouverte
- **Date de création** : 20 juin 2025

---

## 1. 🚨 BREAKING CHANGES POTENTIELS

### 1.1 Composant FSClickable **DÉPRÉCIÉ** ❌
**Impact** : **ÉLEVÉ** - Breaking change majeur

**Ce qui a changé** :
- `FSClickable` est maintenant un wrapper vide qui redirige vers `FSCard`
- Ajout d'un message de dépréciation en console au montage du composant
- Suppression de toute la logique interne (326 lignes → 61 lignes)
- Suppression du fichier CSS associé `fs_clickable.scss`

**Impact potentiel** :
- ❌ **Breaking change** : Tous les composants utilisant `FSClickable` doivent migrer vers `FSCard`
- ⚙️ **Changement fonctionnel** : Les props spécifiques à `FSClickable` ne sont plus supportées
- 🎨 **Changement visuel** : Le comportement visuel est maintenant géré par `FSCard`

**Props supprimées/modifiées** :
- `height`, `width`, `padding`, `class` : Maintenant gérées par `FSCard`
- `to`, `href` : Maintenant gérées par `FSRouterLink` via `FSCard`
- `type` : Supprimée en tant que prop directe
- `border`, `borderRadius`, `borderStyle` : Supprimées
- `load`, `disabled` : Supprimées

**Composants impactés** :
- `FSBaseDataCategoriesList.vue` : `FSClickable` → `FSCard`
- `FSBaseDataDefinitionsList.vue` : `FSClickable` → `FSCard`
- `FSEditImageUI.vue` : `FSClickable` → `FSCardPlaceholder`
- `FSImageCard.vue` : `FSClickable` → `FSCard`
- `FSOptionItem.vue` : `FSClickable` → `FSCard`
- `FSOptionsMenu.vue` : `FSClickable` → `FSCard`
- `FSPlayButtons.vue` : `FSClickable` → `FSCard` (3 occurrences)
- `FSAgendaHorizontalEvent.vue` : `FSClickable` → `FSCard`
- `FSAgendaVerticalEvent.vue` : `FSClickable` → `FSCard`
- `FSStatusRichCard.vue` : Logique conditionnelle supprimée
- Calendar.stories.ts : `FSClickable` → `FSCard`
- Button.stories.ts : `FSClickable` → `FSCard`

---

### 1.2 Composant FSCard - Modifications majeures ❌
**Impact** : **ÉLEVÉ** - Breaking change

**Ce qui a changé** :
- Architecture complètement refactorisée (100 → 187 lignes)
- Utilise maintenant `FSRouterLink` comme wrapper
- Nouveau système de gestion de l'état clickable (hover/active)
- Suppression des slots `header`, `body`, `footer` par défaut
- Nouveau slot `default` avec passage de `contentVariant`

**Props ajoutées** :
- `class` : Nouvelle prop pour passer des classes CSS
- `to` : Navigation router (RouteLocation)
- `href` : Lien externe (string)
- `onClick` : Fonction de callback
- `clickable` : Boolean pour forcer l'état clickable (null par défaut)
- `type` : Type de bouton ("button" | "submit" | "reset")
- `load` : État de chargement avec spinner
- `disabled` : État désactivé

**Props supprimées** :
- `gap` : N'est plus supportée (ancienne valeur par défaut : "8px")

**Props modifiées** :
- `variant` : Type changé de string littéral vers `CardVariant` (enum)
  - Nouvelles valeurs possibles : `CardVariants.Background`, `CardVariants.Standard`, `CardVariants.Full`, `CardVariants.Gradient`
  - Ancienne valeur par défaut : "background" (string)
  - Nouvelle valeur par défaut : `CardVariants.Background` (enum)

**Comportement clickable** :
- Avant : Nécessitait `FSClickable` pour être clickable
- Après : Détection automatique basée sur `clickable`, `to`, `href`, ou `onClick`
- Nouveau système de variants de contenu : `contentVariant` passé aux slots

**Impact sur les slots** :
- ❌ Slots `header`, `body`, `footer` : Supprimés de la structure par défaut
- ✅ Slot `default` : Maintenant avec binding `contentVariant`
- ✅ Slot `top-right` : Conservé, mais caché si `load` est true

---

### 1.3 Composant FSChip - Refactorisation complète ❌
**Impact** : **MOYEN à ÉLEVÉ** - Breaking change

**Ce qui a changé** :
- Maintenant basé sur `FSCard` au lieu d'une structure personnalisée
- Suppression de toute la logique de styling interne (127 → 27 lignes)
- Suppression des styles CSS personnalisés `fs_chip.scss` (29 lignes supprimées)

**Props supprimées** :
- `width` : N'est plus supportée (ancienne valeur par défaut : "hug")
- `clickable` : N'est plus supportée (ancienne valeur par défaut : false)
- `to` : N'est plus supportée directement (géré via `FSCard`)

**Props modifiées** :
- `variant` : Type changé de `"standard" | "full" | "borderless"` vers `CardVariant`
  - `"borderless"` n'existe plus, remplacé par `CardVariants.Background`
  - Nouvelle valeur par défaut : `CardVariants.Full`
- `align` : Type étendu de 2 à 9 options d'alignement

**Changements de slots** :
- Binding changé : `{ color, colors }` → `{ color, contentVariant }`
- Nouveau variant de contenu automatique basé sur l'état de `FSCard`

**Migration nécessaire** :
- Remplacer `variant="borderless"` par `variant="background"` ou `CardVariants.Background`
- Gérer la largeur via `width` prop de `FSCard` parent ou CSS
- Utiliser les props de `FSCard` pour le comportement clickable

---

### 1.4 Composant FSButton - Modifications significatives ❌
**Impact** : **MOYEN** - Changements comportementaux

**Ce qui a changé** :
- Variante "icon" : Structure complètement refactorisée
  - Avant : `FSRow` avec logique conditionnelle complexe
  - Après : `FSRouterLink` wrappant un `FSRow`
- Utilise `FSCard` au lieu de `FSClickable` pour les variantes non-icon
- Nouveau système de couleurs pour les icônes : `iconVariantColor`

**Comportement modifié** :
- Variante icon :
  - Suppression du style dynamique via CSS variables (`--fs-button-color`, `--fs-button-hover-color`)
  - Nouvelle logique de couleur : utilise `filter: brightness(0.8)` au hover
  - Couleur déterminée par `iconVariantColor` computed property
  - Plus de wrapping `<a>` ou `<router-link>` interne, géré par `FSRouterLink`

**Changements visuels** :
- 🎨 Hover sur icon : `color change` → `brightness filter`
- 🎨 Disabled state : couleur Light au lieu de styles variables
- 🎨 Spinner de chargement : couleur calculée différemment

**Props comportement** :
- `FSSpan` remplacé par `FSText` pour le label dans variante icon
- Nouveau wrapping via `FSRouterLink` qui gère `to`, `href`, et `onClick`

---

### 1.5 Composant FSRouterLink - Nouvelle implémentation ❌
**Impact** : **MOYEN à ÉLEVÉ** - Breaking change possible

**Ce qui a changé** :
- Architecture complètement refactorisée (14 → 98 lignes)
- Nouveau système de wrapper dynamique via `component :is`
- Props étendues pour gérer différents cas d'usage

**Nouvelles props** :
- `href` : String pour les liens externes
- `passive` : Boolean pour désactiver le routage (valeur par défaut : auto-détecté)
- `type` : Type de bouton si wrapper est un button
- `defaultWrapper` : Wrapper par défaut ("button")
- `passiveWrapper` : Wrapper si passif ("div")

**Props modifiées** :
- `to` : N'est plus `required`, default `null`

**Nouveau comportement** :
- Détection automatique du wrapper à utiliser (RouterLink, a, button, div)
- Gestion intelligente des props selon le type de wrapper
- Events `@click` et `@auxclick` gérés uniformément

**Impact** :
- ❌ **Breaking** : Components qui extends ou wrapper FSRouterLink
- ⚙️ **Fonctionnel** : Nouveau comportement de routage avec auxclick
- 🎨 **Visuel** : Différent wrapper HTML selon contexte

---

### 1.6 Composant FSDialogContent - Structure modifiée ⚙️
**Impact** : **MOYEN** - Changement de structure

**Ce qui a changé** :
- Slots `header`, `body`, `footer` : Déplacés de `FSCard` vers `FSCol` direct
- Nouveau slot `header` avec bindings `{ title, subtitle }`
- Structure HTML modifiée

**Impact** :
- ⚙️ **Changement fonctionnel** : Override des slots fonctionne différemment
- 🎨 **Changement visuel potentiel** : Hiérarchie DOM modifiée

---

### 1.7 Composant FSCardPlaceholder - API simplifiée ⚙️
**Impact** : **FAIBLE à MOYEN**

**Ce qui a changé** :
- Suppression de la logique conditionnelle `FSClickable vs FSCard`
- Utilise uniquement `FSCard` avec `variant="standard"` et `color="light"`
- Nouveau slot `default` wrappant l'ancien contenu

**Props comportement** :
- Plus de détection automatique de `onClick` pour choisir le composant
- Comportement clickable géré par `FSCard` directement

---

### 1.8 Composant FSChipGroup ⚙️
**Impact** : **FAIBLE**

**Ce qui a changé** :
- Prop `chipVariant` : Type changé vers `CardVariant`
- Valeur par défaut : `"full"` → `CardVariants.Full`
- Import ajouté : `CardVariants`

---

### 1.9 Composant FSFilterButton ⚙️
**Impact** : **FAIBLE**

**Ce qui a changé** :
- Logique `getVariant()` : Retourne `CardVariant` au lieu de string literals
- Valeurs retournées : `"borderless"` → `CardVariants.Background`
- Nouveaux props ajoutés aux FSChip : `align="center-left"`, `border={false}`

---

### 1.10 Composant FSHeaderButton ⚙️
**Impact** : **FAIBLE**

**Ce qui a changé** :
- FSChip : `variant="borderless"` → `variant="background"`
- Ajout de `:border="false"` sur tous les FSChip

---

### 1.11 Composant FSTile - Simplification de la logique ⚙️
**Impact** : **MOYEN** - Changement de comportement

**Ce qui a changé** :
- Suppression des multiples branches conditionnelles
- Logique unifiée dans `selectionState` computed property
- Suppression de l'utilisation de `FSClickable`
- Nouveau système de listeners dynamiques

**Comportement modifié** :
- Single select : Listeners ajoutés dynamiquement au lieu de composant séparé
- Checkbox : Affichage conditionnel basé sur `showCheckbox`
- Style : Variant et color calculés dans `selectionState`

---

## 2. 🎨 DIFFÉRENCES D'AFFICHAGE / UI

### 2.1 FSCard - Nouvelles classes CSS et comportements visuels 🎨
**Impact visuel** : **ÉLEVÉ**

**Nouvelles classes CSS** :
- `.fs-card-wrapper` : Nouveau wrapper pour dimensions et positionnement
- `.fs-card-clickable` : Styles de cursor et hover
- `.fs-card-disabled` : État désactivé
- `.fs-card-load` : État de chargement avec opacité
- `.fs-card-load__spinner` : Spinner centré absolu

**Changements de styles** :
- **Height/Width** : Maintenant `100%` sur `.fs-card`, dimensions sur `.fs-card-wrapper`
- **Transition** : Nouvelle transition globale `all 0.28s cubic-bezier(0.4, 0, 0.2, 1)`
- **Hover clickable** : Nouvelles variables CSS
  - `--fs-card-hover-background-color`
  - `--fs-card-hover-border-color`  
  - `--fs-card-hover-color`
- **Active clickable** : Nouvelles variables CSS (similaires avec `-active-`)
- **État disabled** : Couleur light.light, border light.dark
- **Cursor** : Automatique sur clickable, default sur disabled
- **Load state** : Opacity 0 sur tous les enfants sauf spinner

**Comportement variant "standard"** :
- Avant : Couleur fixe `colors.light` / `colors.lightContrast`
- Après : Logique conditionnelle pour `Light`/`Dark` colors
  - Si clickable + (Light ou Dark) : `backgrounds.base` avec border `lights.dark`
  - Sinon : `colors.light` avec border calculé

**Comportement variant "background"** :
- Nouveau hover : fond `colors.base`, border `colors.baseContrast`, color `colors.baseContrast`

**Comportement variant "full"** :
- Hover identique au fond de base (pas de changement visuel marqué au hover)

---

### 2.2 FSButton - Icon variant styling 🎨
**Impact visuel** : **MOYEN**

**Changements** :
- **Hover effect** : 
  - Avant : Changement de couleur via CSS variable `--fs-button-hover-color`
  - Après : `filter: brightness(0.8)` pour assombrir
- **Color management** :
  - ColorEnum.Dark → coloré par iconVariantColor (ColorEnum.Dark)
  - ColorEnum.Light → coloré par iconVariantColor (ColorEnum.Dark)
  - Autres couleurs → coloré par la couleur spécifiée
- **Text-decoration** : Ajout de `text-decoration: none`

**Résultat visuel** :
- Effet hover légèrement différent (brightness vs color-shift)
- Comportement plus uniforme sur toutes les couleurs

---

### 2.3 FSChip - Styling complètement délégué à FSCard 🎨
**Impact visuel** : **MOYEN à ÉLEVÉ**

**Changements** :
- Suppression de tous les styles CSS personnalisés
- Border-radius : Maintenant fixé à `50` (pixels)
- Padding : Maintenant fixé à `"2px 20px"`
- Hover/active : Géré par les styles de FSCard

**Différences potentielles** :
- Variante "borderless" n'existe plus → Migration vers "background"
- Styles hover/active : Suivent maintenant la logique de FSCard
- Hauteur : Calculée par FSCard, non plus par `--fs-chip-height`
- Largeur : Non contrôlable via prop, dépend de FSCard parent

---

### 2.4 FSClickable - Suppression complète des styles 🎨
**Impact visuel** : **VARIABLE** (dépend du remplacement)

**Styles supprimés** :
- Tout le fichier `fs_clickable.scss` (69 lignes)
- Variables CSS : `--fs-clickable-*` (15 variables)
- Classes : `.fs-clickable`, `.fs-clickable-disabled`, `.fs-clickable-load`

**Conséquence** :
- Les composants utilisant FSClickable doivent adopter le style de FSCard
- Possible différence visuelle si les styles de FSCard ne sont pas identiques

---

### 2.5 Storybook - Nouvelles stories et exemples 🎨
**Impact** : **Présentation et documentation**

**Card.stories.ts** :
- Suppression de l'exemple avec VDivider et FSButton
- Nouvelles stories :
  - `Default` : Exemple basique
  - `Variants` : Démonstration des 4 variants (background, standard, full, gradient)
  - `Clickables` : Démonstration href, router link, click event, submit type
- Démonstration du slot `contentVariant`

**Chip.stories.ts** :
- Ajout d'une section "Variants" montrant tous les variants disponibles
- Démonstration du `contentVariant` slot
- Ajout de `border={false}` dans les exemples
- Changement `width="fill"` → `width="100%"`

**Button.stories.ts** :
- Nouvelle story `Default`
- `ContentVariant` story : FSClickable → FSCard
- Changement de couleur dans l'exemple : `color="error"` → `color="warning"`

**Calendar.stories.ts** :
- FSClickable → FSCard
- Props explicites : `variant="full"` ou `variant="standard"`, `color="error"` ou `color="light"`

---

### 2.6 FSDialogContent - Structure visuelle modifiée 🎨
**Impact visuel** : **FAIBLE** (mais structurel)

**Changements** :
- Header/body/footer : Maintenant dans FSCol au lieu de slots FSCard
- Possible impact sur spacing/layout selon les styles appliqués

---

### 2.7 FSBaseDataCategoriesList & FSBaseDataDefinitionsList 🎨
**Impact visuel** : **MOYEN**

**Changements** :
- Variant : Logique conditionnelle `CardVariants.Standard` vs `CardVariants.Background`
- Couleur : Fixée à `ColorEnum.Primary` au lieu de logique conditionnelle complète
- contentVariant : Passé aux FSIcon pour adaptation visuelle dynamique

**Avant** :
- Selected : `color="primary"`
- Non-selected : `color="dark"` ou `color="light"`

**Après** :
- Toujours `color="primary"` avec variant qui change
- Icons utilisent `contentVariant` pour s'adapter

---

### 2.8 FSStatusRichCard 🎨
**Impact visuel** : **FAIBLE**

**Changements** :
- Suppression de la logique conditionnelle `FSClickable vs FSCard`
- Toujours FSCard maintenant, clickable géré automatiquement

---

## 3. ⚙️ DIFFÉRENCES FONCTIONNELLES VISIBLES UTILISATEUR

### 3.1 FSCard - Nouveau comportement clickable ⚙️
**Impact fonctionnel** : **ÉLEVÉ**

**Détection automatique** :
- `actualClickable` computed : Détecte si `clickable=true`, `to`, `href`, ou `onClick`
- Si `disabled=true` ou `clickable=false` : Forcé en non-clickable

**États interactifs** :
- `hover` : État local réactif (ref)
- `active` : État local réactif (ref)
- `contentVariant` : Calculé basé sur hover/active
  - Active : `"darkContrast"`
  - Hover : `"baseContrast"`
  - Standard : `"lightContrast"`
  - Background : `"base"`
  - Full : `"baseContrast"`

**Event handling** :
- onClick : Ne fire que si clickable, non disabled, non load, non href/to
- Listeners dynamiques : `mouseover`, `mouseleave`, `mousedown`, `mouseup`, `click`

**Type attribute** :
- `actualWrapperType` : "button" par défaut, ou valeur de `type` prop
- Permet submit/reset dans les forms

---

### 3.2 FSButton - Gestion des events modifiée ⚙️
**Impact fonctionnel** : **MOYEN**

**Variante icon** :
- Avant : Logique complexe avec `<a>`, `<FSRouterLink>`, ou rendu direct
- Après : `FSRouterLink` wrapping toujours, gestion unifiée
- onClick : `@click.stop` sur FSRouterLink au lieu de logique conditionnelle

**Variantes standard/full** :
- Utilise FSCard avec `clickable={true}`
- Load et disabled gérés par FSCard
- onClick : `@click.stop` passé à FSCard

---

### 3.3 FSChip - Clickable behavior via FSCard ⚙️
**Impact fonctionnel** : **MOYEN à ÉLEVÉ**

**Changements** :
- Prop `clickable` supprimée : Géré automatiquement par FSCard
- Prop `to` supprimée : Passée via `v-bind="$attrs"` à FSCard
- Event `@click` : Émis directement, géré par FSCard

**Résultat** :
- Comportement clickable automatique si event listener ou navigation props
- Plus besoin de spécifier `clickable={true}` explicitement

---

### 3.4 FSRouterLink - Routing behavior étendu ⚙️
**Impact fonctionnel** : **MOYEN**

**Nouveaux comportements** :
- `passive` mode : Rend un div sans interaction
- Auto-detection passive : Si pas de to/href/onClick
- Type button : Supporte submit/reset pour forms
- External links : Rendu via `<a href>`

**Event management** :
- onClick et onAuxClick : Appellent `handleRoutingEvent` seulement si `to` présent
- Permet middle-click pour ouvrir dans nouvel onglet

---

### 3.5 FSTile - Selection behavior simplifié ⚙️
**Impact fonctionnel** : **MOYEN**

**Changements** :
- Single select : Listeners dynamiques au lieu de composant wrapper séparé
- Checkbox visibility : Computed property `showCheckbox`
- Pas de checkbox si single select

**Résultat** :
- Comportement plus cohérent
- Moins de branches conditionnelles
- Single select fonctionne uniquement sans href/to

---

### 3.6 FSCardPlaceholder - Click handling simplifié ⚙️
**Impact fonctionnel** : **FAIBLE**

**Changements** :
- Plus de logique conditionnelle pour choisir le composant
- Click géré par FSCard via détection automatique

---

### 3.7 FSDialogContent - Slots flexibility accrue ⚙️
**Impact fonctionnel** : **MOYEN**

**Changements** :
- Nouveaux bindings sur slot header : `{ title, subtitle }`
- Slots body et footer : Utilisables directement
- Override header plus flexible

---

### 3.8 FSBaseDataCategoriesList & FSBaseDataDefinitionsList ⚙️
**Impact fonctionnel** : **FAIBLE**

**Changements** :
- contentVariant : Passé aux icons pour adaptation dynamique
- Click behavior : Géré par FSCard au lieu de FSClickable

---

### 3.9 FSOptionsMenu ⚙️
**Impact fonctionnel** : **FAIBLE**

**Changements** :
- FSCard au lieu de FSClickable pour les items
- Color explicite : `ColorEnum.Light`
- Border false

---

## 4. 🔄 EFFETS DE BORD POSSIBLES

### 4.1 Composants réutilisant FSCard ⚠️
**Impact** : **ÉLEVÉ**

**Composants potentiellement impactés** :
- Tous les composants qui wrap ou étendent FSCard
- Composants qui dépendent de la structure slots (header/body/footer)
- Composants qui utilisent `gap` prop (supprimée)

**Exemples identifiés dans la PR** :
- FSDialogContent : Adapté dans cette PR
- FSCardPlaceholder : Adapté dans cette PR
- FSButton : Adapté dans cette PR (utilise FSCard maintenant)
- FSChip : Adapté dans cette PR (basé sur FSCard)

**Composants potentiellement impactés NON dans la PR** :
- Tout composant custom utilisant FSCard avec les anciens slots
- Tests unitaires vérifiant la structure DOM
- Snapshots tests

---

### 4.2 Composants réutilisant FSClickable (DÉPRÉCIÉ) ⚠️
**Impact** : **ÉLEVÉ**

**Migration obligatoire pour** :
- Tous les composants utilisant FSClickable
- Custom components dans les apps consommatrices
- Tests utilisant FSClickable

**Checklist de migration** :
1. Remplacer `<FSClickable>` par `<FSCard :clickable="true">`
2. Ajouter `variant="standard"` pour le comportement standard
3. Ajouter `color="light"` pour la couleur standard
4. Vérifier les props spécifiques (height, width, padding, etc.)
5. Adapter les tests

---

### 4.3 Styles CSS dépendant de classes supprimées ⚠️
**Impact** : **MOYEN**

**Classes supprimées** :
- `.fs-clickable` et ses variations
- `.fs-chip-clickable` et ses styles
- Toutes les variables CSS `--fs-clickable-*`
- Toutes les variables CSS `--fs-chip-*` (styles uniquement)

**Impact potentiel** :
- CSS custom ciblant ces classes : Ne fonctionnera plus
- Tests E2E/intégration basés sur ces classes : Échoueront
- Sélecteurs CSS imbriqués : À vérifier

---

### 4.4 Types TypeScript et imports ⚠️
**Impact** : **MOYEN**

**Nouveaux types/exports** :
- `CardVariant` : Type union
- `CardVariants` : Enum
- `ColorBaseVariations` : Utilisé dans contentVariant

**Imports requis** :
- Composants utilisant variants doivent importer `CardVariants`
- Components utilisant le slot contentVariant doivent typer correctement

**Exemple** :
```typescript
import { CardVariants, type CardVariant } from '@dative-gpi/foundation-shared-components/models';
```

---

### 4.5 Comportement dans les formulaires ⚠️
**Impact** : **FAIBLE à MOYEN**

**Changements** :
- FSCard supporte maintenant `type="submit"` et `type="reset"`
- Wrapper est un `<button>` par défaut si clickable
- Impact sur les formulaires utilisant FSCard ou FSButton

**Cas limite** :
- FSCard clickable dans un form : Pourrait soumettre le form au click (type="button" par défaut maintenant)
- FSButton dans un form : Comportement potentiellement différent

---

### 4.6 Accessibilité et sémantique HTML ⚠️
**Impact** : **MOYEN**

**Changements sémantiques** :
- FSCard clickable : Maintenant `<button>` au lieu de `<div>` ou autre wrapper
- FSRouterLink : Peut rendre `<button>`, `<a>`, `<div>`, ou `<router-link>`
- Impact sur les screen readers et navigation clavier

**Améliorations** :
- ✅ Meilleure sémantique HTML avec `<button>` pour actions
- ✅ Support natif des types submit/reset
- ✅ Meilleure accessibilité clavier

**Risques** :
- ⚠️ Changement de comportement pour les screen readers
- ⚠️ Tests d'accessibilité à revalider

---

### 4.7 Performance et réactivité ⚠️
**Impact** : **FAIBLE**

**Changements** :
- Nouveaux refs réactifs `hover` et `active` dans FSCard
- Computed properties supplémentaires
- Event listeners dynamiques

**Impact** :
- Overhead réactif négligeable
- Pas d'impact performance significatif attendu

---

### 4.8 Tests unitaires et d'intégration ⚠️
**Impact** : **ÉLEVÉ**

**Tests à mettre à jour** :
- Tests vérifiant la présence de FSClickable
- Tests vérifiant les classes CSS `.fs-clickable` ou `.fs-chip-clickable`
- Snapshots incluant FSClickable
- Tests vérifiant la structure des slots de FSCard
- Tests vérifiant les props spécifiques à FSClickable

**Exemples de tests impactés** :
```typescript
// Avant
expect(wrapper.find('.fs-clickable').exists()).toBe(true);

// Après
expect(wrapper.find('.fs-card-clickable').exists()).toBe(true);
```

---

### 4.9 Documentation et examples ⚠️
**Impact** : **MOYEN**

**À mettre à jour** :
- Documentation de FSClickable : Marquer comme déprécié
- Guide de migration FSClickable → FSCard
- Examples dans le README
- Storybook stories (fait dans cette PR)
- JSDoc comments

---

### 4.10 Consommateurs de la librairie ⚠️
**Impact** : **ÉLEVÉ**

**Impact sur les apps consommatrices** :
- **Breaking change** : Migration obligatoire de FSClickable
- Possible impact visuel si styles custom
- Tests à adapter
- Migration vers CardVariants enum recommandée

**Plan de migration recommandé** :
1. Mettre à jour la version de foundation-shared-components
2. Suivre les warnings de console pour FSClickable
3. Remplacer tous les FSClickable par FSCard
4. Adapter les tests
5. Vérifier visuellement les composants impactés
6. Mettre à jour les imports pour utiliser CardVariants

---

## 5. 📊 RÉCAPITULATIF PAR NIVEAU DE RISQUE

### 🔴 RISQUE ÉLEVÉ
1. **FSClickable déprécié** - Migration obligatoire pour tous les usages
2. **FSCard refactorisé** - Breaking changes sur props et slots
3. **FSChip refactorisé** - Props supprimées, comportement modifié
4. **Tests impactés** - Mise à jour nécessaire pour tous les tests

### 🟡 RISQUE MOYEN
1. **FSButton modifié** - Variante icon avec nouveau comportement hover
2. **FSRouterLink refactorisé** - Nouveau système de wrapper
3. **Styles CSS supprimés** - Impact sur styles custom
4. **FSDialogContent structure** - Slots déplacés
5. **Types TypeScript** - Nouveaux imports requis

### 🟢 RISQUE FAIBLE
1. **FSCardPlaceholder simplifié** - Comportement similar
2. **FSChipGroup adapté** - Changement mineur de type
3. **FSFilterButton** - Migration interne, pas d'impact API
4. **FSHeaderButton** - Migration interne, pas d'impact API
5. **FSTile** - Simplification interne, comportement préservé

---

## 6. 📋 CHECKLIST DE MIGRATION

### Pour les développeurs
- [ ] Identifier tous les usages de FSClickable dans le code
- [ ] Remplacer FSClickable par FSCard avec les props appropriées
- [ ] Mettre à jour les imports pour inclure CardVariants
- [ ] Remplacer les string literals par les enum CardVariants
- [ ] Adapter les tests unitaires et d'intégration
- [ ] Mettre à jour les snapshots
- [ ] Vérifier les styles CSS custom impactés
- [ ] Tester visuellement tous les composants modifiés
- [ ] Vérifier l'accessibilité des composants clickables
- [ ] Mettre à jour la documentation

### Pour les testeurs
- [ ] Tests de régression visuels sur tous les composants utilisant FSCard
- [ ] Tests de régression fonctionnels sur les composants clickables
- [ ] Tests d'accessibilité (clavier, screen readers)
- [ ] Tests sur différents navigateurs
- [ ] Tests de performance (si applicable)
- [ ] Validation des formulaires avec FSCard/FSButton

---

## 7. 🎯 CONCLUSION

Cette PR représente une **refonte majeure** de l'architecture des composants clickables de la librairie. Les changements principaux sont :

### ✅ Améliorations
- ✅ Architecture plus cohérente avec FSCard comme composant central
- ✅ Meilleure accessibilité avec sémantique HTML appropriée
- ✅ Code plus maintenable avec moins de duplication
- ✅ Système de variants de contenu plus flexible
- ✅ Gestion automatique du comportement clickable

### ❌ Breaking Changes
- ❌ FSClickable déprécié - Migration obligatoire
- ❌ FSCard API modifiée - Props et slots changés
- ❌ FSChip refactorisé - Props supprimées
- ❌ Tests et styles CSS impactés

### 📊 Statistiques
- **Breaking changes** : 10 majeurs
- **Composants modifiés** : 35 fichiers
- **Composants impactés indirectement** : Tous ceux utilisant FSClickable, FSCard, ou FSChip
- **Effort de migration estimé** : Moyen à Élevé (selon la taille du codebase)

### 🚀 Recommandations
1. **Planifier une migration progressive** avec période de transition
2. **Communiquer largement** sur le changement breaking
3. **Fournir un guide de migration détaillé**
4. **Maintenir FSClickable en dépréciation** pour une version avant suppression complète
5. **Effectuer des tests exhaustifs** avant le déploiement en production
