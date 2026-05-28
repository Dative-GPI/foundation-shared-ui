import type { Meta, StoryObj } from '@storybook/vue3';

import FSProgressBar from "@dative-gpi/foundation-shared-components/components/FSProgressBar.vue";

const meta = {
  title: 'Foundation/Shared/ProgressBar',
  component: FSProgressBar,
  tags: ['autodocs'],
  argTypes: {
    valueFormat: {
      control: 'radio',
      options: ['percentage', 'raw']
    }
  },
} satisfies Meta<typeof FSProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 0.70,
    showValue: true,
  },
  render: (args) => ({
    components: { FSProgressBar },
    setup() {
      return { args };
    },
    template: `
      <FSProgressBar
        v-bind="args"
      />
    `
  }),
};

export const Interval: Story = {
  args: {
    modelValue: -0.6,
    min: -1,
    max: 1,
    valueFormat: 'raw',
    showValue: true,
    labels: [{ value: -1 }, { value: 0 }, { value: 1 }],
  },
  render: (args) => ({
    components: { FSProgressBar },
    setup() {
      return { args };
    },
    template: `
      <FSProgressBar
        v-bind="args"
      />
    `
  }),
};

export const IntervalCursor: Story = {
  args: {
    modelValue: 5,
    min: -10,
    max: 10,
    cursor: true,
    showValue: true,
    labels: [{ value: -10 }, { value: 0 }, { value: 10 }],
  },
  render: (args) => ({
    components: { FSProgressBar },
    setup() {
      return { args };
    },
    template: `
      <FSProgressBar
        v-bind="args"
      />
    `
  }),
};
