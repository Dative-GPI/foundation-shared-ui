<template>
  <FSCard
    borderStyle="dashed"
    padding="24px"
    :height="$props.height"
    :variant="CardVariants.Standard"
    :color="ColorEnum.Light"
    :width="$props.width"
    :border="true"
    v-bind="$attrs"
  >
    <template
      #default
    >
      <slot>
        <FSRow
          align="center-center"
        >
          <FSIcon
            v-if="$props.icon"
            :color="ColorEnum.Light"
            variant="dark"
          >
            {{ $props.icon }}
          </FSIcon>
          <FSText
            v-if="$props.label"
            :color="ColorEnum.Light"
            variant="dark"
          >
            {{ $props.label }}
          </FSText>
        </FSRow>
      </slot>
    </template>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { CardVariants, ColorEnum } from "../models";

import FSCard from "./FSCard.vue";
import FSIcon from "./FSIcon.vue";
import FSText from "./FSText.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCardPlaceholder",
  components: {
    FSCard,
    FSIcon,
    FSText,
    FSRow
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "fit-content"
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "100%"
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  setup() {
    return {
      ColorEnum,
      CardVariants
    };
  }
});
</script>