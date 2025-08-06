import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VMenu } from 'vuetify/components';
import FSMenu from '@dative-gpi/foundation-shared-components/components/FSMenu.vue';
import FSInformationsMenu from '@dative-gpi/foundation-shared-components/components/FSInformationsMenu.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';

const meta: Meta<typeof FSInformationsMenu> = {
  title: 'Foundation/Shared/Menu/InformationsMenu',
  component: FSInformationsMenu,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSMenu, VMenu], FSInformationsMenu),
    ...addComponentEmits(FSInformationsMenu),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSInformationsMenu },
    setup() {
      return { args };
    },
    template: `
    <FSInformationsMenu
      v-bind="args"
    />`
  }),
  args: {
    content: "I am an helpful text content. Allowed through 4 lines.",
  },
};

export const InCardInformationsMenu: Story = {
  render: (args) => ({
    components: {
      FSInformationsMenu,
      FSText,
      FSCard
    },
    setup() {
      return { args };
    },
    template: `
    <FSCard
      width="120"
      padding="8"
    >
      <FSText
        :lineClamp="2"
      >
        I am a card with a really helpful text content.
      </FSText>
      <template #top-right>
        <FSInformationsMenu
          v-bind="args"
        />
      </template>
    </FSCard>
    `
  }),
  args: {
    content: "I am an helpful text content. Allowed through 4 lines.",
  },
};
