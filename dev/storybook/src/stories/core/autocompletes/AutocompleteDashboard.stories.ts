import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { DashboardType } from '@dative-gpi/foundation-shared-domain/enums';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteDashboard from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue";

const meta: Meta<typeof FSAutocompleteDashboard> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteDashboard',
  component: FSAutocompleteDashboard,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteDashboard),
    ...addComponentEmits(FSAutocompleteDashboard),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteDashboard },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteDashboard
      v-model="args.modelValue"
      v-model:type="args.type"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: [],
    type: DashboardType.None,
  },
};
