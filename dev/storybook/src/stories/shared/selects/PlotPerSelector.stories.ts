import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSPlotPerSelector from '@dative-gpi/foundation-core-components/components/selects/FSPlotPerSelector.vue';

const meta: Meta<typeof FSPlotPerSelector> = {
  title: 'Foundation/Core/Selects/PlotPerSelector',
  component: FSPlotPerSelector,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([],FSPlotPerSelector),
    ...addComponentEmits(FSPlotPerSelector),
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSPlotPerSelector },
    setup() {
      return { args };
    },
    template: `
    <FSPlotPerSelector
	    v-model="args.modelValue"
	  />`,
  }),
  args: {
    modelValue: {
      plotPer: 0,
      groupingId: null,
    }
  },
};