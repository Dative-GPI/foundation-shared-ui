import type { Meta, StoryObj } from '@storybook/vue3';

import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSModelTileUI from '@dative-gpi/foundation-shared-components/components/tiles/FSModelTileUI.vue';
import FSModelTile from '@dative-gpi/foundation-core-components/components/tiles/FSModelTile.vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

const meta: Meta<typeof FSModelTile> = {
  title: 'Foundation/Core/Tiles/Model',
  component: FSModelTile,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSModelTileUI, FSTile], FSModelTile),
    ...addComponentEmits(FSModelTile),
    modelId: {
      control: 'select',
      options: ['1', '2'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSModelTile },
    setup() {
      return { args };
    },
    template: `
      <FSModelTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelId: '1',
  },
};
