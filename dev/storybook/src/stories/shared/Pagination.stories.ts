import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits } from '@/utils/properties';

import FSPagination from "@dative-gpi/foundation-shared-components/components/FSPagination.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

const meta = {
  title: 'Foundation/Shared/Pagination',
  component: FSPagination,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSPagination),
  }
} satisfies Meta<typeof FSPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    modelValue: 4,
    pages: 10,
    width: "100%"
  },
  render: (args) => ({
    components: { FSPagination, FSButton, FSText },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            v-model="args.modelValue"
            v-bind="args"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :disabled="args.modelValue === 0"
              @click="args.modelValue--"
            />
            <FSButton
              label="Next"
              :disabled="args.modelValue >= args.pages - 1"
              @click="args.modelValue++"
            />
          </div>
        </div>
      </div>
    `,
  })
};