<template>
  <span
    :class="classes"
    :style="style"
    v-bind="$attrs"
  >
    <slot>
      {{ $props.label }}
    </slot>
  </span>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import type { ColorBase} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSText",
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    font: {
      type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-h4" | "text-body" | "text-button" | "text-overline" | "text-underline">,
      required: false,
      default: "text-body"
    },
    lineClamp: {
      type: Number,
      required: false,
      default: 1
    },
    ellipsis: {
      type: Boolean,
      required: false,
      default: true
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    variant: {
      type: String as PropType<"base" | "baseContrast" | "light" | "lightContrast" | "dark" | "darkContrast" | "soft" | "softContrast">,
      required: false,
      default: "base"
    }
  },
  setup(props) {
    const { getColors } = useColors();
    const { slots } = useSlots();

    const colors = computed(() => getColors(props.color));

    const classes = computed((): string[] => {
      const classNames = ["fs-text", props.font];
      if (!slots.default) {
        classNames.push("fs-span-pre-wrap");
      }
      if (props.lineClamp > 1) {
        classNames.push("fs-span-line-clamp");
      }
      else if (props.ellipsis) {
        classNames.push("fs-span-ellipsis");
      }
      return classNames;
    });

    const style = computed((): { [key: string] : string | null | undefined } => {
      return {
        "--fs-span-line-clamp": props.lineClamp.toString(),
        "--fs-text-color"     : colors.value[props.variant]
      };
    });

    return {
      classes,
      style
    };
  }
});
</script>