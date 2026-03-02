import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSBaseGroupingsList from "@dative-gpi/foundation-core-components/components/lists/groupings/FSBaseGroupingsList.vue";

const meta: Meta<typeof FSBaseGroupingsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseGroupingsList',
  component: FSBaseGroupingsList,
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
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    groupingFilters: {}
  },
};

export const Selectable: Story = {
  render: (args) => ({
    components: { FSBaseGroupingsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseGroupingsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    groupingFilters: {},
    selectable: true,
  },
};

export const SingleSelect: Story = {
  render: (args) => ({
    components: { FSBaseGroupingsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseGroupingsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    groupingFilters: {},
    selectable: true,
    singleSelect: true,
  },
};
