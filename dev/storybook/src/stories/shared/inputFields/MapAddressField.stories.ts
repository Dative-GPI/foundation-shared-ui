import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { addComponentEmits } from '@/utils/properties';

import FSMapAddressField from "@dative-gpi/foundation-shared-components/components/fields/FSMapAddressField.vue";
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';


const meta = {
  title: 'Foundation/Shared/MapAddressField',
  component: FSMapAddressField,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSMapAddressField)
  },
} satisfies Meta<typeof FSMapAddressField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MapAddressField: Story = {
  args: {
    label: "",
    icon: "mdi-map-marker",
    color: "primary",
    modelValue: null
  },
  render: (args) =>
    defineComponent({
      components: { 
        FSMapAddressField,
        FSRow
      },
      inheritAttrs: false,
      setup() {
        return { args };
      },
      template: `
        <FSRow height="500px">
          <FSMapAddressField
            v-bind="args"
            v-model="args.modelValue"
          />
        </FSRow>
      `,
    }),
};
