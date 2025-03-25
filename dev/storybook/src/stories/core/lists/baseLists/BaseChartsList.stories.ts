import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseChartsList from "@dative-gpi/foundation-core-components/components/lists/charts/FSBaseChartsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseChartsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseChartsList',
  component: FSBaseChartsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
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
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    tableCode: 'charts1',
    modelValue: [],
    singleSelect: false,
    editable: true
  },
};
