import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseDashboardOrganisationTypesList from "@dative-gpi/foundation-core-components/components/lists/dashboardOrganisationTypes/FSBaseDashboardOrganisationTypesList.vue";

const meta: Meta<typeof FSBaseDashboardOrganisationTypesList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDashboardOrganisationTypesList',
  component: FSBaseDashboardOrganisationTypesList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseDashboardOrganisationTypesList),
    ...addComponentEmits(FSBaseDashboardOrganisationTypesList),
    tableCode: {
      control: 'select',
      options: ['dashboardOrganisationTypes1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseDashboardOrganisationTypesList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDashboardOrganisationTypesList
        v-bind="args"
        v-model:modelValue="args.modelValue"
      />
    `,
  }),
  args: {
    tableCode: 'dashboardOrganisationTypes1'
  },
};
