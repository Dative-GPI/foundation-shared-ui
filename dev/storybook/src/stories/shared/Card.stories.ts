import type { Meta, StoryObj } from '@storybook/vue3';

import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';
import { CardVariants } from '@dative-gpi/foundation-shared-components/models';
import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';
import { addComponentEmits } from '@/utils/properties';
import FSSpan from '@dative-gpi/foundation-shared-components/components/FSSpan.vue';

const meta = {
  title: 'Foundation/Shared/Card',
  component: FSCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [CardVariants.Standard, CardVariants.Background, CardVariants.Gradient, CardVariants.Full],
      description: 'Mode of the agenda view',
    },
    clickable: {
      control: { type: 'boolean' }
    },
    ...addComponentEmits(FSCard)
  },
} satisfies Meta<typeof FSCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSCard, FSSpan },
    setup() {
      return { args };
    },
    template: `
    <FSCard
      v-bind="args"
    >
      <FSSpan>I am a card content</FSSpan>
    </FSCard>`
  }),
  args: {
    padding: '16px',
    clickable: false,
  },
};

export const Variants: Story = {
  render: (args) => ({
    components: { FSCard, FSSpan },
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
        <FSSpan>Variant : background</FSSpan>
        </FSCard>
        <FSCard
        v-bind="args"
        variant="standard"
        >
        <FSSpan>Variant : standard</FSSpan>
        </FSCard>
        <FSCard
        v-bind="args"
        variant="full"
        >
        <FSSpan>Variant : full</FSSpan>
        </FSCard>
        <FSCard
        v-bind="args"
        :color="[ColorEnum.Primary, ColorEnum.Error]"
        variant="gradient"
        >
        <FSSpan>Variant : gradient</FSSpan>
        </FSCard>
    </div>
    `
  }),
  args: {
    padding: '16px',
    color: ColorEnum.Primary
  },
};

export const Clickables: Story = {
  render: (args) => ({
    components: {
      FSCard,
      FSSpan,
      FSIcon
    },
    setup() {
      return { args, ColorEnum };
    },
    inheritAttrs: false,
    template: `
    <div
        style="display: flex; flex-direction: row; gap: 16px;"
    >
        <FSCard
            v-bind="args"
            href="https://dative-gpi.com"
        >
          <FSSpan>
            Href
          </FSSpan>
        </FSCard>
        <FSCard
            v-bind="args"
            :to="{ name: 'About' }"
        >
          <FSSpan>
            Router Link
          </FSSpan>
        </FSCard>
       <FSCard
            v-bind="args" 
            @click="() => console.log('Card clicked')"
        >
            <template #default="{ contentVariant }">
                <FSIcon
                    icon="mdi-check"
                    :variant="contentVariant"
                    color="error"
                    size="16"
                />
                <FSSpan>
                  Clickable event
                </FSSpan>
            </template>
        </FSCard>
        <FSCard
          :clickable="true"
          type="submit"
          v-bind="args"
        >
            <FSIcon
                icon="mdi-check"
                size="16"
            />
            <FSSpan>
              Clickable submit
            </FSSpan>
        </FSCard>
    </div>
    `
  }),
  args: {
    padding: '16px',
    color: ColorEnum.Primary,
    variant: 'standard'
  },
};
