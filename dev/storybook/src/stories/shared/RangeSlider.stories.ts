import type { Meta, StoryObj } from '@storybook/vue3';

import FSRangeSlider from "@dative-gpi/foundation-shared-components/components/FSRangeSlider.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import { VRangeSlider } from 'vuetify/components';

const meta = {
  title: 'Foundation/Shared/RangeSlider',
  component: FSRangeSlider,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSRangeSlider),
    ...addSubcomponentsArgTypes([VRangeSlider], FSRangeSlider)
  },
} satisfies Meta<typeof FSRangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    modelValue: [0, 50],
    label: 'Range Slider',
    description: 'This is a range slider component that allows users to select a range of values.',
    color: 'FF5722',
  },
  render: (args) => ({
    components: { FSRangeSlider, FSCol },
    setup() {
      return { args };
    },
    template: `
    <FSRangeSlider
      v-bind="args"
      v-model="args.modelValue"
    />`
  })
}