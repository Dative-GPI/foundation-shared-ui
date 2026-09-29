import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VDialog } from 'vuetify/components';
import FSDialogMenu from "@dative-gpi/foundation-shared-components/components/FSDialogMenu.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

const meta: Meta<typeof FSDialogMenu> = {
  title: 'Shared/Components/Dialogs/DialogMenu',
  component: FSDialogMenu,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([VDialog], FSDialogMenu),
    ...addComponentEmits(FSDialogMenu),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSDialogMenu, FSButton, FSSpan },
    setup() {
      return { args };
    },
    template: `
      <FSButton
        color="primary"
        label="Open dialog menu"
        @click="args.modelValue = true"
      />
      <FSDialogMenu
        v-model="args.modelValue"
        v-bind="args"
      >
        <template #body>
          <FSSpan v-for="i in 5" :key="i">
            Option {{ i }}
          </FSSpan>
        </template>
      </FSDialogMenu>
    `,
  }),
  args: {
    modelValue: false,
    padding: "16px",
  },
};
