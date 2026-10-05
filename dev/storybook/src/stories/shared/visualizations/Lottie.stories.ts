import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSLottie from '@dative-gpi/foundation-shared-visualization/components/FSLottie.vue';
import FSLottieUI from '@dative-gpi/foundation-shared-visualization/components/FSLottieUI.vue';

import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';

import { lottieSample } from './lottieSample';

const SOURCE = "https://raw.githubusercontent.com/airbnb/lottie-web/master/demo/adrock/data.json";

const meta: Meta<typeof FSLottie> = {
  title: 'Shared/Visualizations/Lottie',
  component: FSLottie,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSLottieUI], FSLottie),
    ...addComponentEmits(FSLottie),
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const render: Story["render"] = (args) => ({
  components: { FSLottie },
  setup() {
    return { args };
  },
  template: `
    <FSLottie
      v-bind="args"
    />
  `,
});

const renderSwitcher: Story["render"] = (args) => ({
  components: { FSButton, FSCol, FSLottie, FSRow },
  setup() {
    const animations = ref<string[]>([]);
    const animationId = ref<string | null>(null);
    return { animationId, animations, args };
  },
  template: `
    <FSCol>
      <FSRow>
        <FSButton
          v-for="animation in animations"
          :key="animation"
          :label="animation"
          :variant="animation === animationId ? 'full' : 'standard'"
          color="primary"
          @click="animationId = animation"
        />
      </FSRow>
      <FSLottie
        v-bind="args"
        v-model:animationId="animationId"
        @loaded="animations = $event"
      />
    </FSCol>
  `,
});

export const Default: Story = {
  render,
  args: {
    source: SOURCE,
    height: 120,
  } as any,
};

export const WithFileId: Story = {
  render,
  args: {
    fileId: "lottie-sample.json",
    height: 120,
  },
};

export const WithAnimationData: Story = {
  render,
  args: {
    animationData: lottieSample,
    height: 120,
  } as any,
};

export const WithoutCover: Story = {
  render,
  args: {
    source: SOURCE,
    cover: false,
    height: 80,
    width: "100%",
  } as any,
};

export const FullWidth: Story = {
  render,
  args: {
    source: SOURCE,
    height: 80,
    width: "100%",
  } as any,
};

export const FastLoop: Story = {
  render,
  args: {
    animationData: lottieSample,
    speed: 2,
    height: 120,
  } as any,
};

export const PlayThreeTimes: Story = {
  render,
  args: {
    animationData: lottieSample,
    loop: 3,
    height: 120,
  } as any,
};

export const Paused: Story = {
  render,
  args: {
    animationData: lottieSample,
    autoplay: false,
    height: 120,
  } as any,
};

export const Loading: Story = {
  render,
  args: {
    loading: true,
    height: 120,
  } as any,
};

export const DotLottie: Story = {
  render: renderSwitcher,
  args: {
    fileId: "lottie-multi-sample.lottie",
    height: 120,
  },
};
