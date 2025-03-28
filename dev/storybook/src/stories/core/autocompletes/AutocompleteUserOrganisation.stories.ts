import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteUserOrganisation from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue";

const meta: Meta<typeof FSAutocompleteUserOrganisation> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteUserOrganisation',
  component: FSAutocompleteUserOrganisation,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteUserOrganisation),
    ...addComponentEmits(FSAutocompleteUserOrganisation),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteUserOrganisation },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteUserOrganisation
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
