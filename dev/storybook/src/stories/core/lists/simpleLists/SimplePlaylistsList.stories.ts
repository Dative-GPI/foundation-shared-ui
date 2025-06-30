import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import FSSimplePlaylistsList from "@dative-gpi/foundation-core-components/components/lists/playlists/FSSimplePlaylistsList.vue";
import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

const meta: Meta<typeof FSSimplePlaylistsList> = {
  title: "Foundation/Core/Lists/Simple Lists/SimplePLaylistsList",
  component: FSSimplePlaylistsList,
  tags: ["autodocs"],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSimpleList], FSSimplePlaylistsList),
    ...addComponentEmits(FSSimplePlaylistsList)
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSSimplePlaylistsList },
    setup() {
      return { args };
    },
    template: `
      <FSSimplePlaylistsList
        v-bind="args"
      />
    `,
  }),
  args: {
    tileProps: (item: any) => ({
      onClick: () => action("clicked item")(item),
    }),
  },
};
