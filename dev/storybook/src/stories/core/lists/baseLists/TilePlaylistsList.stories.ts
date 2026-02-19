import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSPlaylistTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSPlaylistTileUI.vue';
import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTilePlaylistsList from "@dative-gpi/foundation-core-components/components/lists/playlists/FSTilePlaylistsList.vue";

const meta: Meta<typeof FSTilePlaylistsList> = {
  title: 'Foundation/Core/Lists/Base Lists/TilePlaylistsList',
  component: FSTilePlaylistsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList, FSPlaylistTileUI], FSTilePlaylistsList),
    ...addComponentEmits(FSTilePlaylistsList),
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
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    playlistFilters: {},
  },
};

export const Selectable: Story = {
  render: (args) => ({
    components: { FSTilePlaylistsList },
    setup() {
      return { args };
    },
    template: `
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    playlistFilters: {},
    selectable: true,
  },
};

export const SingleSelect: Story = {
  render: (args) => ({
    components: { FSTilePlaylistsList },
    setup() {
      return { args };
    },
    template: `
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    playlistFilters: {},
    selectable: true,
    singleSelect: true,
  },
};
