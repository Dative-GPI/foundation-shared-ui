# Storybook — règles d'écriture des stories

Règles validées pour les fichiers `*.stories.ts` de `dev/storybook/src/stories/`.

## Structure d'un fichier de story

1. Importer :
   - le composant documenté ;
   - ses sous-composants (voir règle « Sous-composants » ci-dessous) ;
   - les helpers `addComponentEmits` et `addSubcomponentsArgTypes` depuis `@/utils/properties`.
2. Déclarer la `meta` :

   ```ts
   import type { Meta, StoryObj } from '@storybook/vue3';
   import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

   import FSMyComponent from '@dative-gpi/foundation-shared-components/components/FSMyComponent.vue';
   import FSSubComponent from '@dative-gpi/foundation-shared-components/components/FSSubComponent.vue';

   const meta: Meta<typeof FSMyComponent> = {
     title: 'Dossier/NomDuComposant',
     component: FSMyComponent,
     tags: ['autodocs'],
     argTypes: {
       ...addSubcomponentsArgTypes([FSSubComponent], FSMyComponent),
       ...addComponentEmits(FSMyComponent),
     },
   };
   export default meta;
   type Story = StoryObj<typeof meta>;
   ```

3. Écrire une story par défaut (ex. `Default`) :

   ```ts
   export const Default: Story = {
     render: (args) => ({
       components: { FSMyComponent },
       setup() {
         return { args };
       },
       template: `
         <FSMyComponent
           v-model="args.modelValue"
           v-bind="args"
         />
       `,
     }),
     args: {
       modelValue: null,
     },
   };
   ```

## Règles

- **Sous-composants** : passer à `addSubcomponentsArgTypes` tous les composants vers lesquels le composant documenté bind ses propriétés, c'est-à-dire ceux qui reçoivent ses attributs (`v-bind="$attrs"` explicite ou héritage implicite sur l'élément racine), en descendant la chaîne jusqu'aux composants Vuetify (`VDialog`, `VAutocomplete`…).
- **Emits** : toujours ajouter `addComponentEmits(Composant)` pour que les emits apparaissent dans l'onglet *Actions*.
- **v-model** : mettre en `v-model` toutes les props qui ont un emit `update:<prop>` sur le composant (si la prop existe) : `v-model="args.modelValue"`, `v-model:type="args.type"`, etc.
- **v-bind** : ne pas spécifier les autres props dans le template, laisser `v-bind="args"` les gérer. Les valeurs par défaut se mettent dans `args`.
- **Nommage** : les stories (exports) sont nommées de manière intelligible en PascalCase (`Default`, `WithValidation`, `FullScreen`…).
- **argTypes** : pour personnaliser un contrôle, suivre https://storybook.js.org/docs/api/arg-types#manually-specifying-argtypes

## Fonctionnement des helpers (`src/utils/properties.ts`)

- `addSubcomponentsArgTypes(subcomponents, component)` : ajoute les props des sous-composants dans la catégorie *Subcomponents Props*. Une prop déjà déclarée sur `component` n'est pas ajoutée. Si plusieurs sous-composants déclarent la même prop, c'est le **premier de la liste** qui l'emporte : lister les sous-composants du plus proche au plus lointain.
- `addComponentEmits(component)` : crée un argType `on<Emit>` (action) pour chaque entrée de `component.emits`. Seuls les emits déclarés par le composant lui-même sont pris en compte.
