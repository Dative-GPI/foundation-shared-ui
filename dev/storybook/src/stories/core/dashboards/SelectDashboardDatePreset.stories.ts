import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSSelectField from '@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue';
import FSSelectDashboardDatePreset from '@dative-gpi/foundation-core-components/components/dashboards/FSSelectDashboardDatePreset.vue';

const items = [
  { hiddenCode: 'last-day', labelDefault: 'Last day' },
  { hiddenCode: 'last-week', labelDefault: 'Last week' },
  { hiddenCode: 'last-month', labelDefault: 'Last month' },
];

const meta: Meta<typeof FSSelectDashboardDatePreset> = {
  title: 'Core/Components/Dashboards/SelectDashboardDatePreset',
  component: FSSelectDashboardDatePreset,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSelectField], FSSelectDashboardDatePreset),
    ...addComponentEmits(FSSelectDashboardDatePreset),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  render: (args) => ({
    components: { FSSelectDashboardDatePreset },
    setup() {
      return { args };
    },
    template: `
      <FSSelectDashboardDatePreset
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
};

export const Default: Story = {
  ...BaseStory,
  args: {
    label: 'Date preset',
    items,
    modelValue: null,
  },
};

export const Selected: Story = {
  ...BaseStory,
  args: {
    label: 'Date preset',
    items,
    modelValue: 'last-week',
  },
};
