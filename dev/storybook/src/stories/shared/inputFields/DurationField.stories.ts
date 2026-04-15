import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDurationField from "@dative-gpi/foundation-shared-components/components/fields/FSDurationField.vue";
import FSNumberField from "@dative-gpi/foundation-shared-components/components/fields/FSNumberField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/DurationField',
  component: FSDurationField,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSNumberField], FSDurationField),
    ...addComponentEmits(FSDurationField)
  },
} satisfies Meta<typeof FSDurationField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 5400000
  },
  render: (args) => ({
    components: { FSDurationField },
    setup() {
      return { args };
    },
    template: `
      <FSDurationField
        v-bind="args"
        v-model="args.modelValue"
      />
    `
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: 9000000,
    disabled: true
  },
  render: (args) => ({
    components: { FSDurationField },
    setup() {
      return { args };
    },
    template: `
      <FSDurationField
        v-bind="args"
        v-model="args.modelValue"
      />
    `
  }),
};

export const WithConstraints: Story = {
  args: {
    modelValue: 7200000,
    minDuration: 3600000,
    maxDuration: 28800000,
    label: "Duration (between 1h and 8h)"
  },
  render: (args) => ({
    components: { FSDurationField },
    setup() {
      return { args };
    },
    template: `
      <FSDurationField
        v-bind="args"
        v-model="args.modelValue"
      />
    `
  }),
};

export const Variations: Story = {
  args: {
    modelValue: 0
  },
  render: (args) => ({
    components: { FSDurationField, FSCol },
    setup() {
      const value1 = ref(0);
      const value2 = ref(5400000);
      const value3 = ref(9000000);
      const value4 = ref(28800000);
      return { args, value1, value2, value3, value4 };
    },
    template: `
      <FSCol gap="20px">
        <FSDurationField
          v-model="value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDurationField
          :required="true"
          v-model="value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDurationField
          :disabled="true"
          v-model="value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDurationField
          :minDuration="3600000"
          :maxDuration="36000000"
          v-model="value4"
        />
      </FSCol>
    `
  }),
};
