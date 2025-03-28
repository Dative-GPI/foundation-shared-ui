import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteManufacturer from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue";

const meta: Meta<typeof FSAutocompleteManufacturer> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteManufacturer',
  component: FSAutocompleteManufacturer,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteManufacturer),
    ...addComponentEmits(FSAutocompleteManufacturer),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteManufacturer },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteManufacturer
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
