import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTileSubgroupingsList from "@dative-gpi/foundation-core-components/components/lists/subgroupings/FSTileSubgroupingsList.vue";

const meta: Meta<typeof FSTileSubgroupingsList> = {
  title: 'Foundation/Core/Lists/Tile Lists/TileSubgroupingsList',
  component: FSTileSubgroupingsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList], FSTileSubgroupingsList),
    ...addComponentEmits(FSTileSubgroupingsList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    subgroupingFilters: {}
  },
  render: (args) => ({
    components: { FSTileSubgroupingsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileSubgroupingsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};
