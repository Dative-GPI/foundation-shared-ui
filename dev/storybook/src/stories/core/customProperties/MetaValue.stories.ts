import type { Meta, StoryObj } from '@storybook/vue3';

import { FilterType, PropertyDataType } from '@dative-gpi/foundation-shared-domain/enums';

import FSMetaValue from "@dative-gpi/foundation-core-components/components/customProperties/FSMetaValue.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Core/CustomProperties/MetaValue',
  component: FSMetaValue,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof FSMetaValue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customProperty: {
      id: "1",
      code: "selector",
      label: "Selector",
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
      allowedValues: { ["1"]: "value1", ["2"]: "value 2", ["3"]: "value 3"}
    },
    meta: {
      selector: "1"
    }
  },
  render: (args) => ({
    components: { FSMetaValue },
    setup() {
      return { ...args };
    },
    template: `
    <FSMetaValue
      v-bind="args"
    />
    `
  })
}
