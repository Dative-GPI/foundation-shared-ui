import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { ChartOrigin } from '@dative-gpi/foundation-shared-domain/enums';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteChart from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteChart.vue";

const meta: Meta<typeof FSAutocompleteChart> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteChart',
  component: FSAutocompleteChart,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteChart),
    ...addComponentEmits(FSAutocompleteChart),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteChart },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteChart
      v-model="args.modelValue"
      v-model:type="args.type"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: [],
    type: ChartOrigin.None,
  },
};
