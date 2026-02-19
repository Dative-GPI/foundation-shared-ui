import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSPlaylistTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSPlaylistTileUI.vue';

const meta: Meta<typeof FSPlaylistTileUI> = {
  title: 'Foundation/Shared/Tiles/Playlist',
  component: FSPlaylistTileUI,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTile], FSPlaylistTileUI),
    ...addComponentEmits(FSPlaylistTileUI),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSPlaylistTileUI },
    setup() {
      return { args };
    },
    template: `
      <FSPlaylistTileUI
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: false,
    label: 'Playlist test',
    dashboardsCount: 8,
    delay: 5000,
    looped: false,
  },
};

export const Selectable: Story = {
  render: (args) => ({
    components: { FSPlaylistTileUI },
    setup() {
      return { args };
    },
    template: `
      <FSPlaylistTileUI
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: false,
    label: 'Playlist selectable',
    dashboardsCount: 5,
    delay: 3000,
    looped: true,
    selectable: true,
  },
};

export const SingleSelect: Story = {
  render: (args) => ({
    components: { FSPlaylistTileUI },
    setup() {
      return { args };
    },
    template: `
      <FSPlaylistTileUI
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: true,
    label: 'Playlist single select',
    dashboardsCount: 3,
    delay: 10000,
    looped: true,
    selectable: true,
    singleSelect: true,
  },
};

