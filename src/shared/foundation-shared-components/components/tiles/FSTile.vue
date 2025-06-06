<template>
  <FSCol
    class="fs-tile"
    :height="$props.height"
    :width="$props.width"
  >
    <FSClickable
      v-if="($props.href || $props.to || $attrs.onClick)"
      variant="background"
      class="fs-tile"
      padding="12px"
      :href="$props.href"
      width="100%"
      height="100%"
      topRightPadding="1px"
      :to="$props.to"
      :style="style"
      v-bind="$attrs"
    >
      <slot />
      <template 
        v-if="$props.selectable"
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
    </FSClickable>

    <FSClickable
      v-else-if="$props.selectable && $props.singleSelect"
      padding="12px"
      :variant="variant"
      :color="color"
      :style="style"
      width="100%"
      height="100%"
      @click="() => $emit('update:modelValue', !$props.modelValue)"
      v-bind="$attrs"
    >
      <slot />
    </FSClickable>
    
    <FSCard
      v-else
      variant="background"
      class="fs-tile"
      padding="12px"
      :style="style"
      width="100%"
      height="100%"
      topRightPadding="1px"
      v-bind="$attrs"
    >
      <slot />
      <template 
        v-if="$props.selectable"
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

import FSClickable from "../FSClickable.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSCard from "../FSCard.vue";

export default defineComponent({
  name: "FSTile",
  inheritAttrs: false,
  components: {
    FSClickable,
    FSCheckbox,
    FSCard
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
  setup(props) {
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

    const variant = computed((): "standard" | "background" => {
      return (props.singleSelect && props.modelValue) ? "standard" : "background";
    });

    const color = computed((): ColorBase => {
      return (props.singleSelect && props.modelValue) ? props.activeColor : ColorEnum.Background;
    });

    return {
      ColorEnum,
      variant,
      color,
      style
    };
  }
});
</script>