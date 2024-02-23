import type { Meta, StoryObj } from '@storybook/vue3';

import FSStatusCardScene from "@dative-gpi/foundation-extension-components/components/FSStatusCardScene.vue";
const meta = {
  title: 'Foundation/Extension/FSStatusCardScene',
  component: FSStatusCardScene,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSStatusCardScene>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      values: [{
        sceneTarget: {
          value: false,
          label: "Dark",
          confidenceInterval: null
        },
        status: {
          label: "Luminosity",
          value: "Bright",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000
        }
      },
      {
        sceneTarget: {
          value: "Dark",
          label: "Dark",
          confidenceInterval: null
        },
        status: {
          label: "Luminosity",
          value: "Dark",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000
        }
      }
      ],
      selected: [
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSStatusCardScene },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
        <FSStatusCardScene
          :status="args.values[0].status"
          :targetMode="false"
        />  
        <FSStatusCardScene
          :status="args.values[0].status"
          :targetMode="false"
          :disabled="true"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSStatusCardScene
          :status="args.values[0].status"
          :sceneTarget="args.values[0].sceneTarget"
        />
        <FSStatusCardScene
          :status="args.values[1].status"
          :sceneTarget="args.values[1].sceneTarget"
        />
        <FSStatusCardScene
          :status="args.values[1].status"
          :sceneTarget="args.values[1].sceneTarget"
          disabled
        />
        <FSStatusCardScene
          :status="args.values[1].status"
        />
    </div>`
  })
}