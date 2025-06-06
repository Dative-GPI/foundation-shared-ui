import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseChartOrganisationTypesList from "@dative-gpi/foundation-core-components/components/lists/chartOrganisationTypes/FSBaseChartOrganisationTypesList.vue";

const meta: Meta<typeof FSBaseChartOrganisationTypesList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseChartOrganisationTypesList',
  component: FSBaseChartOrganisationTypesList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseChartOrganisationTypesList),
    ...addComponentEmits(FSBaseChartOrganisationTypesList),
    tableCode: {
      control: 'select',
      options: ['chartOrganisationTypes1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseChartOrganisationTypesList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseChartOrganisationTypesList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    tableCode: 'chartOrganisationTypes1',
    modelValue: []
  },
};
