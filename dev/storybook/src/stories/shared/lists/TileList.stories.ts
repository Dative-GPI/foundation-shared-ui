import type { Meta, StoryObj } from '@storybook/vue3';

import FSTileList from "@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue";
import { ref } from 'vue';
import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

const meta = {
  title: 'Foundation/Shared/Lists/TileList',
  component: FSTileList,
  tags: ['autodocs'],
} satisfies Meta<typeof FSTileList>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
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
    <div style="display: flex; flex-direction: column; gap: 10px; width: fill;">
        <FSTileList v-bind="args" v-model="selectedIds" :tileProps="getTileProps" />
    </div>`
  })
}

export const Default = BaseStory;