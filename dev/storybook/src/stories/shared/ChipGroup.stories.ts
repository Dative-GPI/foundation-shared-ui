import type { Meta, StoryObj } from '@storybook/vue3';

import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSChipGroup from "@dative-gpi/foundation-shared-components/components/FSChipGroup.vue";

const meta = {
  title: 'Foundation/Shared/ChipGroup',
  component: FSChipGroup,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { FSChipGroup, FSText, FSSpan, FSIcon },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
     <FSChipGroup
      :labels="['Primary', 'Success', 'Warning', 'Error', 'Light', 'Dark']"
      variant="slide"
     />
    </div>`
  })
}