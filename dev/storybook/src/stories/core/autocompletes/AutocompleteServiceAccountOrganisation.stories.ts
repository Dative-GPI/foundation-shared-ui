import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteServiceAccountOrganisation from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountOrganisation.vue";

const meta: Meta<typeof FSAutocompleteServiceAccountOrganisation> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteServiceAccountOrganisation',
  component: FSAutocompleteServiceAccountOrganisation,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteServiceAccountOrganisation),
    ...addComponentEmits(FSAutocompleteServiceAccountOrganisation),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteServiceAccountOrganisation },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteServiceAccountOrganisation
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
