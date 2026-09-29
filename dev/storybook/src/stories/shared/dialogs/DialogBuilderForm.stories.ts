import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VDialog } from 'vuetify/components';
import FSDialogBuilderFormBody from "@dative-gpi/foundation-shared-components/components/FSDialogBuilderFormBody.vue";
import FSDialogBuilderForm from "@dative-gpi/foundation-shared-components/components/FSDialogBuilderForm.vue";
import FSTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSFadeOut from '@dative-gpi/foundation-shared-components/components/FSFadeOut.vue';

const meta: Meta<typeof FSDialogBuilderForm> = {
  title: 'Shared/Components/Dialogs/DialogBuilderForm',
  component: FSDialogBuilderForm,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDialogBuilderFormBody, FSDialog, VDialog], FSDialogBuilderForm),
    ...addComponentEmits(FSDialogBuilderForm),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSDialogBuilderForm, FSTextField, FSButton, FSRow, FSSpan, FSIcon, FSChip },
    setup() {
      const label1 = ref("");
      const label2 = ref("");
      const label3 = ref("");

      const submitDialog = () => {
        alert("Submitting dialog with data: " + JSON.stringify({ label1: label1.value, label2: label2.value, label3: label3.value }));

        args.modelValue = false;
      };

      return { args, label1, label2, label3, submitDialog };
    },
    template: `
      <FSButton
        color="primary"
        label="Open builder form dialog"
        @click="args.modelValue = true"
      />
      <FSDialogBuilderForm
        v-model="args.modelValue"
        v-bind="args"
        @click:submitButton="submitDialog()"
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
          <FSTextField
            v-for="i in 28"
            :key="i"
            label="Label 2"
            v-model="label2"
          />
        </template>
        <template #step-3>
          <FSTextField label="Label 3" v-model="label3" />
        </template>
      </FSDialogBuilderForm>
    `,
  }),
  args: {
    modelValue: false,
    title: "Builder form dialog",
    manualSteps: 3,
  },
};


export const WithOnlyOneConfiguration: Story = {
  render: (args) => ({
    components: { FSDialogBuilderForm, FSTextField, FSButton, FSRow, FSSpan, FSIcon, FSChip, FSFadeOut },
    setup() {
      const label1 = ref("");
      const label2 = ref("");
      const label3 = ref("");

      const submitDialog = () => {
        alert("Submitting dialog with data: " + JSON.stringify({ label1: label1.value, label2: label2.value, label3: label3.value }));

        args.modelValue = false;
      };

      return { args, label1, label2, label3, submitDialog };
    },
    template: `
      <FSButton
        color="primary"
        label="Open builder form dialog"
        @click="args.modelValue = true"
      />
      <FSDialogBuilderForm
        v-model="args.modelValue"
        v-bind="args"
        @click:submitButton="submitDialog()"
      >
        <template #manualConfiguration>
          <FSFadeOut>
            <FSTextField label="Label 1" v-model="label1" />
            <FSTextField
              v-for="i in 28"
              :key="i"
              label="Label 2"
              v-model="label2"
            />
            <FSTextField label="Label 3" v-model="label3" />
          </FSFadeOut>
        </template>
        <template #preview>
          <FSRow>
            <FSSpan>Preview content goes here</FSSpan>
          </FSRow>
          <FSFadeOut>
            <FSSpan
              v-for="i in 92"
              :key="i"
            >
              Preview item {{ i }}
            </FSSpan>
          </FSFadeOut>
        </template>
        <template #append>
          <FSRow>
            <FSButton
              color="primary"
              label="Append Action"
              @click="() => {}"
            />
          </FSRow>
          <FSSpan
            v-for="i in 10"
            :key="i"
          >
            Append item {{ i }}
          </FSSpan>
        </template>
      </FSDialogBuilderForm>
    `,
  }),
  args: {
    modelValue: false,
    title: null,
    manualSteps: 3,
    displayAiConfiguration: false,
    showVerticalDivider: true,
    configurationMinHeight: 400
  },
};
