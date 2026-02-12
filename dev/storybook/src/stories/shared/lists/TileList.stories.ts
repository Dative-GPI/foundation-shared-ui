import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";
import FSSimpleTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSSimpleTileUI.vue";
import { ref } from 'vue';
import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

const meta: Meta<typeof FSTileList> = {
  title: 'Foundation/Shared/Lists/TileList',
  component: FSTileList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSimpleTileUI], FSTileList),
    ...addComponentEmits(FSTileList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSTileList },
    setup() {
      const selectedIds = ref<string[]>([]);

      const getTileProps = (item: any) => ({
        leftColor: item.id === "1" ? ColorEnum.Error : null,
        bottomColor: item.id === "3" ? ColorEnum.Primary : null,
      });
      return { args, selectedIds, getTileProps };
    },
    template: `
      <FSTileList
        v-bind="args"
        v-model="selectedIds"
        :tileProps="getTileProps"
      />
      `,
  }),
  args: {
    items: [
      {
        id: "1",
        imageId: "1",
        label: "Test 1"
      },
      {
        id: "2",
        imageId: "2",
        label: "Test 2"
      },
      {
        id: "3",
        icon: "mdi-account",
        label: "Test 3",
        code: "Code 3"
      },
      {
        id: "4",
        label: "Test 4"
      },
    ],
    searchable: true,
    selectable: true,
  },
}

