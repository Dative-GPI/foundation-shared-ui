import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseConnectivityScenariosList from "@dative-gpi/foundation-core-components/components/lists/connectivityScenarios/FSBaseConnectivityScenariosList.vue";

const meta: Meta<typeof FSBaseConnectivityScenariosList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseConnectivityScenariosList',
  component: FSBaseConnectivityScenariosList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseConnectivityScenariosList),
    ...addComponentEmits(FSBaseConnectivityScenariosList),
    tableCode: {
      control: 'select',
      options: ['connectivityScenarios1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseConnectivityScenariosList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseConnectivityScenariosList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    tableCode: 'connectivityScenarios1',
    modelValue: [],
    "onClick:row": null
  },
};
