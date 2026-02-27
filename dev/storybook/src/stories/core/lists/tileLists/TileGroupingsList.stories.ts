import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTileGroupingsList from "@dative-gpi/foundation-core-components/components/lists/groupings/FSTileGroupingsList.vue";

const meta: Meta<typeof FSTileGroupingsList> = {
  title: 'Foundation/Core/Lists/Tile Lists/TileGroupingsList',
  component: FSTileGroupingsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList], FSTileGroupingsList),
    ...addComponentEmits(FSTileGroupingsList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    groupingFilters: {}
  },
  render: (args) => ({
    components: { FSTileGroupingsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileGroupingsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};
