import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';
import FSSearchField from '@dative-gpi/foundation-shared-components/components/fields/FSSearchField.vue';
import FSClosableSearchField from "@dative-gpi/foundation-shared-components/components/fields/FSClosableSearchField.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/ClosableSearchField',
  component: FSClosableSearchField,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTextField, FSSearchField], FSClosableSearchField),
    ...addComponentEmits(FSClosableSearchField),
  },
} satisfies Meta<typeof FSClosableSearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
    components: { FSClosableSearchField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSClosableSearchField
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`
  })
}