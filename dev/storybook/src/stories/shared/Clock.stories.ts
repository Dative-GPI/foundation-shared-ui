import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSSlider from "@dative-gpi/foundation-shared-components/components/FSSlider.vue";
import FSClock from "@dative-gpi/foundation-shared-components/components/FSClock.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Clock',
  component: FSClock,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSlider], FSClock),
    ...addComponentEmits(FSClock)
  },
} satisfies Meta<typeof FSClock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 3600000,
    slider: true
  },
  render: (args) => ({
    components: { FSClock },
    setup() {
      return { args };
    },
    template: `
      <FSClock
        v-bind="args"
        v-model="args.modelValue"
      />
    `
  }),
};

export const WithoutSlider: Story = {
  args: {
    modelValue: 5400000,
    slider: false
  },
  render: (args) => ({
    components: { FSClock },
    setup() {
      return { args };
    },
    template: `
      <FSClock
        v-bind="args"
        v-model="args.modelValue"
      />
    `
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: 7200000,
    slider: true,
    disabled: true
  },
  render: (args) => ({
    components: { FSClock },
    setup() {
      return { args };
    },
    template: `
      <FSClock
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
    components: { FSClock, FSCol },
    setup() {
      const value1 = ref(0);
      const value2 = ref(3600000);
      const value3 = ref(45900000);
      const value4 = ref(7200000);
      return { args, value1, value2, value3, value4 };
    },
    template: `
      <FSCol gap="20px">
        <FSClock
          v-model="value1"
          :slider="true"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSClock
          v-model="value2"
          :slider="true"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSClock
          v-model="value3"
          :slider="false"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSClock
          v-model="value4"
          :disabled="true"
          :slider="true"
        />
      </FSCol>
    `
  }),
};
