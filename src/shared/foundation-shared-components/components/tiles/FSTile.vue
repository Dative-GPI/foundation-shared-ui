<template>
  <FSCol
    class="fs-tile"
    :style="style"
    :width="$props.width"
    :height="$props.height"
  >
    <FSCard
      class="fs-tile"
      :variant="selectionState.variant"
      :color="selectionState.color"
      padding="12px"
      width="100%"
      height="100%"
      topRightPadding="1px"
      :to="$props.to"
      :href="$props.href"
      v-on="selectionState.listeners"
      v-bind="$attrs"
    >
      <slot />
      <template 
        v-if="selectionState.showCheckbox"
        #top-right
      >
        <FSCard
          padding="8px"
          :border="false"
        >
          <FSCheckbox
            :modelValue="$props.modelValue"
            @update:modelValue="() => $emit('update:modelValue', !$props.modelValue)"
          />
        </FSCard>
      </template>
    </FSCard>
    <div
      v-if="$props.leftColor"
      class="fs-tile-left"
      :style="style"
    />
    <div
      v-if="$props.bottomColor"
      class="fs-tile-bottom"
      :style="style"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";
import { type RouteLocation } from "vue-router";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum, type ColorBase } from "@dative-gpi/foundation-shared-components/models";

import FSCard from "../FSCard.vue";
import FSCheckbox from "../FSCheckbox.vue";

export default defineComponent({
  name: "FSTile",
  inheritAttrs: false,
  components: {
    FSCard,
    FSCheckbox
  },
  props: {
    to: {
      type: [String, Object] as PropType<RouteLocation | null>,
      required: false,
      default: null
    },
    href: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    activeColor: {
      type: [Array, String] as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    bottomColor: {
      type: [Array, String] as PropType<ColorBase[] | ColorBase | null>,
      required: false,
      default: null
    },
    leftColor: {
      type: [Array, String] as PropType<ColorBase[] | ColorBase | null>,
      required: false,
      default: null
    },
    selectable: {
      type: Boolean,
      required: false,
      default: false
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [170, 156]
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getGradients } = useColors();

    const style = computed((): StyleValue => {
      const result: StyleValue = {};
      if (props.bottomColor) {
        const bottomColors = getGradients(props.bottomColor);
        result["--fs-tile-bottom-border-color"] = bottomColors.base;
      }
      if (props.leftColor) {
        const leftColors = getGradients(props.leftColor);
        result["--fs-tile-left-border-color"] = leftColors.base;
      }
      return result;
    });

    const selectionState = computed(() => {
      const isSingleSelect = props.selectable && props.singleSelect && !props.href && !props.to;
      const showCheckbox = props.selectable && !isSingleSelect;
      const variant: "standard" | "background" = (isSingleSelect && props.modelValue) ? "standard" : "background";
      const color: ColorBase = (isSingleSelect && props.modelValue) ? props.activeColor : ColorEnum.Background;
      const onClick = () => { emit("update:modelValue", !props.modelValue); };
      const listeners: Record<string, (...args: any[]) => void> = {};
      if (isSingleSelect) {
        listeners.click = onClick;
      }
      return {
        isSingleSelect,
        showCheckbox,
        variant,
        color,
        listeners
      };
    });

    return {
      selectionState,
      ColorEnum,
      style
    };
  }
});
</script>