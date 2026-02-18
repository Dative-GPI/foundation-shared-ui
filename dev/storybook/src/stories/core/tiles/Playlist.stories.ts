import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSPlaylistTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSPlaylistTileUI.vue';
import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSPlaylistTile from '@dative-gpi/foundation-core-components/components/tiles/FSPlaylistTile.vue';

const meta: Meta<typeof FSPlaylistTile> = {
  title: 'Foundation/Core/Tiles/Playlist',
  component: FSPlaylistTile,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSPlaylistTileUI, FSTile], FSPlaylistTile),
    ...addComponentEmits(FSPlaylistTile),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSPlaylistTile },
    setup() {
      return { args };
    },
    template: `
      <FSPlaylistTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: false,
    playlistId: 'playlist1',
  },
};

export const Selectable: Story = {
  render: (args) => ({
    components: { FSPlaylistTile },
    setup() {
      return { args };
    },
    template: `
      <FSPlaylistTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: false,
    playlistId: 'playlist2',
    selectable: true,
  },
};

export const SingleSelect: Story = {
  render: (args) => ({
    components: { FSPlaylistTile },
    setup() {
      return { args };
    },
    template: `
      <FSPlaylistTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: true,
    playlistId: 'playlist1',
    selectable: true,
    singleSelect: true,
  },
};
