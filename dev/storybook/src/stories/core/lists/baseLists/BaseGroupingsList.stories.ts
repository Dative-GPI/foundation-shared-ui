import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseGroupingsList from "@dative-gpi/foundation-core-components/components/lists/groupings/FSBaseGroupingsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

const meta: Meta<typeof FSBaseGroupingsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseGroupingsList',
  component: FSBaseGroupingsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable], FSBaseGroupingsList),
    ...addComponentEmits(FSBaseGroupingsList)
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseGroupingsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseGroupingsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'groupings1',
    itemTo: (item: any) => ({ name: 'Home' })
  },
};
