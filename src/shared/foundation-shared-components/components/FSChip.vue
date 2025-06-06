<template>
  <component
    :is="$props.to && $props.clickable ? 'FSRouterLink' : 'div'"
    class="fs-chip-container"
    v-bind="$props.to ? { to: $props.to } : {}"
    @click="$emit('click', $event)"
  >
    <FSRow
      :align="$props.align"
      :width="$props.width"
      :class="classes"
      :style="style"
      :wrap="false"
      v-bind="$attrs"
    >
      <slot
        name="prepend"
        v-bind="{ color: $props.color, colors }"
      >
        <FSIcon
          v-if="$props.prependIcon"
          size="s"
        >
          {{ $props.prependIcon }}
        </FSIcon>
      </slot>
      <slot
        v-bind="{ color: $props.color, colors }"
      >
        <FSSpan
          v-if="$props.label"
          font="text-overline"
          class="fs-chip-label"
        >
          {{ $props.label }}
        </FSSpan>
      </slot>
      <slot
        name="append"
        v-bind="{ color: $props.color, colors }"
      >
        <FSIcon
          v-if="$props.appendIcon"
          size="s"
        >
          {{ $props.appendIcon }}
        </FSIcon>
      </slot>
    </FSRow>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";
import { type RouteLocation } from "vue-router";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";
import FSRouterLink from '@dative-gpi/foundation-shared-components/components/FSRouterLink.vue';

export default defineComponent({
  name: "FSChip",
  components: {
    FSRouterLink,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    prependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    appendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [24, 20]
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "hug"
    },
    variant: {
      type: String as PropType<"standard" | "full" | "borderless">,
      required: false,
      default: "full"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    clickable: {
      type: Boolean,
      required: false,
      default: false
    },
    align: {
      type: String as PropType<"center-center" | "center-left">,
      required: false,
      default: "center-center"
    },
    to: {
      type: Object as PropType<RouteLocation | null>,
      required: false,
      default: null
    },
  },
  inheritsAttrs: false,
  emits: ['click'],
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => {
      switch (props.variant) {
        case "standard": return {
          "--fs-chip-height"                 : sizeToVar(props.height),
          "--fs-chip-background-color"       : backgrounds.base,
          "--fs-chip-border-color"           : colors.value.base,
          "--fs-chip-color"                  : colors.value.base,
          "--fs-chip-hover-background-color" : colors.value.base,
          "--fs-chip-hover-border-color"     : colors.value.base,
          "--fs-chip-hover-color"            : colors.value.baseContrast!,
          "--fs-chip-active-background-color": backgrounds.base,
          "--fs-chip-active-border-color"    : colors.value.dark,
          "--fs-chip-active-color"           : colors.value.dark
        };
        case "full": return {
          "--fs-chip-height"                 : sizeToVar(props.height),
          "--fs-chip-background-color"       : colors.value.base,
          "--fs-chip-border-color"           : colors.value.base,
          "--fs-chip-color"                  : colors.value.baseContrast!,
          "--fs-chip-hover-background-color" : colors.value.soft,
          "--fs-chip-hover-border-color"     : colors.value.soft,
          "--fs-chip-hover-color"            : colors.value.baseContrast!,
          "--fs-chip-active-background-color": colors.value.dark,
          "--fs-chip-active-border-color"    : colors.value.darkContrast!,
          "--fs-chip-active-color"           : colors.value.darkContrast!
        };
        case "borderless": return {
          "--fs-chip-height"                 : sizeToVar(props.height),
          "--fs-chip-background-color"       : backgrounds.base,
          "--fs-chip-border-color"           : backgrounds.base,
          "--fs-chip-color"                  : darks.base,
          "--fs-chip-hover-background-color" : colors.value.light,
          "--fs-chip-hover-border-color"     : colors.value.light,
          "--fs-chip-hover-color"            : colors.value.base,
          "--fs-chip-active-background-color": colors.value.light,
          "--fs-chip-active-border-color"    : colors.value.light,
          "--fs-chip-active-color"           : colors.value.base
        };
      }
    });

    const classes = computed((): string[] => {
      const classNames: string[] = ["fs-chip"];
      if (props.clickable) {
        classNames.push("fs-chip-clickable");
      }
      return classNames;
    });

    return {
      FSRouterLink,
      classes,
      colors,
      style
    };
  }
});
</script>