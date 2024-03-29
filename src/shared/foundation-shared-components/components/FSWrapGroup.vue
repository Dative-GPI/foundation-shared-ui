<template>
  <v-slide-group
    class="fs-wrap-group"
    ref="wrapGroupRef"
    :style="style"
    v-bind="$attrs"
  >
    <v-slide-group-item
      v-for="(component, index) in getChildren()"
      :key="index"
    >
      <component :is="component" />
    </v-slide-group-item>
  </v-slide-group>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSWrapGroup",
  props: {
    padding: {
      type: [String, Number],
      required: false,
      default: "0"
    },
    gap: {
      type: [String, Number],
      required: false,
      default: "8px"
    }
  },
  setup(props) {
    const { getChildren } = useSlots();
    const { getColors } = useColors();

    const darks = getColors(ColorEnum.Dark);

    const wrapGroupRef = ref(null);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => ({
      "--fs-group-padding"    : sizeToVar(props.padding),
      "--fs-group-gap"        : sizeToVar(props.gap),
      "--fs-group-color"      : darks.light,
      "--fs-group-hover-color": darks.dark
    }));

    return {
      wrapGroupRef,
      style,
      getChildren
    };
  }
});
</script>