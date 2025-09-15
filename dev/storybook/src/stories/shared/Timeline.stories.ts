import type { Meta, StoryObj } from '@storybook/vue3';

import FSTimeline from "@dative-gpi/foundation-shared-components/components/timelines/FSTimeline.vue";
import FSTimelineItem from "@dative-gpi/foundation-shared-components/components/timelines/FSTimelineItem.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

const meta = {
  title: 'Foundation/Shared/Timeline',
  component: FSTimeline,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value: 0
    }
  },
  render: (args) => ({
    components: { FSTimeline, FSButton, FSTimelineItem },
    setup() {
      return { args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px; align: center;">
      <FSTimeline direction="vertical" side="start" >
          <FSTimelineItem>
              <FSButton> Primary color </FSButton> 
          </FSTimelineItem>

          <FSTimelineItem>
              <FSButton> Secondary color </FSButton>
          </FSTimelineItem>

          <FSTimelineItem>
              <FSButton> Tertiary color </FSButton>
          </FSTimelineItem>
      </FSTimeline>
    </div>`
  })
}