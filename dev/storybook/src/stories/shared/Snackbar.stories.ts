import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VSnackbar } from 'vuetify/components';
import FSSnackbar from "@dative-gpi/foundation-shared-components/components/FSSnackbar.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta: Meta<typeof FSSnackbar> = {
  title: 'Foundation/Shared/Snackbar',
  component: FSSnackbar,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([VSnackbar], FSSnackbar),
    ...addComponentEmits(FSSnackbar),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSSnackbar },
    setup() {
      return { args };
    },
    template: `
      <FSSnackbar
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: true,
    text: "This is a snackbar message",
    icon: "mdi-information",
    closeButton: true,
  },
};

export const Variations: Story = {
  render: (args) => ({
    components: { FSSnackbar, FSButton, FSCol },
    setup() {
      const snackbar1 = ref(false);
      const snackbar2 = ref(false);
      const snackbar3 = ref(false);
      const snackbar4 = ref(false);

      return { args, snackbar1, snackbar2, snackbar3, snackbar4 };
    },
    template: `
      <FSCol gap="16px">
        <FSButton
          label="Success"
          color="success"
          @click="snackbar1 = true"
        />
        <FSButton
          label="Error"
          color="error"
          @click="snackbar2 = true"
        />
        <FSButton
          label="Warning"
          color="warning"
          @click="snackbar3 = true"
        />
        <FSButton
          label="Standard variant"
          color="primary"
          @click="snackbar4 = true"
        />

        <FSSnackbar
          v-model="snackbar1"
          v-bind="args"
          text="Operation completed successfully!"
          icon="mdi-check-circle"
          color="success"
        />
        <FSSnackbar
          v-model="snackbar2"
          v-bind="args"
          text="An error occurred. Please try again."
          icon="mdi-alert-circle"
          color="error"
        />
        <FSSnackbar
          v-model="snackbar3"
          v-bind="args"
          text="Warning: This action cannot be undone."
          icon="mdi-alert"
          color="warning"
        />
        <FSSnackbar
          v-model="snackbar4"
          v-bind="args"
          text="This is an informational message."
          icon="mdi-information"
          color="primary"
          variant="standard"
        />
      </FSCol>
    `,
  }),
  args: {
    closeButton: true,
    timeout: 5000,
  },
};

export const Positions: Story = {
  render: (args) => ({
    components: { FSSnackbar, FSButton, FSCol },
    setup() {
      const snackbarTop = ref(false);
      const snackbarBottom = ref(false);
      const snackbarTopRight = ref(false);
      const snackbarBottomLeft = ref(false);

      return { args, snackbarTop, snackbarBottom, snackbarTopRight, snackbarBottomLeft };
    },
    template: `
      <FSCol gap="16px">
        <FSButton label="Top" @click="snackbarTop = true" />
        <FSButton label="Bottom" @click="snackbarBottom = true" />
        <FSButton label="Top Right" @click="snackbarTopRight = true" />
        <FSButton label="Bottom Left" @click="snackbarBottomLeft = true" />

        <FSSnackbar
          v-model="snackbarTop"
          v-bind="args"
          text="Message at top"
          location="top"
        />
        <FSSnackbar
          v-model="snackbarBottom"
          v-bind="args"
          text="Message at bottom"
          location="bottom"
        />
        <FSSnackbar
          v-model="snackbarTopRight"
          v-bind="args"
          text="Message at top right"
          location="top right"
        />
        <FSSnackbar
          v-model="snackbarBottomLeft"
          v-bind="args"
          text="Message at bottom left"
          location="bottom left"
        />
      </FSCol>
    `,
  }),
  args: {
    closeButton: true,
    timeout: 3000,
  },
};

export const WithCustomActions: Story = {
  render: (args) => ({
    components: { FSSnackbar, FSButton, FSCol },
    setup() {
      const snackbar = ref(false);
      const handleUndo = () => {
        alert('Undo clicked!');
        snackbar.value = false;
      };

      return { args, snackbar, handleUndo };
    },
    template: `
      <FSCol gap="16px">
        <FSButton
          label="Show with action"
          @click="snackbar = true"
        />

        <FSSnackbar
          v-model="snackbar"
          v-bind="args"
        >
          <template #actions>
            <FSButton
              label="UNDO"
              variant="standard"
              @click="handleUndo"
            />
          </template>
        </FSSnackbar>
      </FSCol>
    `,
  }),
  args: {
    text: "Item deleted",
    icon: "mdi-delete",
    color: "error",
    timeout: 10000,
  },
};

export const MultiLine: Story = {
  render: (args) => ({
    components: { FSSnackbar, FSButton, FSCol },
    setup() {
      const snackbar = ref(false);

      return { args, snackbar };
    },
    template: `
      <FSCol gap="16px">
        <FSButton
          label="Show multi-line"
          @click="snackbar = true"
        />

        <FSSnackbar
          v-model="snackbar"
          v-bind="args"
        />
      </FSCol>
    `,
  }),
  args: {
    text: "This is a longer message that might need multiple lines to display all the information properly. This is a longer message that might need multiple lines to display all the information properly.",
    icon: "mdi-information",
    multiLine: true,
    closeButton: true,
    timeout: 7000,
  },
};
