import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { addComponentEmits } from '@/utils/properties';

import FSMapEditLocationAddress from "@dative-gpi/foundation-shared-components/components/map/FSMapEditLocationAddress.vue";
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';


const meta = {
  title: 'Foundation/Shared/MapEditLocationAddress',
  component: FSMapEditLocationAddress,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSMapEditLocationAddress)
  },
} satisfies Meta<typeof FSMapEditLocationAddress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MapEditLocationAddress: Story = {
  args: {
    label: "",
    icon: "mdi-map-marker",
    color: "primary",
    modelValue: null
  },
  render: (args) =>
    defineComponent({
      components: { 
        FSMapEditLocationAddress,
        FSRow
      },
      inheritAttrs: false,
      setup() {
        return { args };
      },
      template: `
        <FSRow height="500px">
          <FSMapEditLocationAddress
            v-bind="args"
            v-model="args.modelValue"
          />
        </FSRow>
      `,
    }),
};
