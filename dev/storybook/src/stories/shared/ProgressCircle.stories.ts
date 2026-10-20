import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

import FSProgressCircle from "@dative-gpi/foundation-shared-components/components/FSProgressCircle.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
  title: 'Shared/Components/ProgressCircle',
  component: FSProgressCircle,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSRow], FSProgressCircle),
    ...addComponentEmits(FSProgressCircle),
    valueFormat: {
      control: 'radio',
      options: ['percentage', 'raw']
    }
  },
} satisfies Meta<typeof FSProgressCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

const render: Story["render"] = (args) => ({
  components: { FSProgressCircle },
  setup() {
    return { args };
  },
  template: `
    <FSProgressCircle
      v-bind="args"
    />
  `
});

export const Default: Story = {
  render,
  args: {
    modelValue: 0.70,
    showValue: true,
  },
};

export const SmallClickable: Story = {
  render: (args) => ({
    components: { FSProgressCircle },
    setup() {
      return { args};
    },
    template: `
      <FSProgressCircle
        style="cursor: pointer;"
        v-bind="args"
        @click="() => {console.log('ProgressCircle clicked'); }"
      />
    `
  }),
  args: {
    modelValue: 0.32,
    size: "20px",
    thickness: "2px",
    showValue: false,
    startColor: ColorEnum.Primary,
    endColor: ColorEnum.Primary
  },
};

export const Interval: Story = {
  render,
  args: {
    modelValue: -0.6,
    min: -1,
    max: 1,
    size: "120px",
    valueFormat: 'raw',
    showValue: true,
    labels: [{ value: -0.5 }, { value: 0 }, { value: 0.5 }],
  },
};

export const IntervalCursor: Story = {
  render,
  args: {
    modelValue: 5,
    min: -10,
    max: 10,
    size: "120px",
    cursor: true,
    showValue: true,
    labels: [{ value: -5 }, { value: 0 }, { value: 5 }],
  },
};
