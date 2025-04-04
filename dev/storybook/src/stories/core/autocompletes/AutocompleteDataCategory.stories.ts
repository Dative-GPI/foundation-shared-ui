import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteDataCategory from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue";

const meta: Meta<typeof FSAutocompleteDataCategory> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteDataCategory',
  component: FSAutocompleteDataCategory,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteDataCategory),
    ...addComponentEmits(FSAutocompleteDataCategory),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteDataCategory },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteDataCategory
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
