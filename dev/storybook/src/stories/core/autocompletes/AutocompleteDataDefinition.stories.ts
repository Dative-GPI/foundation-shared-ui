import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteDataDefinition from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue";

const meta: Meta<typeof FSAutocompleteDataDefinition> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteDataDefinition',
  component: FSAutocompleteDataDefinition,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteDataDefinition),
    ...addComponentEmits(FSAutocompleteDataDefinition),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteDataDefinition },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteDataDefinition
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
