import type { Meta, StoryObj } from "@storybook/vue3";

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from "@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue";
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseDashboardsExplorer from "@dative-gpi/foundation-core-components/components/explorers/FSBaseDashboardsExplorer.vue";
import { DashboardExplorerElementType } from "@dative-gpi/foundation-shared-domain/enums";

const meta: Meta<typeof FSBaseDashboardsExplorer> = {
  title: "Foundation/Core/Explorers/BaseDashboardsExplorer",
  component: FSBaseDashboardsExplorer,
  tags: ["autodocs"],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseDashboardsExplorer),
    ...addComponentEmits(FSBaseDashboardsExplorer),
    tableCode: {
      control: "select",
      options: ["dashboardsExplorer1"],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    tableCode: "dashboardsExplorer1"
  },
  render: (args) => ({
    components: { FSBaseDashboardsExplorer },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDashboardsExplorer
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
};