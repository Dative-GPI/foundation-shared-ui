<template>
  <component
    :is="$props.clickable ? 'FSClickable' : 'FSCard'"
    class="fs-chip"
    padding="2px 20px"
    :borderRadius="50"
    :border="showBorder"
    :color="$props.color"
    :variant="cardVariant"
    :height="$props.height"
    :width="$props.width"
    @click="$emit('click', $event)"
    v-bind="$attrs"
  >
    <FSRow
      :align="$props.align"
      :wrap="false"
    >
      <slot
        name="prepend"
        v-bind="{ color: $props.color }"
      >
        <FSIcon
          v-if="$props.prependIcon"
          size="s"
        >
          {{ $props.prependIcon }}
        </FSIcon>
      </slot>
      <slot
        v-bind="{ color: $props.color }"
      >
        <FSSpan
          v-if="$props.label"
          font="text-overline"
        >
          {{ $props.label }}
        </FSSpan>
      </slot>
      <slot
        name="append"
        v-bind="{ color: $props.color }"
      >
        <FSIcon
          v-if="$props.appendIcon"
          size="s"
        >
          {{ $props.appendIcon }}
        </FSIcon>
      </slot>
    </FSRow>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";
import FSClickable from '@dative-gpi/foundation-shared-components/components/FSClickable.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';

export default defineComponent({
  name: "FSChip",
  components: {
    FSClickable,
    FSCard,
    FSIcon,
    FSSpan,
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
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [24, 20]
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "full" | "borderless" | "gradient" | "background">,
      required: false,
      default: "full"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    clickable: {
      type: Boolean,
      required: false,
      default: false
    },
    align: {
      type: String as PropType<"top-left" | "top-center" | "top-right" | "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right">,
      required: false,
      default: "center-center"
    }
  },
  inheritsAttrs: false,
  emits: ['click'],
  setup(props) {

    const cardVariant = computed(() => {
      switch (props.variant) {
        case "standard":
          return "standard";
        case "full":
          return "full";
        case "borderless":
          return "standard";
        case "gradient":
          return "gradient";
        default:
          return "background";
      }
    });

    const showBorder = computed(() => {
      return props.variant !== "borderless";
    });

    return {
      FSClickable,
      FSCard,
      cardVariant,
      showBorder
    };
  }
});
</script>