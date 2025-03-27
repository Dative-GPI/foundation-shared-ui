import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits } from '@/utils/properties';

import { PropertyDataType } from '@dative-gpi/foundation-shared-domain/enums';

import FSMetaField from "@dative-gpi/foundation-core-components/components/customProperties/FSMetaField.vue";
import { CustomPropertyInfos } from '@dative-gpi/foundation-core-domain/models';

const meta: Meta<typeof FSMetaField> = {
  title: 'Foundation/Core/CustomProperties/MeatField',
  component: FSMetaField,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSMetaField),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSMetaField },
    setup() {
      return { args };
    },
    template: `
    <FSMetaField
      v-model="args.modelValue"
      v-model:type="args.type"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: "value",
    customProperty: new CustomPropertyInfos({
      id: "1",
      code: "string",
      label: "String",
      categoryLabel: "Category",
      index: 0,
      entity: 1,
      dataType: PropertyDataType.String,
      readOnlyCore: false,
      readOnlyAdmin: false,
      defaultValue: "",
      history: false,
      historySize: 0,
      colorful: false,
      colorMap: [],
      useOnlyAllowedValues: false,
      allowedValues: {}
    }),
    label: "Label",
  },
};

export const Boolean: Story = {
  render: (args) => ({
    components: { FSMetaField },
    setup() {
      return { args };
    },
    template: `
    <FSMetaField
      v-model="args.modelValue"
      v-model:type="args.type"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: "true",
    customProperty: {
      id: "3",
      label: "Boolean",
      code: "boolean",
      categoryLabel: "Category",
      index: 0,
      entity: 1,
      dataType: PropertyDataType.Boolean,
      readOnlyCore: false,
      readOnlyAdmin: false,
      defaultValue: "",
      history: false,
      historySize: 0,
      colorful: false,
      colorMap: [],
      useOnlyAllowedValues: false,
      allowedValues: {}
    },
    label: "Label",
  },
};


export const AllowedValues: Story = {
  render: (args) => ({
    components: { FSMetaField },
    setup() {
      return { args };
    },
    template: `
    <FSMetaField
      v-model="args.modelValue"
      v-model:type="args.type"
      v-bind="args"
    />`
  }),
  args: {
    modelValue: "third.choice",
    customProperty: {
      id: "1",
      code: "string",
      label: "String",
      categoryLabel: "Category",
      index: 0,
      entity: 1,
      dataType: PropertyDataType.String,
      readOnlyCore: false,
      readOnlyAdmin: false,
      defaultValue: "",
      history: false,
      historySize: 0,
      colorful: false,
      colorMap: [],
      useOnlyAllowedValues: true,
      allowedValues: { "Alpha": "", "Beta" : "", "third.choice": "Charly (tr)" }
    },
    label: "Label",
  },
};
