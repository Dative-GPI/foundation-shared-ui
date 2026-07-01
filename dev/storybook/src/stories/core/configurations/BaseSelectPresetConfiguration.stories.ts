import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { EntityType } from '@dative-gpi/foundation-shared-domain/enums';

import FSEntitySelectPresetConfiguration from '@dative-gpi/foundation-core-components/components/configurations/FSEntitySelectPresetConfiguration.vue';
import FSDateSelectPresetConfiguration from '@dative-gpi/foundation-core-components/components/configurations/FSDateSelectPresetConfiguration.vue';
import FSBaseSelectPresetConfiguration from '@dative-gpi/foundation-core-components/components/configurations/FSBaseSelectPresetConfiguration.vue';

import { settingsMock } from './settings.mock';

const meta: Meta<typeof FSBaseSelectPresetConfiguration> = {
  title: 'Core/Components/Configurations/BaseSelectPresetConfiguration',
  component: FSBaseSelectPresetConfiguration,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSEntitySelectPresetConfiguration, FSDateSelectPresetConfiguration], FSBaseSelectPresetConfiguration),
    ...addComponentEmits(FSBaseSelectPresetConfiguration),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  render: (args) => ({
    components: { FSBaseSelectPresetConfiguration },
    setup() {
      return { args };
    },
    template: `
      <FSBaseSelectPresetConfiguration
        v-model:useEntityPreset="args.useEntityPreset"
        v-model:entityPresetCode="args.entityPresetCode"
        v-model:entityType="args.entityType"
        v-model:entitiesIds="args.entitiesIds"
        v-model:useDatePreset="args.useDatePreset"
        v-model:datePresetCode="args.datePresetCode"
        v-model:startDate="args.startDate"
        v-model:endDate="args.endDate"
        v-bind="args"
      />
    `,
  }),
};

export const CustomValues: Story = {
  ...BaseStory,
  args: {
    settings: settingsMock,
    useEntityPreset: false,
    entityPresetCode: '',
    entityType: EntityType.Device,
    entitiesIds: [],
    useDatePreset: false,
    datePresetCode: '',
    startDate: 'now - 1d',
    endDate: 'now',
  },
};

export const UsePresets: Story = {
  ...BaseStory,
  args: {
    settings: settingsMock,
    useEntityPreset: true,
    entityPresetCode: 'locations',
    entityType: EntityType.Device,
    entitiesIds: [],
    useDatePreset: true,
    datePresetCode: 'last-week',
    startDate: 'now - 1d',
    endDate: 'now',
  },
};
