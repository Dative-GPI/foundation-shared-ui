import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import { GROUPINGS } from '@/mocks/groupings.mock';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSSimpleTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSSimpleTileUI.vue';
import FSGroupingTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupingTileUI.vue";
import FSLoadTile from '@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue';

const meta = {
  title: 'Foundation/Shared/Tiles/Grouping',
  component: FSGroupingTileUI,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTile, FSSimpleTileUI], FSGroupingTileUI),
    ...addComponentEmits(FSGroupingTileUI),
  },
} satisfies Meta<typeof FSGroupingTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      label: GROUPINGS[0].label,
      code: GROUPINGS[0].code,
      icon: GROUPINGS[0].icon,
      iconColor: GROUPINGS[0].color,
      subgroupingCount: GROUPINGS[0].subgroupingCount,
    },
    render: (args) => ({
    components: { FSGroupingTileUI, FSLoadTile },
    setup() {
      return { args };
    },
    template: `
    <FSGroupingTileUI
      v-model="args.modelValue"
      v-bind="args"
    />
    `
  })
}

export const Variations: Story = {
  args: {
    label: GROUPINGS[0].label,
    code: GROUPINGS[0].code,
    icon: GROUPINGS[0].icon,
    iconColor: GROUPINGS[0].color,
    subgroupingCount: GROUPINGS[0].subgroupingCount,
  },
  render: () => ({
    components: { FSGroupingTileUI },
    setup() {
      return { groupings: GROUPINGS.slice(0, 6) };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <FSGroupingTileUI
        v-for="grouping in groupings"
        :key="grouping.id"
        :label="grouping.label"
        :code="grouping.code"
        :icon="grouping.icon"
        :iconColor="grouping.color"
        :subgroupingCount="grouping.subgroupingCount"
      />
    </div>
    `
  })
}