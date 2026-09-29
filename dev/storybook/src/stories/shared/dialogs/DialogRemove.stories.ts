import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VDialog } from 'vuetify/components';
import FSDialogSubmit from "@dative-gpi/foundation-shared-components/components/FSDialogSubmit.vue";
import FSDialogRemove from "@dative-gpi/foundation-shared-components/components/FSDialogRemove.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";

const meta: Meta<typeof FSDialogRemove> = {
  title: 'Shared/Components/Dialogs/DialogRemove',
  component: FSDialogRemove,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDialogSubmit, FSDialog, VDialog], FSDialogRemove),
    ...addComponentEmits(FSDialogRemove),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSDialogRemove, FSButton },
    setup() {
      return { args };
    },
    template: `
      <FSButton
        color="primary"
        label="Open remove dialog"
        @click="args.modelValue = true"
      />
      <FSDialogRemove
        v-model="args.modelValue"
        v-bind="args"
        @click:submitButton="args.removing = true"
      />
    `,
  }),
  args: {
    modelValue: false,
    removing: false,
    removeTotal: 12,
    removeCurrent: 0,
  },
};

export const Removing: Story = {
  ...Default,
  args: {
    modelValue: false,
    removing: true,
    removeTotal: 12,
    removeCurrent: 5,
  },
};
