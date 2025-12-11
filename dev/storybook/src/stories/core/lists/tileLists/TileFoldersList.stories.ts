import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTileFoldersList from "@dative-gpi/foundation-core-components/components/lists/folders/FSTileFoldersList.vue";

const meta: Meta<typeof FSTileFoldersList> = {
  title: 'Foundation/Core/Lists/Tile Lists/TileFoldersList',
  component: FSTileFoldersList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList], FSTileFoldersList),
    ...addComponentEmits(FSTileFoldersList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSTileFoldersList },
    setup() {
      return { args };
    },
    template: `
      <FSTileFoldersList
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    folderFilters: {}
  },
};
