import type { Meta, StoryObj } from '@storybook/vue3';

import FSSearchCloseField from "@dative-gpi/foundation-shared-components/components/fields/FSSearchCloseField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';

const meta = {
  title: 'Foundation/Shared/Input fields/SearchCloseField',
  component: FSSearchCloseField,
  subcomponents: { FSTextField },
  tags: ['autodocs'],
  argTypes: {
    "onUpdate:modelValue": { action: "update:modelValue" },
    "onClose": { action: "close" }
  },
} satisfies Meta<typeof FSSearchCloseField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    modelValue: '',
    appendInnerIcon: 'mdi-close',
    unfocusOnClose: true,
    clearOnClose: true,
    closable: true,

    placeholder: 'Type here...',
    label: 'Search',
    hideHeader: false,
    editable: true,
  },
  render: (args, { argTypes }) => ({
    components: { FSSearchCloseField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSSearchCloseField
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`
  })
}