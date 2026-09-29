import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VDialog } from 'vuetify/components';
import FSDialogSubmit from "@dative-gpi/foundation-shared-components/components/FSDialogSubmit.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

const meta: Meta<typeof FSDialogSubmit> = {
  title: 'Shared/Components/Dialogs/DialogSubmit',
  component: FSDialogSubmit,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDialog, VDialog], FSDialogSubmit),
    ...addComponentEmits(FSDialogSubmit),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSDialogSubmit, FSButton, FSSpan },
    setup() {
      return { args };
    },
    template: `
      <FSButton
        color="primary"
        label="Open submit dialog"
        @click="args.modelValue = true"
      />
      <FSDialogSubmit
        v-model="args.modelValue"
        v-bind="args"
      >
        <template #body>
          <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
            This is a submit dialog
          </FSSpan>
        </template>
      </FSDialogSubmit>
    `,
  }),
  args: {
    modelValue: false,
    title: "Submit dialog",
    width: "500px",
  },
};
