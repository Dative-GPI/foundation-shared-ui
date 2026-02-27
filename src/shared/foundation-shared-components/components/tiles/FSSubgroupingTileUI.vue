<template>
  <FSSimpleTileUI
    :bottomColor="null"
    v-bind="$attrs"
  >
    <template
      #append-info
    >
      <FSRow
        v-if="$props.groupingLabel && $props.groupingIcon"
        align="center-left"
        :wrap="false"
      >
        <FSColor
          height="24px"
          :color="$props.groupingColor"
          :border="false"
          variant="standard"
        >
          <FSRow
            align="center-center"
            width="24px"
          >
            <FSIcon
              size="16px"
            >
              {{ $props.groupingIcon }}
            </FSIcon>
          </FSRow>
        </FSColor>
        <FSSpan
          font="text-overline"
        >
          {{ $props.groupingLabel }}
        </FSSpan>
      </FSRow>
      <FSEntityCountBadge
        :label="$tr('ui.common.devices', 'Devices')"
        :count="$props.deviceOrganisationsCount ?? 0"
        :color="ColorEnum.Primary"
      />
    </template>
  </FSSimpleTileUI>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSEntityCountBadge from "./FSEntityCountBadge.vue";
import FSSimpleTileUI from './FSSimpleTileUI.vue';
import FSColor from "../FSColor.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSSubgroupingTileUI",
  components: {
    FSEntityCountBadge,
    FSSimpleTileUI,
    FSColor,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    groupingLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    groupingIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    groupingColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    deviceOrganisationsCount: {
      type: Number,
      required: false,
      default: null
    }
  },
  inheritAttrs: false,
  setup() {
    return {
      ColorEnum,
    };
  }
});
</script>
