import type { Meta, StoryObj } from '@storybook/vue3';

import FSPeriodicField from "@dative-gpi/foundation-shared-components/components/fields/periodicField/FSPeriodicField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSDivider from '@dative-gpi/foundation-shared-components/components/FSDivider.vue';
import { addComponentEmits } from '@/utils/properties';

const meta = {
  title: 'Foundation/Shared/Input fields/PeriodicField',
  component: FSPeriodicField,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSPeriodicField),
  },
} satisfies Meta<typeof FSPeriodicField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    modelValue: "0 7 * * 1"
  },
  render: (args, { argTypes }) => ({
    components: { FSPeriodicField, FSCol, FSDivider },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSPeriodicField
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`
  })
}