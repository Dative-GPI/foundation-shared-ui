import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import FSSnackbar from "@dative-gpi/foundation-shared-components/components/FSSnackbar.vue";
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

const meta = {
  title: 'Foundation/Shared/Snackbar',
  component: FSSnackbar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(ColorEnum)
    },
    location: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']
    },
    variant: {
      control: 'select',
      options: ['standard', 'full']
    }
  }
} satisfies Meta<typeof FSSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: (args) => ({
    components: { FSSnackbar, FSButton, FSCol },
    setup() {
      const snackbar1 = ref(false);
      const snackbar2 = ref(false);
      const snackbar3 = ref(false);
      const snackbar4 = ref(false);

      return {
        args,
        snackbar1,
        snackbar2,
        snackbar3,
        snackbar4
      };
    },
    template: `
      <FSCol gap="16px">
        <FSButton 
          label="Success Message" 
          color="success"
          @click="snackbar1 = true"
        />
        <FSButton 
          label="Error Message" 
          color="error"
          @click="snackbar2 = true"
        />
        <FSButton 
          label="Warning Message" 
          color="warning"
          @click="snackbar3 = true"
        />
        <FSButton 
          label="Info Message (Standard)" 
          color="primary"
          @click="snackbar4 = true"
        />
        
        <FSSnackbar
          v-model="snackbar1"
          text="Operation completed successfully!"
          icon="mdi-check-circle"
          color="success"
          :timeout="5000"
          :closeButton="true"
        />
        
        <FSSnackbar
          v-model="snackbar2"
          text="An error occurred. Please try again."
          icon="mdi-alert-circle"
          color="error"
          :timeout="5000"
          :closeButton="true"
        />
        
        <FSSnackbar
          v-model="snackbar3"
          text="Warning: This action cannot be undone."
          icon="mdi-alert"
          color="warning"
          :timeout="5000"
          :closeButton="true"
        />
        
        <FSSnackbar
          v-model="snackbar4"
          text="This is an informational message."
          icon="mdi-information"
          color="primary"
          variant="standard"
          :timeout="5000"
          :closeButton="true"
        />
      </FSCol>
    `
  }),
  args: {}
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

      return {
        args,
        snackbar,
        handleUndo
      };
    },
    template: `
      <FSCol gap="16px">
        <FSButton 
          label="Show with Action" 
          @click="snackbar = true"
        />
        
        <FSSnackbar
          v-model="snackbar"
          text="Item deleted"
          icon="mdi-delete"
          color="error"
          :timeout="10000"
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
    `
  }),
  args: {}
};

export const Positions: Story = {
  render: (args) => ({
    components: { FSSnackbar, FSButton, FSCol },
    setup() {
      const snackbarTop = ref(false);
      const snackbarBottom = ref(false);
      const snackbarTopRight = ref(false);
      const snackbarBottomLeft = ref(false);

      return {
        args,
        snackbarTop,
        snackbarBottom,
        snackbarTopRight,
        snackbarBottomLeft
      };
    },
    template: `
      <FSCol gap="16px">
        <FSButton 
          label="Show Top" 
          @click="snackbarTop = true"
        />
        <FSButton 
          label="Show Bottom" 
          @click="snackbarBottom = true"
        />
        <FSButton 
          label="Show Top Right" 
          @click="snackbarTopRight = true"
        />
        <FSButton 
          label="Show Bottom Left" 
          @click="snackbarBottomLeft = true"
        />
        
        <FSSnackbar
          v-model="snackbarTop"
          text="Message at top"
          location="top"
          :timeout="3000"
          :closeButton="true"
        />
        
        <FSSnackbar
          v-model="snackbarBottom"
          text="Message at bottom"
          location="bottom"
          :timeout="3000"
          :closeButton="true"
        />
        
        <FSSnackbar
          v-model="snackbarTopRight"
          text="Message at top right"
          location="top right"
          :timeout="3000"
          :closeButton="true"
        />
        
        <FSSnackbar
          v-model="snackbarBottomLeft"
          text="Message at bottom left"
          location="bottom left"
          :timeout="3000"
          :closeButton="true"
        />
      </FSCol>
    `
  }),
  args: {}
};

export const MultiLine: Story = {
  render: (args) => ({
    components: { FSSnackbar, FSButton, FSCol },
    setup() {
      const snackbar = ref(false);

      return {
        args,
        snackbar
      };
    },
    template: `
      <FSCol gap="16px">
        <FSButton 
          label="Show Multi-line" 
          @click="snackbar = true"
        />
        
        <FSSnackbar
          v-model="snackbar"
          text="This is a longer message that might need multiple lines to display all the information properly. This is a longer message that might need multiple lines to display all the information properly.  This is a longer message that might need multiple lines to display all the information properly. This is a longer message that might need multiple lines to display all the information properly. This is a longer message that might need multiple lines to display all the information properly. This is a longer message that might need multiple lines to display all the information properly."
          icon="mdi-information"
          :multiLine="true"
          :timeout="7000"
          :closeButton="true"
        />
      </FSCol>
    `
  }),
  args: {}
};
