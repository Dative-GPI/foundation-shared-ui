import type { Meta, StoryObj } from '@storybook/vue3';

import { EntityType, FilterType, PropertyDataType } from '@dative-gpi/foundation-shared-domain/enums';
import FSMetaHistory from "@dative-gpi/foundation-core-components/components/customProperties/FSMetaHistory.vue";

const meta = {
  title: 'Foundation/Core/CustomProperties/MetaHistory',
  component: FSMetaHistory,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof FSMetaHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customProperty: {
      id: "1",
      code: "code",
      label: "Number",
      categoryLabel: "Category",
      index: 0,
      entity: 1,
      dataType: PropertyDataType.Number,
      readOnlyCore: false,
      readOnlyAdmin: false,
      defaultValue: "",
      history: false,
      historySize: 0,
      colorful: true,
      colorMap: [{
        priority: 1,
        filterType: FilterType.MoreOrEqual,
        filterValues: ["5"],
        color: "#0000FF"
      }, {
        priority: 2,
        filterType: FilterType.MoreOrEqual,
        filterValues: ["50"],
        color: "#FF0000"
      }],
      useOnlyAllowedValues: false,
      allowedValues: {}
    },
    entityId: "1",
    entityType: EntityType.Model
  },
  render: (args) => ({
    components: { FSMetaHistory },
    setup() {
      return { args };
    },
    template: `
      <FSMetaHistory
        v-bind="args"
      />
    `
  })
};