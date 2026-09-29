import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VDialog } from 'vuetify/components';
import FSDialogMultiFormBody from "@dative-gpi/foundation-shared-components/components/FSDialogMultiFormBody.vue";
import FSTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue";
import FSDialogMultiForm from "@dative-gpi/foundation-shared-components/components/FSDialogMultiForm.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta: Meta<typeof FSDialogMultiForm> = {
  title: 'Shared/Components/Dialogs/DialogMultiForm',
  component: FSDialogMultiForm,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDialogMultiFormBody, FSDialog, VDialog], FSDialogMultiForm),
    ...addComponentEmits(FSDialogMultiForm),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSDialogMultiForm, FSTextField, FSButton },
    setup() {
      const label1 = ref("");
      const label2 = ref("");
      const label3 = ref("");
      return { args, label1, label2, label3 };
    },
    template: `
      <FSButton
        color="primary"
        label="Open multiform dialog"
        @click="args.modelValue = true"
      />
      <FSDialogMultiForm
        v-model="args.modelValue"
        v-bind="args"
        @click:submitButton="args.modelValue = false"
      >
        <template #step-1>
          <FSTextField label="Label 1" v-model="label1" />
        </template>
        <template #step-2>
          <FSTextField label="Label 2" v-model="label2" />
        </template>
        <template #step-3>
          <FSTextField label="Label 3" v-model="label3" />
        </template>
      </FSDialogMultiForm>
    `,
  }),
  args: {
    modelValue: false,
    title: "Multiform dialog",
    subtitle: "3 pages form",
    width: "500px",
    steps: 3,
  },
};

export const Tabs: Story = {
  render: (args) => ({
    components: { FSDialogMultiForm, FSTextField, FSButton, FSRow, FSSpan, FSIcon, FSChip },
    setup() {
      const label1 = ref("");
      const label2 = ref("");
      const label3 = ref("");
      return { args, label1, label2, label3 };
    },
    template: `
      <FSButton
        color="primary"
        label="Open tabs multiform dialog"
        @click="args.modelValue = true"
      />
      <FSDialogMultiForm
        v-model="args.modelValue"
        v-bind="args"
        @click:submitButton="args.modelValue = false"
      >
        <template #tab-1>
          <FSRow gap="8px">
            <FSIcon>mdi-cog</FSIcon>
            <FSSpan>Configuration</FSSpan>
            <FSChip label="2" />
          </FSRow>
        </template>
        <template #tab-2-icon>mdi-home</template>
        <template #tab-2-label>Home</template>
        <template #step-1>
          <FSTextField label="Label 1" v-model="label1" />
        </template>
        <template #step-2>
          <FSTextField label="Label 2" v-model="label2" />
        </template>
        <template #step-3>
          <FSTextField label="Label 3" v-model="label3" />
        </template>
      </FSDialogMultiForm>
    `,
  }),
  args: {
    modelValue: false,
    title: "Tabs multiform dialog",
    subtitle: "3 pages form",
    width: "500px",
    steps: 3,
    mode: "tabs",
  },
};
