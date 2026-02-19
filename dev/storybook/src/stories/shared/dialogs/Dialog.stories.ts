import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTranslateField from "@dative-gpi/foundation-shared-components/components/fields/FSTranslateField.vue";
import FSDialogMultiForm from "@dative-gpi/foundation-shared-components/components/FSDialogMultiForm.vue";
import FSDialogContent from "@dative-gpi/foundation-shared-components/components/FSDialogContent.vue";
import FSTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue";
import FSDialogSubmit from "@dative-gpi/foundation-shared-components/components/FSDialogSubmit.vue";
import FSDialogRemove from "@dative-gpi/foundation-shared-components/components/FSDialogRemove.vue";
import FSDialogForm from "@dative-gpi/foundation-shared-components/components/FSDialogForm.vue";
import FSFadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";
import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

import DialogFormRef from "./DialogFormRef.vue";

const meta: Meta<typeof FSDialog> = {
  title: 'Foundation/Shared/Dialog',
  component: FSDialog,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDialogContent], FSDialog),
    ...addComponentEmits(FSDialog),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSDialog },
    setup() {
      return { args };
    },
    template: `
      <FSDialog
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: true,
    title: "Basic dialog",
    width: "500px",
  },
};

export const Submit: Story = {
  render: (args) => ({
    components: { FSDialogSubmit, FSSpan, FSButton },
    setup() {
      const dialogOpen = ref(false);
      return { args, dialogOpen };
    },
    template: `
      <FSButton
        color="primary"
        label="Dialog submit"
        @click="dialogOpen = true"
      />
      <FSDialogSubmit
        v-model="dialogOpen"
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
    width: "500px",
    title: "Form 1",
    showCancelButton: true,
    showSubmitButton: true,
  },
};

export const Form: Story = {
  render: (args) => ({
    components: { FSDialogForm, FSTextField, FSButton, FSRow },
    setup() {
      const dialogOpen = ref(false);
      const label = ref("");
      return { args, dialogOpen, label };
    },
    template: `
      <FSButton
        color="primary"
        label="Dialog form"
        @click="dialogOpen = true"
      />
      <FSDialogForm
        v-model="dialogOpen"
        v-bind="args"
        @click:submitButton="dialogOpen = false"
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
    width: "500px",
    title: "Form 1",
    subtitle: "Fill the form",
  },
};

export const FormWithValidation: Story = {
  render: (args) => ({
    components: { FSDialogForm, FSTextField, FSSpan, FSButton },
    setup() {
      const dialogOpen = ref(false);
      const validation = ref(false);
      const label = ref("");
      return { args, dialogOpen, validation, label };
    },
    template: `
      <FSButton
        color="primary"
        label="Dialog form with validation"
        @click="dialogOpen = true"
      />
      <FSDialogForm
        v-model="dialogOpen"
        v-bind="args"
        :validation="validation"
        @click:submitButton="validation = true"
        @click:validateButton="() => { validation = false; dialogOpen = false; }"
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
    width: "500px",
    title: "Form with validation",
    subtitle: "Fill the form",
  },
};

export const FormNoButtons: Story = {
  render: (args) => ({
    components: { FSDialogForm, FSTranslateField, FSButton },
    setup() {
      const dialogOpen = ref(false);
      const label = ref("");
      return { args, dialogOpen, label };
    },
    template: `
      <FSButton
        color="primary"
        label="Disabled buttons dialog"
        @click="dialogOpen = true"
      />
      <FSDialogForm
        v-model="dialogOpen"
        v-bind="args"
      >
        <template #body>
          <FSTranslateField
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
    width: "500px",
    title: "No buttons dialog",
    showCancelButton: false,
    showSubmitButton: false,
  },
};

export const FormRef: Story = {
  render: () => ({
    components: { DialogFormRef },
    template: `<DialogFormRef />`,
  }),
};

export const MultipleForm: Story = {
  render: (args) => ({
    components: { FSDialogMultiForm, FSTextField, FSButton },
    setup() {
      const dialogOpen = ref(false);
      const label1 = ref("");
      const label2 = ref("");
      const label3 = ref("");
      return { args, dialogOpen, label1, label2, label3 };
    },
    template: `
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="dialogOpen = true"
      />
      <FSDialogMultiForm
        v-model="dialogOpen"
        v-bind="args"
        @click:submitButton="dialogOpen = false"
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
    width: "500px",
    title: "Form 1",
    subtitle: "3 pages form",
    showCancelButton: true,
    showSubmitButton: true,
    steps: 3,
  },
};

export const Remove: Story = {
  render: (args) => ({
    components: { FSDialogRemove, FSButton, FSRow },
    setup() {
      const dialog1 = ref(false);
      const removing1 = ref(false);
      const dialog2 = ref(false);
      const removing2 = ref(false);
      const dialog3 = ref(false);
      const removing3 = ref(false);
      return { args, dialog1, removing1, dialog2, removing2, dialog3, removing3 };
    },
    template: `
      <FSRow gap="10px">
        <FSButton
          label="Dialog - singular"
          @click="dialog1 = true"
        />
        <FSButton
          label="Dialog - plural"
          @click="dialog2 = true"
        />
        <FSButton
          label="Dialog - large number"
          @click="dialog3 = true"
        />

        <FSDialogRemove
          v-model="dialog1"
          :removeTotal="1"
          :removing="removing1"
          @click:submitButton="removing1 = true"
        />
        <FSDialogRemove
          v-model="dialog2"
          :removeTotal="12"
          :removing="removing2"
          @click:submitButton="removing2 = true"
        />
        <FSDialogRemove
          v-model="dialog3"
          :removeTotal="9999999"
          :removing="removing3"
          @click:submitButton="removing3 = true"
        />
      </FSRow>
    `,
  }),
  args: {},
};

export const FullScreen: Story = {
  render: (args) => ({
    components: { FSDialog, FSFadeOut, FSCard, FSCol, FSSpan, FSButton },
    setup() {
      const dialogOpen = ref(false);
      return { args, dialogOpen };
    },
    template: `
      <FSButton
        color="primary"
        label="Dialog fullscreen"
        @click="dialogOpen = true"
      />
      <FSDialog
        v-model="dialogOpen"
        v-bind="args"
      >
        <FSCard width="100%" height="100%" padding="20px" :border="false">
          <FSFadeOut maxHeight="100%" :scrollOutside="false">
            <FSCol>
              <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
                This is a fullscreen dialog
              </FSSpan>
              <FSButton label="Close" @click="dialogOpen = false" />
            </FSCol>
          </FSFadeOut>
        </FSCard>
      </FSDialog>
    `,
  }),
  args: {
    title: "Form 1",
    fullscreen: true,
    width: "100%",
  },
};

export const TabsForm: Story = {
  render: (args) => ({
    components: { FSDialogMultiForm, FSTextField, FSButton, FSRow, FSSpan, FSIcon, FSChip },
    setup() {
      const dialogOpen = ref(false);
      const label1 = ref("");
      const label2 = ref("");
      const label3 = ref("");
      return { args, dialogOpen, label1, label2, label3 };
    },
    template: `
      <FSButton
        color="primary"
        label="Dialog multiform"
        @click="dialogOpen = true"
      />
      <FSDialogMultiForm
        v-model="dialogOpen"
        v-bind="args"
        @click:submitButton="dialogOpen = false"
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
    width: "500px",
    title: "Form 1",
    subtitle: "3 pages form",
    showCancelButton: true,
    showSubmitButton: true,
    steps: 3,
    mode: "tabs",
  },
};