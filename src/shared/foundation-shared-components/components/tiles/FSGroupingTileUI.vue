<template>
  <FSSimpleTileUI
    :bottomColor="null"
    :width="$props.width"
    :modelValue="$props.modelValue"
    :label="$props.label"
    :code="$props.code"
    :icon="$props.icon"
    :iconColor="$props.iconColor"
    v-bind="$attrs"
  >
    <template
      #append-info
    >
      <FSCol
        gap="6px"
      >
        <FSRow
          align="center-left"
        >
          <FSColor
            height="24px"
            width="24px"
            :color="ColorEnum.Primary"
            :border="false"
          >
            <FSRow
              align="center-center"
            >
              <FSSpan
                font="text-overline"
              >
                {{ subgroupingsBadgeContent }}
              </FSSpan>
            </FSRow>
          </FSColor>
          <FSSpan
            font="text-overline"
          >
            {{ $tr("ui.common.subgroupings", "Categories") }}
          </FSSpan>
        </FSRow>
      </FSCol>
    </template>
  </FSSimpleTileUI>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { capNumberToString } from '@dative-gpi/foundation-shared-components/utils';

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSimpleTileUI from './FSSimpleTileUI.vue';
import FSColor from "../FSColor.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSGroupingTileUI",
  components: {
    FSSimpleTileUI,
    FSColor,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    icon: {
      type: String,
      required: false
    },
    iconColor: {
      type: String,
      required: false
    },
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
    subgroupingCount: {
      type: Number,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
    },
  },
  setup(props) {
    const subgroupingsBadgeContent = computed(() => props.subgroupingCount ? capNumberToString(props.subgroupingCount) : 0);


    return {
      subgroupingsBadgeContent,
      ColorEnum,
    };
  }
});
</script>