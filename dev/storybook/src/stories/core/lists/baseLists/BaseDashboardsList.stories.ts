import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSBaseDashboardsList from "@dative-gpi/foundation-core-components/components/lists/dashboards/FSBaseDashboardsList.vue";
import FSBaseDashboardsExplorer from "@dative-gpi/foundation-core-components/components/explorers/FSBaseDashboardsExplorer.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';

const meta: Meta<typeof FSBaseDashboardsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDashboardsList',
  component: FSBaseDashboardsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSBaseDashboardsExplorer, FSDataTable, FSDataTableUI], FSBaseDashboardsList),
    ...addComponentEmits(FSBaseDashboardsList),
    tableCode: {
      control: "select",
      options: ["dashboardsExplorer1"],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseDashboardsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDashboardsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'dashboardsExplorer1'
  },
};
