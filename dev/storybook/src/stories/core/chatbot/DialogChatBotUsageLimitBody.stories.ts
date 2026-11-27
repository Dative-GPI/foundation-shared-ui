import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSDialogChatBotUsageLimitBody from "@dative-gpi/foundation-core-components/components/chatbot/FSDialogChatBotUsageLimitBody.vue";

const meta: Meta<typeof FSDialogChatBotUsageLimitBody> = {
  title: 'Core/Components/DialogChatBotUsageLimitBody',
  component: FSDialogChatBotUsageLimitBody,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSCol], FSDialogChatBotUsageLimitBody),
    ...addComponentEmits(FSDialogChatBotUsageLimitBody),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSDialogChatBotUsageLimitBody, FSCol },
    setup() {
      return { args };
    },
    template: `
      <FSCol
        width="600px"
      >
        <FSDialogChatBotUsageLimitBody
          v-bind="args"
        />
      </FSCol>
    `,
  }),
  args: {},
};
