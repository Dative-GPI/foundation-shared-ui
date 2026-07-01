import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSSwitch from '@dative-gpi/foundation-shared-components/components/FSSwitch.vue';
import FSTermField from '@dative-gpi/foundation-shared-components/components/fields/FSTermField.vue';
import FSSelectDashboardDatePreset from '@dative-gpi/foundation-core-components/components/dashboards/FSSelectDashboardDatePreset.vue';
import FSDateSelectPresetConfiguration from '@dative-gpi/foundation-core-components/components/configurations/FSDateSelectPresetConfiguration.vue';

import { settingsMock } from './settings.mock';

const meta: Meta<typeof FSDateSelectPresetConfiguration> = {
  title: 'Core/Components/Configurations/DateSelectPresetConfiguration',
  component: FSDateSelectPresetConfiguration,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSwitch, FSSelectDashboardDatePreset, FSTermField], FSDateSelectPresetConfiguration),
    ...addComponentEmits(FSDateSelectPresetConfiguration),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  render: (args) => ({
    components: { FSDateSelectPresetConfiguration },
    setup() {
      return { args };
    },
    template: `
      <FSDateSelectPresetConfiguration
        v-model:useDatePreset="args.useDatePreset"
        v-model:datePresetCode="args.datePresetCode"
        v-model:startDate="args.startDate"
        v-model:endDate="args.endDate"
        v-bind="args"
      />
    `,
  }),
};

export const CustomDate: Story = {
  ...BaseStory,
  args: {
    settings: settingsMock,
    useDatePreset: false,
    datePresetCode: '',
    startDate: 'now - 1d',
    endDate: 'now',
  },
};

export const UsePreset: Story = {
  ...BaseStory,
  args: {
    settings: settingsMock,
    useDatePreset: true,
    datePresetCode: 'last-week',
    startDate: 'now - 1d',
    endDate: 'now',
  },
};
