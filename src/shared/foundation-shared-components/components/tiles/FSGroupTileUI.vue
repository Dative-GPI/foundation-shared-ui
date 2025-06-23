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
        <FSEntityCountBadge
          :label="$tr('ui.common.groups', 'Group(s)')"
          :count="recursiveGroupsIds.length"
          :color="ColorEnum.Primary"
        />
        <FSEntityCountBadge
          :label="$tr('ui.common.devices', 'Device(s)')"
          :count="recursiveDeviceOrganisationsIds.length"
          :color="ColorEnum.Success"
        />
      </FSCol>
    </template>
  </FSSimpleTileUI>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSEntityCountBadge from './FSEntityCountBadge.vue';
import FSSimpleTileUI from './FSSimpleTileUI.vue';
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSGroupTileUI",
  components: {
    FSEntityCountBadge,
    FSSimpleTileUI,
    FSCol
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
  setup() {
    return {
      ColorEnum,
    };
  }
});
</script>