import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteGroup from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue";

const meta: Meta<typeof FSAutocompleteGroup> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteGroup',
  component: FSAutocompleteGroup,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteGroup),
    ...addComponentEmits(FSAutocompleteGroup),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteGroup },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteGroup
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
