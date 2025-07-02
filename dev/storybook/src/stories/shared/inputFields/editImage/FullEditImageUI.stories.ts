import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from "@storybook/addon-actions";

import FSFullEditImageUI from "@dative-gpi/foundation-shared-components/components/fields/editImage/FSFullEditImageUI.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

const meta = {
  title: 'Foundation/Shared/Input Fields/EditImage/FullEditImageUI',
  component: FSFullEditImageUI,
  tags: ['autodocs'],
  argTypes: {
    "onUpdate:modelValue": { action: "update:modelValue" },
    "onUpdate:source": { action: "update:source" }
  }
} satisfies Meta<typeof FSFullEditImageUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    source: null,
    modelValue: null,
    height: 280,
    width: '100%',
    label: 'Edit Image',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue"),
    "onUpdate:source": action("onUpdate:source"),
  },
  render: (args, { argTypes }) => ({
    components: { FSFullEditImageUI, FSButton },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSFullEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      />`
  })
}

export const VariationFullSource: Story = {
  args: {
    source: "https://www.dative-gpi.com/assets/images/illustration-home-opt.jpg",
    modelValue: null,
    height: 280,
    width: '300px',
    label: 'Edit Image',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue"),
    "onUpdate:source": action("onUpdate:source"),
  },
  render: (args, { argTypes }) => ({
    components: { FSFullEditImageUI, FSButton },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSFullEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      />`
  })
}