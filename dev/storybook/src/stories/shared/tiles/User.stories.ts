import type { Meta, StoryObj } from '@storybook/vue3';

import FSUserTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSUserTileUI.vue";
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import FSTile from '@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';

const meta = {
  title: 'Foundation/Shared/Tiles/User',
  component: FSUserTileUI,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTile, FSCard], FSUserTileUI),
    ...addComponentEmits(FSUserTileUI)
  },
} satisfies Meta<typeof FSUserTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  },
  render: (args) => ({
  components: { FSUserTileUI },
  setup() {
    return { args };
  },
  template: `
    <FSUserTileUI
      v-model="args.modelValue"
    />`
  })
}
