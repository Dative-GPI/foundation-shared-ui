import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteDashboardOrganisation from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteDashboardOrganisation.vue";

const meta: Meta<typeof FSAutocompleteDashboardOrganisation> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteDashboardOrganisation',
  component: FSAutocompleteDashboardOrganisation,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteDashboardOrganisation),
    ...addComponentEmits(FSAutocompleteDashboardOrganisation),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteDashboardOrganisation },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteDashboardOrganisation
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
