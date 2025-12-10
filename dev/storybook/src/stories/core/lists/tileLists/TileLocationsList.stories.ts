import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTileLocationsList from "@dative-gpi/foundation-core-components/components/lists/locations/FSTileLocationsList.vue";

const meta: Meta<typeof FSTileLocationsList> = {
  title: 'Foundation/Core/Lists/Tile Lists/TileLocationsList',
  component: FSTileLocationsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList], FSTileLocationsList),
    ...addComponentEmits(FSTileLocationsList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    selectable: false,
    singleSelect: false,
    locationFilters: {}
  },
  render: (args) => ({
    components: { FSTileLocationsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileLocationsList
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
    locationFilters: {}
  },
  render: (args) => ({
    components: { FSTileLocationsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileLocationsList
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
    locationFilters: {}
  },
  render: (args) => ({
    components: { FSTileLocationsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileLocationsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};