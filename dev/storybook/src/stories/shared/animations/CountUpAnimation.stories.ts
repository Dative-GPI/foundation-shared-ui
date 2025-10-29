import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent, toRefs, ref, onMounted, onBeforeUnmount, type ComponentPublicInstance, watch } from "vue";

import { useCountUp } from "@dative-gpi/foundation-shared-components/composables";
import { useElementVisibility } from "@dative-gpi/foundation-shared-components/composables";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

interface CountUpArgs {
  value: number;
  duration: number;
  pad: number;
  countUp: boolean;
  startOnVisible: boolean;
}

const CountUpDemo = defineComponent({
  name: "CountUpDemo",
  props: {
    value: { 
      type: Number, 
      required: true 
    },
    duration: { 
      type: Number, 
      required: true 
    },
    pad: { 
      type: Number, 
      required: true 
    },
    countUp: { 
      type: Boolean, 
      required: true 
    },
    startOnVisible: { 
      type: Boolean, 
      required: true 
    },
  },
  setup(props) {
    const { value, duration, pad, countUp, startOnVisible } = toRefs(props);

    const { displayText, current, target, start, restart } = useCountUp(
      value,
      duration.value,
      countUp.value,
      pad.value,
      startOnVisible.value
    );

    onMounted(() => {
      if (!startOnVisible.value && countUp.value) {
        start();
      }
    });

    return { displayText, current, target, start, restart };
  },
  template: `
    <FSCol style="padding: 16px">
      <div style="margin-bottom: 8px; color: #666">
        current: {{ current }} / target: {{ target }}
      </div>
      <div style="font-variant-numeric: tabular-nums; font-size: 48px; font-weight: 700">
        {{ displayText }}
      </div>
      <div style="margin-top: 16px; display: flex; gap: 8px">
        <button @click="start" style="padding: 8px 16px; cursor: pointer">
          Start
        </button>
        <button @click="restart" style="padding: 8px 16px; cursor: pointer">
          Restart
        </button>
      </div>
    </FSCol>
  `,
  components: { FSCol },
});

const meta: Meta<typeof CountUpDemo> = {
  title: "Animation/useCountUp",
  component: CountUpDemo,
  tags: ["autodocs"],
  argTypes: {
    value: { 
      control: "number", 
      description: "Target number to count up to" 
    },
    duration: { 
      control: "number", 
      description: "Animation duration in milliseconds" 
    },
    pad: { 
      control: "number", 
      description: "Number of digits to pad with zeros" 
    },
    countUp: { 
      control: "boolean", 
      description: "Enable/disable count up animation" 
    },
    startOnVisible: { 
      control: "boolean", 
      description: "Start animation when element becomes visible" 
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1234,
    duration: 800,
    pad: 2,
    countUp: true,
    startOnVisible: false,
  },
  render: (args, { argTypes }) => ({
    components: { CountUpDemo, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSCol>
        <CountUpDemo v-bind="args" />
      </FSCol>
    `,
  }),
};

export const LargeNumber: Story = {
  args: {
    value: 999999,
    duration: 1500,
    pad: 6,
    countUp: true,
    startOnVisible: false,
  },
};

export const FastAnimation: Story = {
  args: {
    value: 100,
    duration: 300,
    pad: 3,
    countUp: true,
    startOnVisible: false,
  },
};

export const SlowAnimation: Story = {
  args: {
    value: 5000,
    duration: 3000,
    pad: 4,
    countUp: true,
    startOnVisible: false,
  },
};

export const Disabled: Story = {
  args: {
    value: 1234,
    duration: 800,
    pad: 2,
    countUp: false,
    startOnVisible: false,
  },
};

export const StartOnVisible: Story = {
  args: {
    value: 15,
    duration: 1200,
    pad: 2,
    countUp: true,
    startOnVisible: true,
  },
  render: (args) => ({
    components: { FSCol, FSText },
    setup() {
      const { value, duration, pad } = args as CountUpArgs;
      const elementRef = ref<ComponentPublicInstance<InstanceType<typeof FSText>> | null>(null);

      const { displayText, hasAnimated, start } = useCountUp(
        ref(value),
        duration,
        true,
        pad,
        true
      );

      // récupérer isVisible depuis la composable
      useElementVisibility(elementRef, () => {
        if (!hasAnimated.value) {
          start();
        }
      }, 0.3);

      return { displayText, elementRef };
    },
    template: `
      <FSCol style="padding: 16px">
        <div style="color: #666; margin-bottom: 16px">
          Scroll down to see the animation start when the number becomes visible
        </div>
        <div style="height: 80vh"></div>
        <FSText
          ref="elementRef"
          font="text-h1"
          style="font-variant-numeric: tabular-nums; font-size: 48px; font-weight: 700; padding: 32px; background: #f5f5f5; border-radius: 8px; text-align: center"
        >
          {{ displayText }}
        </FSText>
        <div style="height: 40vh"></div>
      </FSCol>
    `,
  }),
};