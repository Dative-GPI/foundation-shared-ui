import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VDialog } from 'vuetify/components';
import FSDialogFormBody from "@dative-gpi/foundation-shared-components/components/FSDialogFormBody.vue";
import FSTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue";
import FSDialogForm from "@dative-gpi/foundation-shared-components/components/FSDialogForm.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

import DialogFormRef from "./DialogFormRef.vue";

const meta: Meta<typeof FSDialogForm> = {
  title: 'Shared/Components/Dialogs/DialogForm',
  component: FSDialogForm,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDialogFormBody, FSDialog, VDialog], FSDialogForm),
    ...addComponentEmits(FSDialogForm),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSDialogForm, FSTextField, FSButton },
    setup() {
      const label = ref("");
      return { args, label };
    },
    template: `
      <FSButton
        color="primary"
        label="Open form dialog"
        @click="args.modelValue = true"
      />
      <FSDialogForm
        v-model="args.modelValue"
        v-bind="args"
        @click:submitButton="args.modelValue = false"
      >
        <template #body>
          <FSTextField
            label="Label"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="label"
          />
        </template>
      </FSDialogForm>
    `,
  }),
  args: {
    modelValue: false,
    title: "Form dialog",
    subtitle: "Fill the form",
    width: "500px",
  },
};

export const WithValidation: Story = {
  render: (args) => ({
    components: { FSDialogForm, FSTextField, FSSpan, FSButton },
    setup() {
      const label = ref("");
      return { args, label };
    },
    template: `
      <FSButton
        color="primary"
        label="Open form dialog with validation"
        @click="args.modelValue = true"
      />
      <FSDialogForm
        v-model="args.modelValue"
        v-bind="args"
        @click:submitButton="args.validation = true"
        @click:validateButton="args.validation = false"
      >
        <template #body>
          <FSTextField
            label="Label"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="label"
          />
        </template>
        <template #validation>
          <FSSpan color="success">
            Validation done, you may close this dialog
          </FSSpan>
        </template>
      </FSDialogForm>
    `,
  }),
  args: {
    modelValue: false,
    validation: false,
    title: "Form dialog with validation",
    subtitle: "Fill the form",
    width: "500px",
  },
};

export const WithoutButtons: Story = {
  render: (args) => ({
    components: { FSDialogForm, FSTextField, FSButton },
    setup() {
      const label = ref("");
      return { args, label };
    },
    template: `
      <FSButton
        color="primary"
        label="Open form dialog without buttons"
        @click="args.modelValue = true"
      />
      <FSDialogForm
        v-model="args.modelValue"
        v-bind="args"
      >
        <template #body>
          <FSTextField
            label="Label"
            :required="true"
            :rules="[v => !!v || 'Label is required']"
            v-model="label"
          />
        </template>
      </FSDialogForm>
    `,
  }),
  args: {
    modelValue: false,
    title: "Form dialog without buttons",
    width: "500px",
    showCancelButton: false,
    showSubmitButton: false,
  },
};

export const ManualValidation: Story = {
  render: () => ({
    components: { DialogFormRef },
    template: `<DialogFormRef />`,
  }),
};
