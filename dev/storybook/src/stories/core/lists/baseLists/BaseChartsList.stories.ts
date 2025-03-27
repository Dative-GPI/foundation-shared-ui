import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseChartsList from "@dative-gpi/foundation-core-components/components/lists/charts/FSBaseChartsList.vue";

const meta: Meta<typeof FSBaseChartsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseChartsList',
  component: FSBaseChartsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseChartsList),
    ...addComponentEmits(FSBaseChartsList),
    tableCode: {
      control: 'select',
      options: ['charts1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseChartsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseChartsList
        :onClick:row="null"
        v-model:modelValue="args.modelValue"
        v-model:scope="args.scope"
        v-bind="args"
      />
    `,
  }),
  args: {
    tableCode: 'charts1',
    modelValue: []
  },
};
