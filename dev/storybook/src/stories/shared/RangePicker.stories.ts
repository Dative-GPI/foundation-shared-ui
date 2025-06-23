import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import { addComponentEmits } from '@/utils/properties';

import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import FSRangePicker from "@dative-gpi/foundation-shared-components/components/FSRangePicker.vue";

const meta = {
  title: 'Foundation/Shared/RangePicker',
  component: FSRangePicker,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSRangePicker)
  },
} satisfies Meta<typeof FSRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startDate: 'now - 3d',
    endDate: 'now',
    modelValue: [0, 0]
  },
  render: (args) => ({
    components: { FSCol, FSRangePicker },
    setup() {
      return { args };
    },
    template: `
      <FSCol
        gap="20px"
      >
        <FSRangePicker
          v-bind="args"
          v-model="args.modelValue"
          v-model:start-date="args.startDate"
          v-model:end-date="args.endDate"
          @update:startDate="args['update:startDate']"
          @update:endDate="args['update:endDate']"
          @update:modelValue="args['update:modelValue']"
        />
      </FSCol>
    `
  }),
};

export const WithRefresh: Story = {
  args: {
    startDate: 'now - 3d',
    endDate: 'now',
    modelValue: [0, 0]
  },
  render: (args) => ({
    components: { FSCol, FSRangePicker, FSButton },
    setup() {
      const pickerRef= ref<typeof FSRangePicker | null>(null);

      const refresh = () => {
        if (pickerRef.value) {
          pickerRef.value.refresh();
        }
      };

      return { args, pickerRef, refresh };
    },
    template: `
      <FSCol
        gap="20px"
      >
        <FSRangePicker
          ref="pickerRef"
          v-bind="args"
          v-model="args.modelValue"
          v-model:start-date="args.startDate"
          v-model:end-date="args.endDate"
          @update:startDate="args['update:startDate']"
          @update:endDate="args['update:endDate']"
          @update:modelValue="args['update:modelValue']"
        />
        <FSButton
          @click="refresh"
          label="Refresh"
        />
      </FSCol>
    `
  }),
};