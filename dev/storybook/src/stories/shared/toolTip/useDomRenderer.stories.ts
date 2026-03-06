import type { Meta, StoryObj } from '@storybook/vue3';

import MapCustomPin from './MapCustomPin.vue';
import MapMultipleCustomPins from './MapMultipleCustomPins.vue';

const meta = {
  title: 'Foundation/Shared/ToolTip/useDomRenderer',
  component: MapCustomPin,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MapCustomPin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SinglePin: Story = {
  render: () => ({
    components: { MapCustomPin },
    template: `<MapCustomPin />`
  })
};

export const MultiplePins: Story = {
  render: () => ({
    components: { MapMultipleCustomPins },
    template: `<MapMultipleCustomPins />`
  })
};