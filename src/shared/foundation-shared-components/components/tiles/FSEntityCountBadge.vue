<template>
  <FSRow
    align="center-left"
  >
    <FSColor
      height="24px"
      width="24px"
      :color="$props.color"
      :border="false"
    >
      <FSRow
        align="center-center"
      >
        <FSSpan
          font="text-overline"
        >
          {{ badgeContent }}
        </FSSpan>
      </FSRow>
    </FSColor>
    <FSSpan
      font="text-overline"
    >
      {{ $props.label }}
    </FSSpan>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { capNumberToString } from '@dative-gpi/foundation-shared-components/utils';

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSColor from "../FSColor.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSEntityCountBadge",
  props: {
    label: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: () => ColorEnum.Primary
    }
  },
  components: {
    FSColor,
    FSSpan,
    FSRow
  },
  setup(props){

    const badgeContent = computed(() => capNumberToString(props.count));

    return {
      ColorEnum,
      badgeContent
    };
  }
});
</script>