<template>
  <FSButton
    :color="$props.color"
    :iconSize="$props.iconSize"
    :borderRadius="$props.borderRadius"
    :height="$props.height"
    :padding="$props.padding"
    :font="$props.font"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSButton>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSButtonChip",
  components: {
    FSButton
  },
  props: {
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    iconSize: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: "16px"
    },
    height: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: "24px"
    },
    padding: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: "2px 16px"
    },
    borderRadius: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: "12px"
    },
    font: {
      type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline">,
      required: false,
      default: "text-overline"
    }
  },
  setup() {

    return {
      ColorEnum
    };
  }
});
</script>