<template>
  <FSWrapGroup
    v-if="$props.variant === 'wrap'"
    v-bind="$attrs"
  >
    <FSTag
      v-for="(tag, index) in $props.tags"
      :variant="$props.tagVariant"
      :showRemove="$props.showRemove"
      :color="$props.color"
      :label="tag"
      :key="index"
      @remove="() => $emit('remove', tag)"
    />
    <slot />
  </FSWrapGroup>
  <FSSlideGroup
    v-else-if="$props.variant === 'slide'"
    v-bind="$attrs"
  >
    <FSTag
      v-for="(tag, index) in $props.tags"
      :variant="$props.tagVariant"
      :showRemove="$props.showRemove"
      :color="$props.color"
      :label="tag"
      :key="index"
      @remove="() => $emit('remove', tag)"
    />
    <slot />
  </FSSlideGroup>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSlideGroup from '@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue';
import FSWrapGroup from "./FSWrapGroup.vue";
import FSTag from "./FSTag.vue";

export default defineComponent({
  name: "FSTagGroup",
  components: {
    FSSlideGroup,
    FSWrapGroup,
    FSTag
  },
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    variant: {
      type: String as PropType<"wrap" | "slide">,
      required: false,
      default: "wrap"
    },
    tagVariant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "full"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    showRemove: {
      type: Boolean,
      required: false,
      default: true
    }
  }
});
</script>