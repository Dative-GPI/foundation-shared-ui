<template>
  <component
    :is="wrapperComponent"
    :class="['fs-card-wrapper', $props.class]"
    :to="$props.to"
    :href="$props.href"
    :disabled="$props.disabled"
    :load="$props.load"
    :type="actualWrapperType"
    :style="style"
    v-on="wrapperListeners"
  >
    <div
      :class="classes"
    >
      <slot
        name="default"
        v-bind="{ contentVariant }"
      />
      <v-progress-circular
        v-if="$props.load"
        class="fs-card-load__spinner"
        width="2"
        size="24"
        :indeterminate="true"
        :color="loadColor"
      />
      <FSRow
        v-if="$slots['top-right']"
        class="fs-card-top-right"
      >
        <slot
          name="top-right"
        />
      </FSRow>
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref, type PropType, type StyleValue } from "vue";
import { type RouteLocation } from "vue-router";

import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { type CardVariant, type ColorBase, ColorEnum, CardVariants, type ColorBaseVariations } from "@dative-gpi/foundation-shared-components/models";

import FSRow from "./FSRow.vue";
import FSRouterLink from "./FSRouterLink.vue";

export default defineComponent({
  name: "FSCard",
  components: {
    FSRow
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: null
    },
    maxWidth: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: null
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: "0"
    },
    class: {
      type: [String, Array] as PropType<string | string[] | null>,
      default: null
    },
    to: {
      type: Object as PropType<RouteLocation | null>,
      default: null
    },
    href: {
      type: String as PropType<string | null>,
      default: null
    },
    variant: {
      type: String as PropType<CardVariant>,
      required: false,
      default: CardVariants.Background
    },
    clickable: {
      type: Boolean,
      default: false
    },
    color: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      default: ColorEnum.Background
    },
    border: {
      type: Boolean,
      default: true
    },
    borderRadius: {
      type: [String, Number],
      default: "4px"
    },
    borderStyle: {
      type: String as PropType<"solid" | "dashed" | "dotted" | "double" | "groove" | "ridge" | "inset" | "outset" | "none">,
      default: "solid"
    },
    borderColor: {
      type: [Array, String] as PropType<ColorBase | null | string>,
      default: null
    },
    elevation: {
      type: Boolean,
      default: false
    },
    topRightPadding: {
      type: [String, Number],
      default: "4px"
    },
    type: {
      type: String as PropType<"button" | "submit" | "reset" | null>,
      default: null
    },
    load: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props, { emit, attrs }) {
    const { getColors, getGradients } = useColors();

    const active = ref(false);
    const hover = ref(false);

    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const colors = computed(() => {
      if (Array.isArray(props.color)) {
        return getColors(props.color[0]);
      }
      return getColors(props.color);
    });

    const gradients = computed(() => getGradients(props.color, 135));

    const actualClickable = computed((): boolean => {
      if (props.clickable === false) {
        return false;
      }
      return props.clickable || !!props.to || !!props.href || !!attrs.onClick;
    });
    
    const wrapperComponent = computed(() => {
      if (!actualClickable.value) {
        return "div";
      }
      if (props.href) {
        return "a";
      }
      if (props.to) {
        return FSRouterLink;
      }
      return "button";
    });

    const actualWrapperType = computed(() => {
      if (props.type) {
        return props.type;
      }
      if (wrapperComponent.value === "button") {
        return "button";
      }
      return null;
    });

    const contentVariant = computed((): ColorBaseVariations => {
      if (active.value) {
        return "darkContrast";
      }
      if (hover.value) {
        return "baseContrast";
      }
      switch (props.variant) {
        case "standard"  : return "lightContrast";
        case "background": return "base";
        case "full"      : return "baseContrast";
      }
      return "base";
    });

    const borderColor = computed((): ColorBase => {
      if (props.borderColor) {
        return getColors(props.borderColor).base;
      }

      switch (props.variant) {
        case "background":
          return lights.dark;
        case "standard"  :
          if (Array.isArray(props.color)) {
            return colors.value.lightContrast!;
          }
          if (([ColorEnum.Background, ColorEnum.Light, ColorEnum.Dark] as ColorBase[]).includes(props.color)) {
            return lights.dark;
          }
          return colors.value.lightContrast!;
        case "full"      : return colors.value.base;
        case "gradient"  : return colors.value.lightContrast!;
      }
    });

    const loadColor = computed((): string => {
      return colors.value[contentVariant.value] ?? colors.value.baseContrast!;
    });

    const style = computed((): StyleValue => {
      const baseStyle = {
        "--fs-card-border-size"     : props.border ? "1px" : "0",
        "--fs-card-border-style"    : props.borderStyle,
        "--fs-card-border-radius"   : sizeToVar(props.borderRadius),
        "--fs-card-padding"         : sizeToVar(props.padding),
        "--fs-card-height"          : sizeToVar(props.height),
        "--fs-card-width"           : sizeToVar(props.width),
        "--fs-card-max-width"       : sizeToVar(props.maxWidth, "unset"),
        "--fs-card-top-right-padding": sizeToVar(props.topRightPadding)
      };
      if (props.disabled) {
        return {
          ...baseStyle,
          "--fs-card-background-color": lights.light,
          "--fs-card-border-color"    : lights.dark,
          "--fs-card-color"           : lights.dark
        };
      }
      
      switch (props.variant) {
        case "background": return {
          ...baseStyle,
          "--fs-card-background-color": backgrounds.base,
          "--fs-card-border-color"    : borderColor.value,
          "--fs-card-color"           : darks.base,
          "--fs-card-hover-background-color" : colors.value.base,
          "--fs-card-hover-border-color"     : colors.value.baseContrast!,
          "--fs-card-hover-color"            : colors.value.baseContrast!
        }
        case "standard": return {
          ...baseStyle,
          "--fs-card-background-color": colors.value.light,
          "--fs-card-border-color"    : borderColor.value,
          "--fs-card-color"           : colors.value.lightContrast!,
          "--fs-card-hover-background-color" : colors.value.base,
          "--fs-card-hover-border-color"     : colors.value.base,
          "--fs-card-hover-color"            : colors.value.baseContrast!
        }
        case "full": return {
          ...baseStyle,
          "--fs-card-background-color": colors.value.base,
          "--fs-card-border-color"    : borderColor.value,
          "--fs-card-color"           : colors.value.baseContrast!,
          "--fs-card-hover-background-color" : colors.value.base,
          "--fs-card-hover-border-color"     : colors.value.base,
          "--fs-card-hover-color"            : colors.value.baseContrast!
        }
        case "gradient": return {
          ...baseStyle,
          "--fs-card-background-color": gradients.value.base,
          "--fs-card-border-color"    : borderColor.value,
          "--fs-card-color"           : colors.value.lightContrast!
        }
      }
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-card"];
      switch(props.variant) {
        case "gradient": 
          classNames.push("fs-card-gradient"); 
          break;
        case "background":
          classNames.push("fs-card-background");
          break;
        default:
          classNames.push("fs-card-background");
          break;
      }

      if (actualClickable.value) {
        classNames.push("fs-card-clickable");
      }
      if (props.disabled) {
        classNames.push("fs-card-disabled");
      }
      if (props.load) {
        classNames.push("fs-card-load");
      }
      if (props.elevation) {
        classNames.push("fs-card-elevation");
      }
      
      return classNames;
    });
    
    const wrapperListeners = computed(() => {
      if (actualClickable.value && !props.disabled) {
        return {
          mouseover: () => { hover.value = true },
          mouseleave: () => { hover.value = false },
          mousedown: () => { active.value = true },
          mouseup: () => { active.value = false },
          click: onClick
        };
      }
      return {};
    });

    const onClick = (event: MouseEvent) => {
      if (!actualClickable.value || props.disabled || props.load || props.href || props.to) {
        return;
      }
      emit("click", event);
    };

    return {
      actualWrapperType,
      wrapperComponent,
      contentVariant,
      FSRouterLink,
      loadColor,
      classes,
      active,
      hover,
      style,
      onClick,
      wrapperListeners
    };
  }
});
</script>