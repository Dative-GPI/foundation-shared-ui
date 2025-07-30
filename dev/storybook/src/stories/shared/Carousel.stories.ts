import type { Meta, StoryObj } from '@storybook/vue3';

import FSCarousel from "@dative-gpi/foundation-shared-components/components/carousels/FSCarousel.vue";
import FSCarouselItem from "@dative-gpi/foundation-shared-components/components/carousels/FSCarouselItem.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

const meta = {
  title: 'Foundation/Shared/Carousel',
  component: FSCarousel,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value: 0
    }
  },
  render: (args) => ({
    components: { FSCarousel, FSButton, FSCarouselItem },
    setup() {
      return { args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px; align: center;">
      <FSCarousel  direction="vertical" :interval="2000" :cycle="true" :showArrows="'hover'" >
          <FSCarouselItem>
              <FSButton> Primary color </FSButton> 
          </FSCarouselItem>

          <FSCarouselItem>
              <FSButton> Secondary color </FSButton>
          </FSCarouselItem>

          <FSCarouselItem>
              <FSButton> Tertiary color </FSButton>
          </FSCarouselItem>
      </FSCarousel>
    </div>`
  })
}