<template>
  <FSCard
    :variant="$props.variant"
    :color="$props.color"
    :clickable="true"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="{ ...slotData }"
      />
    </template>
  </FSCard>
</template>

<script lang="ts">
/**
 * @deprecated FSClickable is deprecated. Please use <FSCard :clickable="true" ... /> instead.
 * This component will be removed in a future release.
 */
import { defineComponent, type PropType, onMounted } from "vue";

import { type CardVariant, CardVariants, type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCard from "./FSCard.vue";

export default defineComponent({
  name: "FSClickable",
  components: {
    FSCard
  },
  props: {
    variant: {
      type: String as PropType<CardVariant>,
      required: false,
      default: CardVariants.Standard
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    load: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup() {
    onMounted(() => {
      console.warn('[DEPRECATED] <FSClickable> is deprecated. Please use <FSCard :clickable="true" ... /> instead. This component will be removed in a future release.');
    });
    return {
    };
  }
});
</script>