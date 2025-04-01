import type { Meta, StoryObj } from '@storybook/vue3';

import FSTimeStepField from "@dative-gpi/foundation-shared-components/components/fields/FSTimeStepField.vue";

import { addComponentEmits } from '@/utils/properties';

const meta = {
  title: 'Foundation/Shared/Input fields/TimeStepField',
  component: FSTimeStepField,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSTimeStepField),
    rules: {
      control: {
        type: 'select'
      } 
    }
  }
} satisfies Meta<typeof FSTimeStepField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args : {
    modelValue: { unit: 4, value: 1 }
  },
  render: (args) => ({
    components: { FSTimeStepField },
    setup() {
      return { args };
    },
    template: `
    <FSTimeStepField
      v-model="args.modelValue"
      v-bind="args"
    />`
  })
}