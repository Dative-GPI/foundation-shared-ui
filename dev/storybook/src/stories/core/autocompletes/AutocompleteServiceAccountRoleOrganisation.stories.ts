import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteServiceAccountRoleOrganisation from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue";

const meta: Meta<typeof FSAutocompleteServiceAccountRoleOrganisation> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation',
  component: FSAutocompleteServiceAccountRoleOrganisation,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteServiceAccountRoleOrganisation),
    ...addComponentEmits(FSAutocompleteServiceAccountRoleOrganisation),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteServiceAccountRoleOrganisation },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteServiceAccountRoleOrganisation
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
