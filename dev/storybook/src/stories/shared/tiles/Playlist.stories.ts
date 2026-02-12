import type { Meta, StoryObj } from '@storybook/vue3';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSPlaylistTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSPlaylistTileUI.vue';

const meta: Meta<typeof FSPlaylistTileUI> = {
  title: 'Foundation/Shared/Tiles/Playlist',
  component: FSPlaylistTileUI,
  subcomponents: { FSTile },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
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
        :label="args.label"
        :dashboardsCount="args.dashboardsCount"
        :width="args.width"
        :delay="args.delay"
        :looped="args.looped"
        :modelValue="args.modelValue"
      />
      <FSPlaylistTileUI
        :label="args.label"
        :dashboardsCount="args.dashboardsCount"
        :width="args.width"
        :delay="args.delay"
        :looped="args.looped"
        v-model="args.modelValue"
        :selectable="true"
        :singleSelect="true"
      />
      <FSPlaylistTileUI
        :label="args.label"
        :dashboardsCount="args.dashboardsCount"
        :width="args.width"
        :delay="args.delay"
        :looped="args.looped"
        v-model="args.modelValue"
        :selectable="true"
      />
    `,
  }),
  args: {
    label: 'Playlist test 3',
    dashboardsCount: 8,
    width: 418,
    modelValue: true,
    delay: 5000,
    looped: false
  },
};

