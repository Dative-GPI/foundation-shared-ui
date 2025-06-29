import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteGrouping from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteGrouping.vue";

const meta: Meta<typeof FSAutocompleteGrouping> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteGrouping',
  component: FSAutocompleteGrouping,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteGrouping),
    ...addComponentEmits(FSAutocompleteGrouping),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteGrouping },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteGrouping
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
