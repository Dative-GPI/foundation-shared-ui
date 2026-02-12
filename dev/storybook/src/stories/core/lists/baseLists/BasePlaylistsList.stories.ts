import type { Meta, StoryObj } from '@storybook/vue3';

import FSTilePlaylistsList from "@dative-gpi/foundation-core-components/components/lists/playlists/FSTilePlaylistsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSTilePlaylistsList> = {
  title: 'Foundation/Core/Lists/Base Lists/TilePlaylistsList',
  component: FSTilePlaylistsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSTilePlaylistsList },
    setup() {
      return { args };
    },
    template: `
      <FSTilePlaylistsList
        :searchable="true"
        :selectable="true"
        :singleSelect="true"
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'playlists1'
  },
};
