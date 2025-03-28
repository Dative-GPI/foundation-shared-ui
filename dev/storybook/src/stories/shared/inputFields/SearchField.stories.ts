import type { Meta, StoryObj } from '@storybook/vue3';

import FSSearchField from "@dative-gpi/foundation-shared-components/components/fields/FSSearchField.vue";
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

const meta = {
  title: 'Foundation/Shared/Input fields/SearchField',
  component: FSSearchField,
  subcomponents: { FSTextField },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTextField], FSSearchField),
    ...addComponentEmits(FSSearchField),
  },
} satisfies Meta<typeof FSSearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
    components: { FSSearchField },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSSearchField
      v-model="args.modelValue"
      v-bind="args"
    />`
  })
}