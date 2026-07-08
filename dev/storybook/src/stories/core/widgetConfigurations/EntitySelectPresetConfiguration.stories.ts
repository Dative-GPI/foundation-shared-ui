import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { EntityType } from '@dative-gpi/foundation-shared-domain/enums';

import FSSwitch from '@dative-gpi/foundation-shared-components/components/FSSwitch.vue';
import FSSelectEntitiesField from '@dative-gpi/foundation-core-components/components/entities/FSSelectEntitiesField.vue';
import FSSelectDashboardEntityPreset from '@dative-gpi/foundation-core-components/components/fields/FSSelectDashboardEntityPreset.vue';
import FSEntitySelectPresetConfiguration from '@dative-gpi/foundation-core-components/components/widgetConfigurations/FSEntitySelectPresetConfiguration.vue';

import { settingsMock } from './settings.mock';

const meta: Meta<typeof FSEntitySelectPresetConfiguration> = {
  title: 'Core/Components/WidgetConfigurations/EntitySelectPresetConfiguration',
  component: FSEntitySelectPresetConfiguration,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSwitch, FSSelectDashboardEntityPreset, FSSelectEntitiesField], FSEntitySelectPresetConfiguration),
    ...addComponentEmits(FSEntitySelectPresetConfiguration),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  render: (args) => ({
    components: { FSEntitySelectPresetConfiguration },
    setup() {
      return { args };
    },
    template: `
      <FSEntitySelectPresetConfiguration
        v-model:useEntityPreset="args.useEntityPreset"
        v-model:entityPresetCode="args.entityPresetCode"
        v-model:entityType="args.entityType"
        v-model:entitiesIds="args.entitiesIds"
        v-bind="args"
      />
    `,
  }),
};

export const CustomEntities: Story = {
  ...BaseStory,
  args: {
    settings: settingsMock,
    useEntityPreset: false,
    entityPresetCode: '',
    entityType: EntityType.Device,
    entitiesIds: [],
  },
};

export const UsePreset: Story = {
  ...BaseStory,
  args: {
    settings: settingsMock,
    useEntityPreset: true,
    entityPresetCode: 'locations',
    entityType: EntityType.Device,
    entitiesIds: [],
  },
};
