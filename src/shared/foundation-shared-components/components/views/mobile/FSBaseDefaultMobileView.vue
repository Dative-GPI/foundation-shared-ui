<template>
  <FSFadeOut
    height="100%"
    maxHeight="100%"
    :scrollOutside="false"
    :disableTopMask="true"
  >
    <FSCol
      height="fill"
      gap="0px"
    >
      <slot
        name="header"
      >
        <FSRow
          style="position: sticky; top: 0px; z-index: 3;"
          :style="{ backgroundColor, marginTop: $props.stickyTitleTopOffset }"
          :padding="`16px ${isTouchScreenEnabled ? '20px' : '12px'} 12px 12px`"
        >
          <slot
            name="title"
          >
            <FSText
              font="text-h2"
            >
              {{ $props.title }}
            </FSText>
          </slot>
        </FSRow>
        <FSCol
          v-if="$props.breadcrumbs && $props.breadcrumbs.length > 0"
          :padding="`0px ${isTouchScreenEnabled ? '20px' : '12px'} 12px 12px`"
          gap="16px"
        >
          <FSCol>
            <slot
              name="breadcrumbs"
            >
              <FSBreadcrumbs
                :items="$props.breadcrumbs"
              />
            </slot>
          </FSCol>
        </FSCol>
        <FSRow
          v-if="$slots.toolbar"
          :style="stickyToolbar ? `position: sticky; top: ${$props.toolbarTopOffset}; z-index: 3; background-color: ${backgroundColor}` : undefined"
          :padding="`0px ${isTouchScreenEnabled ? '20px' : '12px'} 12px 12px`"
        >
          <FSSlideGroup>
            <slot
              name="toolbar"
            />
          </FSSlideGroup>
        </FSRow>
      </slot>

      <FSCol
        height="fill"
        gap="0px"
        :padding="`0px ${isTouchScreenEnabled ? '20px' : '12px'} 16px 12px`"
      >
        <slot />
      </FSCol>
    </FSCol>
  </FSFadeOut>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from "vue";

import { type FSBreadcrumbItem, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { useBreakpoints, useColors } from "../../../composables"
 
import FSCol from "../../FSCol.vue";
import FSRow from "../../FSRow.vue"
import FSText from "../../FSText.vue";
import FSBreadcrumbs from "../../FSBreadcrumbs.vue";
import FSSlideGroup from "../../FSSlideGroup.vue";
import FSFadeOut from "../../FSFadeOut.vue"

export default defineComponent({
  name: "FSBaseDefaultDesktopView",
  components: {
    FSCol,
    FSRow,
    FSText,
    FSBreadcrumbs,
    FSSlideGroup,
    FSFadeOut
  },
  props: {
    title: {
      type: String,
      required: false
    },
    breadcrumbs: {
      type: Array as PropType<FSBreadcrumbItem[]>,
      required: false,
      default: () => []
    },
    stickyToolbar: {
      type: Boolean,
      required: false,
      default: true
    },
    toolbarTopOffset: {
      type: String,
      required: false,
      default: "52px" 
    },
    stickyTitleTopOffset: {
      type: String,
      required: false,
      default: "0px"
    }
  },
  setup() {
    const { isTouchScreenEnabled } = useBreakpoints();
    const { getColors } = useColors();

    const backgroundColor = computed(() => {
      return getColors(ColorEnum.Background).base;
    });

    return {
      isTouchScreenEnabled,
      backgroundColor
    };
  }
});
</script>