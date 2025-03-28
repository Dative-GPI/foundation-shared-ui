import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteLocation from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue";

const meta: Meta<typeof FSAutocompleteLocation> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteLocation',
  component: FSAutocompleteLocation,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteLocation),
    ...addComponentEmits(FSAutocompleteLocation),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteLocation },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteLocation
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
