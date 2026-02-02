import type { Meta, StoryObj } from '@storybook/vue3';

import MapCustomPin from './MapCustomPin.vue';

const meta = {
  title: 'Foundation/Shared/ToolTip/UseDynamicVueApp',
  component: MapCustomPin,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof MapCustomPin>;

export default meta;
type Story = StoryObj<typeof meta>;

 export const UseDynamicVueApp: Story = {
  render: () => ({
    components: { MapCustomPin },
    setup() {
    },
    template: `
    <MapCustomPin />
    `
  })
};
