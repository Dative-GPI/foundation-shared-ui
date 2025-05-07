import type { Meta, StoryObj } from '@storybook/vue3';

import FSChartTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSChartTileUI.vue";
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import FSSimpleTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSSimpleTileUI.vue';
import { ChartType } from '@dative-gpi/foundation-shared-domain/enums';

const meta = {
  title: 'Foundation/Shared/Tiles/Chart',
  component: FSChartTileUI,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSimpleTileUI], FSChartTileUI),
    ...addComponentEmits(FSChartTileUI)
  },
} satisfies Meta<typeof FSChartTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    label: 'Chart',
    icon: 'mdi-chart-bar',
    type: ChartType.Heatmap
  },
  render: (args) => ({
    components: { FSChartTileUI },
    setup() {
      return { args };
    },
    template: `
    <FSChartTileUI
      v-bind="args"
    />`
  })
}

