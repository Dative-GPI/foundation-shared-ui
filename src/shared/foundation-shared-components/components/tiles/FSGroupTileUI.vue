<template>
  <FSSimpleTileUI
    :activeColor="ColorEnum.Primary"
    :bottomColor="ColorEnum.Error"
    :width="$props.width"
    :modelValue="$props.modelValue"
    :label="$props.label"
    :code="$props.code"
    :imageId="$props.imageId"
    :icon="$props.icon"
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
                {{ groupsBadgeContent }}
              </FSSpan>
            </FSRow>
          </FSColor>
          <FSSpan
            font="text-overline"
          >
            {{ $tr("ui.common.groups", "Group(s)") }}
          </FSSpan>
        </FSRow>
        <FSRow
          align="center-left"
        >
          <FSColor
            height="24px"
            width="24px"
            :color="ColorEnum.Success"
            :border="false"
          >
            <FSRow
              align="center-center"
            >
              <FSSpan
                font="text-overline"
              >
                {{ deviceOrganisationsBadgeContent }}
              </FSSpan>
            </FSRow>
          </FSColor>
          <FSSpan
            font="text-overline"
          >
            {{ $tr("ui.common.devices", "Device(s)") }}
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
  name: "FSGroupTileUI",
  components: {
    FSSimpleTileUI,
    FSColor,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
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
    recursiveGroupsIds: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    recursiveDeviceOrganisationsIds: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
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
    const groupsBadgeContent = computed(() => capNumberToString(props.recursiveGroupsIds.length));

    const deviceOrganisationsBadgeContent = computed(() => capNumberToString(props.recursiveDeviceOrganisationsIds.length));

    return {
      deviceOrganisationsBadgeContent,
      groupsBadgeContent,
      ColorEnum,
    };
  }
});
</script>