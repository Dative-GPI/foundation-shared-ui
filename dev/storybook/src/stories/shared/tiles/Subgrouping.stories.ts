import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import { SUBGROUPINGS } from '@/mocks/subgroupings.mock';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSSimpleTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSSimpleTileUI.vue';
import FSSubgroupingTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSSubgroupingTileUI.vue";
import FSLoadTile from '@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue';

const meta = {
  title: 'Foundation/Shared/Tiles/Subgrouping',
  component: FSSubgroupingTileUI,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTile, FSSimpleTileUI], FSSubgroupingTileUI),
    ...addComponentEmits(FSSubgroupingTileUI),
  },
} satisfies Meta<typeof FSSubgroupingTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: SUBGROUPINGS[1].label,
    code: SUBGROUPINGS[1].code,
    icon: SUBGROUPINGS[1].icon,
    groupingLabel: SUBGROUPINGS[1].groupingLabel,
    groupingIcon: SUBGROUPINGS[1].groupingIcon,
    groupingColor: SUBGROUPINGS[1].groupingColor,
    deviceOrganisationsCount: SUBGROUPINGS[1].deviceOrganisationsCount,
  },
  render: (args) => ({
    components: { FSSubgroupingTileUI, FSLoadTile },
    setup() {
      return { args };
    },
    template: `
    <FSSubgroupingTileUI
      v-model="args.modelValue"
      v-bind="args"
    />
    `
  })
}

export const Variations: Story = {
  args: {
    label: SUBGROUPINGS[0].label,
    code: SUBGROUPINGS[0].code,
    icon: SUBGROUPINGS[0].icon,
    groupingLabel: SUBGROUPINGS[0].groupingLabel,
    groupingIcon: SUBGROUPINGS[0].groupingIcon,
    groupingColor: SUBGROUPINGS[0].groupingColor,
    deviceOrganisationsCount: SUBGROUPINGS[0].deviceOrganisationsCount,
  },
  render: () => ({
    components: { FSSubgroupingTileUI },
    setup() {
      return { subgroupings: SUBGROUPINGS };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <FSSubgroupingTileUI
        v-for="subgrouping in subgroupings"
        :key="subgrouping.id"
        :label="subgrouping.label"
        :code="subgrouping.code"
        :icon="subgrouping.icon"
        :groupingLabel="subgrouping.groupingLabel"
        :groupingIcon="subgrouping.groupingIcon"
        :groupingColor="subgrouping.groupingColor"
        :deviceOrganisationsCount="subgrouping.deviceOrganisationsCount"
      />
    </div>
    `
  })
}
