import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSBasePlaylistsList from "@dative-gpi/foundation-core-components/components/lists/playlists/FSBasePlaylistsList.vue";
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBasePlaylistsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BasePlaylistsList',
  component: FSBasePlaylistsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBasePlaylistsList),
    ...addComponentEmits(FSBasePlaylistsList),
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBasePlaylistsList },
    setup() {
      return { args };
    },
    template: `
      <FSBasePlaylistsList
        v-model="args.playlistValue"
      />
    `,
  }),
  args: {
    playlistValue: ["playlist1"],
  },
};
