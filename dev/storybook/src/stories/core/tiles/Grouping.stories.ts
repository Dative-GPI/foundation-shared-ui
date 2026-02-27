import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSGroupingTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSGroupingTileUI.vue';
import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSGroupingTile from "@dative-gpi/foundation-core-components/components/tiles/FSGroupingTile.vue";

const meta: Meta<typeof FSGroupingTile> = {
  title: 'Foundation/Core/Tiles/Grouping',
  component: FSGroupingTile,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSGroupingTileUI, FSTile], FSGroupingTile),
    ...addComponentEmits(FSGroupingTile),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSGroupingTile },
    setup() {
      return { args };
    },
    template: `
      <FSGroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: false,
    groupingId: '1',
  },
};

export const Selectable: Story = {
  render: (args) => ({
    components: { FSGroupingTile },
    setup() {
      return { args };
    },
    template: `
      <FSGroupingTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: false,
    groupingId: '2',
    selectable: true,
  },
};
