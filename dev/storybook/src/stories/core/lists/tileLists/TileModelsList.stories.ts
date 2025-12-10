import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTileModelsList from "@dative-gpi/foundation-core-components/components/lists/models/FSTileModelsList.vue";

const meta: Meta<typeof FSTileModelsList> = {
  title: 'Foundation/Core/Lists/Tile Lists/TileModelsList',
  component: FSTileModelsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList], FSTileModelsList),
    ...addComponentEmits(FSTileModelsList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    selectable: false,
    singleSelect: false,
    modelFilters: {}
  },
  render: (args) => ({
    components: { FSTileModelsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileModelsList
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
    modelFilters: {}
  },
  render: (args) => ({
    components: { FSTileModelsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileModelsList
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
    modelFilters: {}
  },
  render: (args) => ({
    components: { FSTileModelsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileModelsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};