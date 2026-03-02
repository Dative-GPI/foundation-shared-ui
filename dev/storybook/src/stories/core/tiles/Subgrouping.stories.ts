import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSSubgroupingTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSSubgroupingTileUI.vue';
import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSSubgroupingTile from "@dative-gpi/foundation-core-components/components/tiles/FSSubgroupingTile.vue";

const meta: Meta<typeof FSSubgroupingTile> = {
  title: 'Foundation/Core/Tiles/Subgrouping',
  component: FSSubgroupingTile,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSubgroupingTileUI, FSTile], FSSubgroupingTile),
    ...addComponentEmits(FSSubgroupingTile),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSSubgroupingTile },
    setup() {
      return { args };
    },
    template: `
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: false,
    subgroupingId: '1',
  },
};

export const Selectable: Story = {
  render: (args) => ({
    components: { FSSubgroupingTile },
    setup() {
      return { args };
    },
    template: `
      <FSSubgroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: false,
    subgroupingId: '2',
    selectable: true,
  },
};
