import type { Meta, StoryObj } from '@storybook/vue3';

import FSSceneCard from "@dative-gpi/foundation-extension-components/components/FSSceneCard.vue";
const meta = {
  title: 'Foundation/Extension/FSSceneCard',
  component: FSSceneCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSSceneCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSSceneCard },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
        <FSSceneCard
          label="Warm day"
          icon="mdi-weather-sunny"
          description="Warm day chalet scene"
          :selected="false"
        />
        <FSSceneCard
          label="Warm day"
          icon="mdi-weather-sunny"
          description="Warm day chalet scene"
          :selected="false"
          :disabled="true"
        />  
        <FSSceneCard
          label="Warm day"
          icon="mdi-weather-sunny"
          description="Warm day chalet scene"
          :selected="true"
        />  
        <FSSceneCard
          label="Warm day"
          icon="mdi-weather-sunny"
          description="Warm day chalet scene"
          :selected="true"
          :disabled="true"
        />    
    </div>`
  })
}