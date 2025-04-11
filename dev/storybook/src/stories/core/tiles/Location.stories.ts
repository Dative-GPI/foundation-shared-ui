import type { Meta, StoryObj } from '@storybook/vue3';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSLocationTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSLocationTileUI.vue';
import FSLocationTile from '@dative-gpi/foundation-core-components/components/tiles/FSLocationTile.vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

const meta: Meta<typeof FSLocationTile> = {
  title: 'Foundation/Core/Tiles/Location',
  component: FSLocationTile,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSLocationTileUI, FSTile], FSLocationTile),
    ...addComponentEmits(FSLocationTile),
    locationId: {
      control: 'select',
      options: ['1', '2', '3'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSLocationTile },
    setup() {
      return { args };
    },
    template: `
      <FSLocationTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    locationId: '1',
  },
};
