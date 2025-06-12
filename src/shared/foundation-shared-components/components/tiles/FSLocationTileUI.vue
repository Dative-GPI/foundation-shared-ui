<template>
  <FSSimpleTileUI
    :activeColor="$props.color"
    :bottomColor="$props.color"
    :modelValue="$props.modelValue"
    :width="$props.width"
    :label="$props.label"
    :icon="$props.icon"
    :code="$props.code"
    v-bind="$attrs"
  >
    <template
      #append-info
    >
      <FSCol
        gap="8px"
      >
        <FSEntityCountBadge
          v-if="$props.deviceCount !== undefined"
          :label="$tr('ui.common.devices', 'Device(s)')"
          :count="$props.deviceCount"
          :color="ColorEnum.Primary"
        />
        <FSRow
          v-if="$props.address"
          :wrap="false"
          align="center-left"
        >
          <FSColor
            height="24px"
            :color="ColorEnum.Primary"
            :border="false"
          >
            <FSRow
              align="center-center"
              width="24px"
            >
              <FSIcon
                icon="mdi-map-marker-radius-outline"
                size="16px"
              />
            </FSRow>
          </FSColor>
          <FSSpan
            font="text-overline"
          >
            {{ $props.address }}
          </FSSpan>
        </FSRow>
      </FSCol>
    </template>
  </FSSimpleTileUI>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { capNumberToString } from '@dative-gpi/foundation-shared-components/utils';
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSEntityCountBadge from './FSEntityCountBadge.vue';
import FSSimpleTileUI from './FSSimpleTileUI.vue';
import FSColor from "../FSColor.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSLocationTileUI",
  components: {
    FSEntityCountBadge,
    FSSimpleTileUI,
    FSColor,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    code: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String,
      required: false,
      default: "mdi-map-marker"
    },
    address: {
      type: String,
      required: false
    },
    deviceCount: {
      type: Number,
      required: false,
      default: 0
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup() {

    return {
      ColorEnum,
      capNumberToString
    };
  }
});
</script>