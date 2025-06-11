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
                {{ foldersBadgeContent }}
              </FSSpan>
            </FSRow>
          </FSColor>
          <FSSpan
            font="text-overline"
          >
            {{ $tr("ui.common.folders", "Folder(s)") }}
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
                {{ dashboardsBadgeContent }}
              </FSSpan>
            </FSRow>
          </FSColor>
          <FSSpan
            font="text-overline"
          >
            {{ $tr("ui.common.dashboards", "Dashboard(s)") }}
          </FSSpan>
        </FSRow>
      </FSCol>
    </template>
  </FSSimpleTileUI>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { capNumberToString } from '@dative-gpi/foundation-shared-components/utils';

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSimpleTileUI from "./FSSimpleTileUI.vue";
import FSColor from "../FSColor.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

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
    FSSimpleTileUI,
    FSColor,
    FSSpan,
    FSCol,
    FSRow
  },
  setup(props){
    const color = computed(() => {
      if(Array.isArray(props.bottomColor) && !props.bottomColor.length) {
        return [ColorEnum.Light, ColorEnum.Primary];
      }
      return props.bottomColor;
    });

    const foldersBadgeContent = computed(() => capNumberToString(props.recursiveFoldersIds.length));

    const dashboardsBadgeContent = computed(() => capNumberToString(props.recursiveDashboardsIds.length));

    return {
      color,
      ColorEnum,
      foldersBadgeContent,
      dashboardsBadgeContent,
    };
  }
});
</script>