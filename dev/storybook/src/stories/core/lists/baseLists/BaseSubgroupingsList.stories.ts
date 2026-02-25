import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseSubgroupingsList from "@dative-gpi/foundation-core-components/components/lists/subgroupings/FSBaseSubgroupingsList.vue";
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

const meta: Meta<typeof FSBaseSubgroupingsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseSubgroupingsList',
  component: FSBaseSubgroupingsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI, FSCard], FSBaseSubgroupingsList),
    ...addComponentEmits(FSBaseSubgroupingsList)
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseSubgroupingsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseSubgroupingsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'subgroupings1',
  },
};

export const Selectable: Story = {
  render: (args) => ({
    components: { FSBaseSubgroupingsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseSubgroupingsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'subgroupings1',
    selectable: true,
  },
};

export const SingleSelect: Story = {
  render: (args) => ({
    components: { FSBaseSubgroupingsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseSubgroupingsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'subgroupings1',
    selectable: true,
    singleSelect: true,
  },
};
