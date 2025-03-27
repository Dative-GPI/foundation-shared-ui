import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseChartOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/chartOrganisations/FSBaseChartOrganisationsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';

const meta: Meta<typeof FSBaseChartOrganisationsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseChartOrganisationsList',
  component: FSBaseChartOrganisationsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI, ], FSBaseChartOrganisationsList),
    ...addComponentEmits(FSBaseChartOrganisationsList),
    tableCode: {
      control: 'select',
      options: ['chartOrganisations1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseChartOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseChartOrganisationsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
  },
};
