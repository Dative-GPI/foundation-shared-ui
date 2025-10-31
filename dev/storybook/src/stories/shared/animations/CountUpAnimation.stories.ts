import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent, toRefs, ref, onMounted, onBeforeUnmount, type ComponentPublicInstance, watch } from "vue";

import { useCountUp } from "@dative-gpi/foundation-shared-components/composables";
import { useElementVisibility } from "@dative-gpi/foundation-shared-components/composables";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

const meta: Meta<typeof CountUpDemo> = {
  title: "Animation/useCountUp",
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
    startOnVisible: { 
      control: "boolean", 
      description: "Start animation when element becomes visible" 
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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
    startOnVisible: { 
      type: Boolean, 
      required: true 
    },
  },
  setup(props) {
    const { value, duration, pad, startOnVisible } = toRefs(props);
    const element = ref<ComponentPublicInstance | null>(null);

    const { displayText } = useCountUp(
      value,
      duration,
      pad,
      startOnVisible,
      element
    );

    return { displayText, value, element };
  },
  template: `
    <FSCol style="padding: 16px">
      <div style="margin-bottom: 8px; color: #666" ref="element">
        target: {{ value }}
      </div>
      <div style="font-variant-numeric: tabular-nums; font-size: 48px; font-weight: 700">
        {{ displayText }}
      </div>
    </FSCol>
  `,
  components: { FSCol },
});

export const Default: Story = {
  args: {
    value: 1234,
    duration: 800,
    pad: 2,
    startOnVisible: false,
  },
  render: (args, { argTypes }) => ({
    components: { CountUpDemo, FSCol },
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

export const StartOnVisible: Story = {
  args: {
    value: 15,
    duration: 1200,
    pad: 2,
    startOnVisible: true,
  },
  render: (args) => ({
    components: { FSCol, FSText },
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
      startOnVisible: { 
        type: Boolean, 
        required: true 
      },
    },
    setup(props) {
      const { value, duration, pad, startOnVisible } = toRefs(props);
      const element = ref<ComponentPublicInstance | null>(null);

      const { displayText } = useCountUp(
        value,
        duration,
        pad,
        startOnVisible,
        element
      );

      return { displayText, value, element };
    },
    template: `
      <FSCol style="padding: 16px">
        <div style="color: #666; margin-bottom: 16px">
          Scroll down to see the animation start when the number becomes visible
        </div>
        <div style="height: 80vh"></div>
        <FSText
          ref="element"
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