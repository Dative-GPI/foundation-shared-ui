import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTileGroupsList from "@dative-gpi/foundation-core-components/components/lists/groups/FSTileGroupsList.vue";

const meta: Meta<typeof FSTileGroupsList> = {
  title: 'Foundation/Core/Lists/Tile Lists/TileGroupsList',
  component: FSTileGroupsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList], FSTileGroupsList),
    ...addComponentEmits(FSTileGroupsList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    selectable: false,
    singleSelect: false,
    groupFilters: {}
  },
  render: (args) => ({
    components: { FSTileGroupsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileGroupsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};

export const Selectable: Story = {
  args: {
    modelValue: [],
    selectable: true,
    singleSelect: false,
    groupFilters: {}
  },
  render: (args) => ({
    components: { FSTileGroupsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileGroupsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};

export const SingleSelect: Story = {
  args: {
    modelValue: [],
    selectable: true,
    singleSelect: true,
    groupFilters: {}
  },
  render: (args) => ({
    components: { FSTileGroupsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileGroupsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};