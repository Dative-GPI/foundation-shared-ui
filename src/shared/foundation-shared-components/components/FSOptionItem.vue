<template>
  <FSClickable
    :disabled="$props.disabled"
    :height="['32px', '28px']"
    :padding="$props.padding"
    :variant="$props.variant"
    :color="$props.color"
    :load="$props.load"
    :border="false"
    @click.stop="onClick"
    v-bind="$attrs"
  >
    <FSRow
      align="center-center"
      width="fill"
      :wrap="false"
    >
      <slot
        name="prepend"
        v-bind="{ color: $props.color, colors }"
      >
        <FSIcon
          v-if="$props.prependIcon || $props.icon"
          size="l"
        >
          {{ $props.prependIcon ?? $props.icon }}
        </FSIcon>
      </slot>
      <slot
        v-bind="{ color: $props.color, colors }"
      >
        <FSSpan
          v-if="$props.label"
        >
          {{ $props.label }}
        </FSSpan>
      </slot>
      <slot
        name="append"
        v-bind="{ color: $props.color, colors }"
      >
        <FSIcon
          v-if="$props.appendIcon"
          size="l"
        >
          {{ $props.appendIcon }}
        </FSIcon>
      </slot>
    </FSRow>
  </FSClickable>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSClickable from "./FSClickable.vue";
import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSOptionItem",
  components: {
    FSClickable,
    FSSpan,
    FSIcon,
    FSRow
  },
  props: {
    prependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    appendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "background" | "full">,
      required: false,
      default: "standard"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "4px"
    },
    load: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));

    const onClick = (event: MouseEvent) => {
      if (!props.disabled && !props.load) {
        emit("click", event);
      }
    };

    return {
      colors,
      onClick
    };
  }
})
</script>