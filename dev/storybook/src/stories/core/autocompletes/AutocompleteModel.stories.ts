import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteModel from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue";

const meta: Meta<typeof FSAutocompleteModel> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteModel',
  component: FSAutocompleteModel,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteModel),
    ...addComponentEmits(FSAutocompleteModel),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteModel },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteModel
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
