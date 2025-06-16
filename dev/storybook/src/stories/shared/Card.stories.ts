import type { Meta, StoryObj } from '@storybook/vue3';

import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

const meta = {
  title: 'Foundation/Shared/Card',
  component: FSCard,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof FSCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSCard },
    setup() {
      return { args };
    },
    template: `
    <FSCard
      v-bind="args"
    >
      I am a card content
    </FSCard>`
  }),
  args: {
    padding: '16px'
  },
};

export const Variants: Story = {
  render: (args) => ({
    components: { FSCard },
    setup() {
      return { args, ColorEnum };
    },
    template: `
    <div
        style="display: flex; flex-direction: row; gap: 16px;"
    >
        <FSCard
        v-bind="args"
        variant="background"
        >
        Variant : background
        </FSCard>
        <FSCard
        v-bind="args"
        variant="standard"
        >
        Variant : standard
        </FSCard>
        <FSCard
        v-bind="args"
        variant="full"
        >
        Variant : full
        </FSCard>
        <FSCard
        v-bind="args"
        :color="[ColorEnum.Primary, ColorEnum.Error]"
        variant="gradient"
        >
        Variant : gradient
        </FSCard>
    </div>
    `
  }),
  args: {
    padding: '16px',
    color: ColorEnum.Primary
  },
};
