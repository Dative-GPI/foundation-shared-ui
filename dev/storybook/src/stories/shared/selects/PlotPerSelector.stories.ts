import type { Meta, StoryObj } from '@storybook/vue3';

import FSPlotPerSelector from "@dative-gpi/foundation-core-components/components/selects/chartSelectors/FSPlotPerSelector.vue";

const meta = {
  title: 'Foundation/Shared/Selects/PlotPerSelector',
  component: FSPlotPerSelector,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSPlotPerSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      items: [{
        plotPer: 0,
        groupingId: null,
      }]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSPlotPerSelector },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSPlotPerSelector
        v-model="args.value1"
      />
    </FSCol>`
  })
}