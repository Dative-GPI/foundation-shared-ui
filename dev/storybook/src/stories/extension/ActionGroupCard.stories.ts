import type { Meta, StoryObj } from '@storybook/vue3';

import FSActionGroupCard from "@dative-gpi/foundation-extension-components/components/FSActionGroupCard.vue";
const meta = {
  title: 'Foundation/Extension/FSActionGroupCard',
  component: FSActionGroupCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSActionGroupCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      values: [{
        status: [{
          label: "Luminosity device 0",
          value: "Dark",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000,
          deviceId: "abc0"
        },
        {
          label: "Luminosity device 1",
          value: "Bright",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000,
          deviceId: "abc1"
        },
        {
          label: "Luminosity device 2",
          value: "Bright",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000,
          deviceId: "abc2"
        },
        {
          label: "Luminosity device 3",
          value: "Dark",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000,
          deviceId: "abc3"
        },
        {
          label: "Luminosity device 4",
          value: "Dark",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000,
          deviceId: "abc4"
        },{
          label: "Luminosity device 5",
          value: "Dark",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000,
          deviceId: "abc5"
        }],
        scenes: [{
          label: "Dark Room",
          icon: "mdi-lightbulb-outline",
          color:"green",
          description: "The room is dark",
          sceneTargets: [{
            value: "Dark",
            label: "Dark",
            confidenceInterval: null,
            deviceId: "abc1"
          },{
            value: "Dark",
            label: "Dark",
            confidenceInterval: null,
            deviceId: "abc2"
          },{
            value: "Dark",
            label: "Dark",
            confidenceInterval: null,
            deviceId: "abc3"
          }]
        },{
          label: "Light Room",
          icon: "mdi-lightbulb-outline",
          color: "orange",
          description: "The room is full of light",
          sceneTargets: [{
            value: "Bright",
            label: "Bright",
            confidenceInterval: null,
            deviceId: "abc1"
          },{
            value: "Bright",
            label: "Bright",
            confidenceInterval: null,
            deviceId: "abc2"
          },{
            value: "Bright",
            label: "Bright",
            confidenceInterval: null,
            deviceId: "abc3"
          }]
        },{
          label: "Semi Dark Room",
          icon: "mdi-lightbulb-outline",
          sceneTargets: [{
            value: "Bright",
            label: "Bright",
            confidenceInterval: null,
            deviceId: "abc1"
          },{
            value: "Dark",
            label: "Dark",
            confidenceInterval: null,
            deviceId: "abc2"
          }]
        }]
      },{
        status: [
        {
          label: "Luminosity device 1",
          value: "Bright",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000,
          deviceId: "abc1"
        },
        {
          label: "Luminosity device 2",
          value: "Bright",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000,
          deviceId: "abc2"
        },
        {
          label: "Luminosity device 3",
          value: "Dark",
          icon: "mdi-lightbulb-outline",
          color: "#996699",
          sourceTimestamp: 1623345600000,
          deviceId: "abc3"
        }],
        scenes: [{
          label: "Dark Room",
          icon: "mdi-lightbulb-outline",
          color:"green",
          description: "The room is dark",
          sceneTargets: [{
            value: "Dark",
            label: "Dark",
            confidenceInterval: null,
            deviceId: "abc1"
          },{
            value: "Dark",
            label: "Dark",
            confidenceInterval: null,
            deviceId: "abc2"
          },{
            value: "Dark",
            label: "Dark",
            confidenceInterval: null,
            deviceId: "abc3"
          }]
        },{
          label: "Light Room",
          icon: "mdi-lightbulb-outline",
          color: "orange",
          description: "The room is full of light",
          sceneTargets: [{
            value: "Bright",
            label: "Bright",
            confidenceInterval: null,
            deviceId: "abc1"
          },{
            value: "Bright",
            label: "Bright",
            confidenceInterval: null,
            deviceId: "abc2"
          },{
            value: "Bright",
            label: "Bright",
            confidenceInterval: null,
            deviceId: "abc3"
          }]
        }]
      }]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSActionGroupCard },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100%;">
        <FSActionGroupCard
          :status="args.values[0].status"
          :scenes="args.values[0].scenes"
          label="TSD Loup Aval IO 1"
        />
        <FSActionGroupCard
          :status="args.values[0].status"
          :scenes="args.values[0].scenes"
          :selectedScene="args.values[0].scenes[0]"
          label="TSD Loup Amont IO 1"
          color="orange"
        />
        <FSActionGroupCard
          :status="args.values[0].status"
          :scenes="args.values[0].scenes"
          :selectedScene="args.values[0].scenes[0]"
          :workInProgress="true"
          label="TSF les bouquetins"
        />
        <FSActionGroupCard
          :status="args.values[1].status"
          :scenes="args.values[1].scenes"
          :selectedScene="args.values[1].scenes[0]"
          label="TSD Forclaz"
        />
    </div>`
  })
}