import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { RoleType } from '@dative-gpi/foundation-shared-domain/enums';

import { VAutocomplete } from 'vuetify/components';
import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSAutocompleteRole from "@dative-gpi/foundation-core-components/components/autocompletes/FSAutocompleteRole.vue";

const meta: Meta<typeof FSAutocompleteRole> = {
  title: 'Foundation/Core/Autocompletes/AutocompleteRole',
  component: FSAutocompleteRole,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField, VAutocomplete], FSAutocompleteRole),
    ...addComponentEmits(FSAutocompleteRole),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSAutocompleteRole },
    setup() {
      return { args };
    },
    template: `
    <FSAutocompleteRole
      v-model="args.modelValue"
      v-model:type="args.type"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: [],
    type: RoleType.None
  },
};
