import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSAutocompleteField from '@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue';
import FSSelectDashboardEntityPreset from '@dative-gpi/foundation-core-components/components/fields/FSSelectDashboardEntityPreset.vue';

const items = [
  { hiddenCode: 'devices', labelDefault: 'All devices' },
  { hiddenCode: 'locations', labelDefault: 'All locations' },
  { hiddenCode: 'groups', labelDefault: 'All groups' },
];

const meta: Meta<typeof FSSelectDashboardEntityPreset> = {
  title: 'Core/Components/Fields/SelectDashboardEntityPreset',
  component: FSSelectDashboardEntityPreset,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSAutocompleteField], FSSelectDashboardEntityPreset),
    ...addComponentEmits(FSSelectDashboardEntityPreset),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  render: (args) => ({
    components: { FSSelectDashboardEntityPreset },
    setup() {
      return { args };
    },
    template: `
      <FSSelectDashboardEntityPreset
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
};

export const Default: Story = {
  ...BaseStory,
  args: {
    label: 'Entity preset',
    items,
    modelValue: null,
  },
};

export const Selected: Story = {
  ...BaseStory,
  args: {
    label: 'Entity preset',
    items,
    modelValue: 'locations',
  },
};
