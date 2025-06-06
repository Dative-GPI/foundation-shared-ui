import type { Meta, StoryObj } from '@storybook/vue3';

import { addSubcomponentsArgTypes } from '@/utils/properties';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSGroupingTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupingTileUI.vue";
import FSLoadTile from '@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue';

const meta = {
  title: 'Foundation/Shared/Tiles/Grouping',
  component: FSGroupingTileUI,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTile], FSGroupingTileUI)
  },
} satisfies Meta<typeof FSGroupingTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      label: "Dynasties & Dystopia",
      code: "Denzel Curry featuring Gizzle and Bren Joy",
      icon: "mdi-group",
      iconColor: "warning"      
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