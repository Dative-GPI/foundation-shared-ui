import type { Meta, StoryObj } from '@storybook/vue3';
import { addSubcomponentsArgTypes, addComponentEmits } from '@/utils/properties';

import FSTimeline from "@dative-gpi/foundation-shared-components/components/timelines/FSTimeline.vue";
import FSTimelineItem from "@dative-gpi/foundation-shared-components/components/timelines/FSTimelineItem.vue";
import { VTimeline } from 'vuetify/components';

const meta = {
  title: 'Foundation/Shared/Timeline',
  component: FSTimeline,
  subcomponents: { FSTimelineItem },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([VTimeline], FSTimeline),
    ...addComponentEmits(FSTimeline),
  },
} satisfies Meta<typeof FSTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSTimeline, FSTimelineItem },
    setup() {
      return { args };
    },
    template: `
      <FSTimeline 
        v-bind="args"
      >
          <FSTimelineItem>
            Hello world
          </FSTimelineItem>

          <FSTimelineItem>
            Hello world 2
          </FSTimelineItem>
      </FSTimeline>`,
  }),
  args: {
  },
};