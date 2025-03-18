import type { Meta, StoryObj } from '@storybook/vue3';

import FSClosableSearchField from "@dative-gpi/foundation-shared-components/components/fields/FSClosableSearchField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';

const meta = {
  title: 'Foundation/Shared/Input fields/ClosableSearchField',
  component: FSClosableSearchField,
  subcomponents: { FSTextField },
  tags: ['autodocs'],
  argTypes: {
    "onUpdate:modelValue": { action: "update:modelValue" },
    "onClose": { action: "close" }
  },
} satisfies Meta<typeof FSClosableSearchField>;

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