import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseDataDefinitionsList from "@dative-gpi/foundation-core-components/components/lists/dataDefinitions/FSBaseDataDefinitionsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';

const meta: Meta<typeof FSBaseDataDefinitionsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDataDefinitionsList',
  component: FSBaseDataDefinitionsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseDataDefinitionsList),
    ...addComponentEmits(FSBaseDataDefinitionsList),
    tableCode: {
      control: 'select',
      options: ['dataDefinitions1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseDataDefinitionsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDataDefinitionsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    tableCode: 'dataDefinitions1',
  },
};
