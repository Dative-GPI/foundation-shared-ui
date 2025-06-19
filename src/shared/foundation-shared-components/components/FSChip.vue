<template>
  <FSCard
    class="fs-chip"
    padding="2px 20px"
    :borderRadius="50"
    :color="$props.color"
    :variant="$props.variant"
    :height="$props.height"
    @click="$emit('click', $event)"
    v-bind="$attrs"
  >
    <template
      #default="{ contentVariant }"
    >
      <FSRow
        :align="$props.align"
        :wrap="false"
      >
        <slot
          name="prepend"
          v-bind="{ color: $props.color, contentVariant }"
        >
          <FSIcon
            v-if="$props.prependIcon"
            size="s"
          >
            {{ $props.prependIcon }}
          </FSIcon>
        </slot>
        <slot
          v-bind="{ color: $props.color, contentVariant }"
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
          v-bind="{ color: $props.color, contentVariant }"
        >
          <FSIcon
            v-if="$props.appendIcon"
            size="s"
          >
            {{ $props.appendIcon }}
          </FSIcon>
        </slot>
      </FSRow>
    </template>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type CardVariant, CardVariants, type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";
import FSCard from './FSCard.vue';

export default defineComponent({
  name: "FSChip",
  components: {
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
    variant: {
      type: String as PropType<CardVariant>,
      required: false,
      default: CardVariants.Full
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    align: {
      type: String as PropType<"top-left" | "top-center" | "top-right" | "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right">,
      required: false,
      default: "center-center"
    }
  },
  inheritsAttrs: false,
  emits: ['click'],
  setup() {

    return {
    };
  }
});
</script>