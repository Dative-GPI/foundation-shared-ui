import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VDialog } from 'vuetify/components';
import FSFadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";
import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta: Meta<typeof FSDialog> = {
  title: 'Shared/Components/Dialogs/Dialog',
  component: FSDialog,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([VDialog], FSDialog),
    ...addComponentEmits(FSDialog),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSDialog, FSButton, FSSpan },
    setup() {
      return { args };
    },
    template: `
      <FSButton
        color="primary"
        label="Open dialog"
        @click="args.modelValue = true"
      />
      <FSDialog
        v-model="args.modelValue"
        v-bind="args"
      >
        <template #body>
          <FSSpan>
            This is a basic dialog
          </FSSpan>
        </template>
      </FSDialog>
    `,
  }),
  args: {
    modelValue: false,
    title: "Basic dialog",
    subtitle: "Dialog subtitle",
    width: "500px",
  },
};

export const FullScreen: Story = {
  render: (args) => ({
    components: { FSDialog, FSFadeOut, FSCard, FSCol, FSSpan, FSButton },
    setup() {
      return { args };
    },
    template: `
      <FSButton
        color="primary"
        label="Open fullscreen dialog"
        @click="args.modelValue = true"
      />
      <FSDialog
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSCard width="100%" height="100%" padding="20px" :border="false">
          <FSFadeOut maxHeight="100%" :scrollOutside="false">
            <FSCol>
              <FSSpan v-for="i in 100" :key="i" style="min-height: fit-content">
                This is a fullscreen dialog
              </FSSpan>
              <FSButton label="Close" @click="args.modelValue = false" />
            </FSCol>
          </FSFadeOut>
        </FSCard>
      </FSDialog>
    `,
  }),
  args: {
    modelValue: false,
    fullscreen: true,
    width: "100%",
  },
};
