import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteOrganisationType from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue";

const meta: Meta<typeof FSAutocompleteOrganisationType> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteOrganisationType',
  component: FSAutocompleteOrganisationType,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteOrganisationType),
    ...addComponentEmits(FSAutocompleteOrganisationType),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteOrganisationType },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteOrganisationType
      v-model="args.modelValue"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: []
  },
};
