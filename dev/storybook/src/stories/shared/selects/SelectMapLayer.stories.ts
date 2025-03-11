import type { Meta, StoryObj } from '@storybook/vue3';

import FSSelectedMapLayer from "@dative-gpi/foundation-shared-components/components/selects/FSSelectMapLayer.vue";
import { MapLayers } from '@dative-gpi/foundation-shared-components/models';

const meta = {
  title: 'Foundation/Shared/Selects/SelectMapLayer',
  component: FSSelectedMapLayer,
  tags: ['autodocs'],
} satisfies Meta<typeof FSSelectedMapLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    modelValue: MapLayers.Map,
    multiple: false,
  },
  render: (args) => ({
    components: { FSSelectedMapLayer },
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSSelectedMapLayer
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`
  })
}