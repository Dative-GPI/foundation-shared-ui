import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseDataCategoriesList from "@dative-gpi/foundation-core-components/components/lists/dataCategories/FSBaseDataCategoriesList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';

const meta: Meta<typeof FSBaseDataCategoriesList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDataCategoriesList',
  component: FSBaseDataCategoriesList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseDataCategoriesList),
    ...addComponentEmits(FSBaseDataCategoriesList),
    tableCode: {
      control: 'select',
      options: ['dataCategories1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseDataCategoriesList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDataCategoriesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    tableCode: 'dataCategories1',
  },
};
