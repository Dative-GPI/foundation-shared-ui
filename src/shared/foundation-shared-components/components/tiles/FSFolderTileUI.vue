<template>
  <FSSimpleTileUI
    iconBackgroundVariant="gradient"
    :iconBackgroundColor="color"
    :bottomColor="color"
    :iconBorder="false"
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
          :label="$tr('ui.common.folders', 'Folder(s)')"
          :count="recursiveFoldersIds.length"
          :color="ColorEnum.Primary"
        />
        <FSEntityCountBadge
          :label="$tr('ui.common.dashboards', 'Dashboard(s)')"
          :count="recursiveDashboardsIds.length"
          :color="ColorEnum.Success"
        />
      </FSCol>
    </template>
  </FSSimpleTileUI>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSEntityCountBadge from './FSEntityCountBadge.vue';
import FSSimpleTileUI from "./FSSimpleTileUI.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSFolderTileUI",
  props: {
    bottomColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: () => [ColorEnum.Light, ColorEnum.Primary]
    },
    icon: {
      type: String,
      required: false,
      default: "mdi-folder-outline"
    },
    recursiveFoldersIds: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    recursiveDashboardsIds: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
  },
  components: {
    FSEntityCountBadge,
    FSSimpleTileUI,
    FSCol
  },
  setup(props){
    const color = computed(() => {
      if(Array.isArray(props.bottomColor) && !props.bottomColor.length) {
        return [ColorEnum.Light, ColorEnum.Primary];
      }
      return props.bottomColor;
    });

    return {
      color,
      ColorEnum
    };
  }
});
</script>