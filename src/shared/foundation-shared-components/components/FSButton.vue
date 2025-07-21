<template>
  <FSCard
    v-if="$props.variant !== 'icon'"
    :clickable="true"
    :disabled="$props.disabled"
    :padding="padding"
    :variant="$props.variant"
    :color="$props.color"
    :load="$props.load"
    :href="$props.href"
    :to="$props.to"
    @click.stop="onClick"
    v-bind="$attrs"
  >
    <FSRow
      v-if="$props.direction === 'row'"
      align="center-center"
      width="fill"
      :wrap="false"
    >
      <slot
        name="prepend"
        v-bind="{ color: $props.color, colors }"
      >
        <FSIcon
          v-if="$props.prependIcon || $props.icon"
          :size="$props.iconSize"
        >
          {{ $props.prependIcon ?? $props.icon }}
        </FSIcon>
      </slot>
      <slot
        v-bind="{ color: $props.color, colors }"
      >
        <FSSpan
          v-if="$props.label"
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
          :size="$props.iconSize"
        >
          {{ $props.appendIcon }}
        </FSIcon>
      </slot>
    </FSRow>
    <FSCol
      v-else
      align="center-center"
      width="fill"
    >
      <slot
        name="prepend"
        v-bind="{ color: $props.color, colors }"
      >
        <FSIcon
          v-if="$props.prependIcon || $props.icon"
          :size="$props.iconSize"
        >
          {{ $props.prependIcon ?? $props.icon }}
        </FSIcon>
      </slot>
      <slot
        v-bind="{ color: $props.color, colors }"
      >
        <FSSpan
          v-if="$props.label"
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
          :size="$props.iconSize"
        >
          {{ $props.appendIcon }}
        </FSIcon>
      </slot>
    </FSCol>
  </FSCard>
  <FSRouterLink
    v-else
    :to="$props.to"
    :href="$props.href"
    :class="iconClasses"
    @click.stop="onClick"
  >
    <FSRow
      width="hug"
      align="center-left"
      v-bind="$attrs"
    >
      <template
        v-if="$props.load"
      >
        <v-progress-circular
          class="fs-button-load"
          width="2"
          size="20"
          :indeterminate="true"
          :color="loadColor"
        />
      </template>
      <template
        v-else
      >
        <FSIcon
          v-if="$props.icon"
          :color="iconVariantColor"
          :size="$props.iconSize"
        >
          {{ $props.icon }}
        </FSIcon>
        <FSText
          v-if="$props.label"
          :color="iconVariantColor"
        >
          {{ $props.label }}
        </FSText>
      </template>
    </FSRow>
  </FSRouterLink>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, useSlots } from "vue";
import { type RouteLocation } from "vue-router";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSRouterLink from './FSRouterLink.vue';
import FSText from "./FSText.vue";
import FSIcon from "./FSIcon.vue";
import FSCard from './FSCard.vue';
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

const PADDING_ICON_ONLY = "7px";
const PADDING_LABEL_ONLY = ["9px 16px", "9px 12px"];
const PADDING_ICON_LABEL = ["7px 16px", "7px 12px"];

const DEFAULT_PADDING = PADDING_ICON_LABEL;

export default defineComponent({
  name: "FSButton",
  components: {
    FSRouterLink,
    FSCard,
    FSText,
    FSIcon,
    FSCol,
    FSRow
  },
  props: {
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: DEFAULT_PADDING
    },
    to: {
      type: Object as PropType<RouteLocation | null>,
      required: false,
      default: null
    },
    href: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    prependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: [String, Function] as PropType<string | Function | null>,
      required: false,
      default: null
    },
    appendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    iconSize: {
      type: [Array, String, Number] as PropType<"s" | "m" | "l" | string[] | number[] | string | number | null>,
      required: false,
      default: () => ["24px", "20px"]
    },
    variant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    direction: {
      type: String as PropType<"row" | "column">,
      required: false,
      default: "row"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    load: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const darks = getColors(ColorEnum.Dark);
    const slots = useSlots();

    const iconVariantColor = computed((): string => {
      if (props.disabled) {
        return ColorEnum.Light;
      }
      if (props.color === ColorEnum.Light) {
        return ColorEnum.Dark;
      }
      return props.color;
    });

    const iconClasses = computed((): string[] => {
      const classNames = ["fs-button-icon"];
      if (props.disabled) {
        classNames.push("fs-button-disabled");
      }
      return classNames;
    });

    const loadColor = computed((): string => {
      switch (props.color) {
        case ColorEnum.Primary:
        case ColorEnum.Success:
        case ColorEnum.Warning:
        case ColorEnum.Error  : return ["standard"].includes(props.variant) ? colors.value.dark : colors.value.light;
        default               : return ["standard"].includes(props.variant) ? darks.dark : darks.soft;
      }
    });

    const padding = computed(() => {
      if (props.padding !== DEFAULT_PADDING) {
        return props.padding;
      }

      const hasIcon = props.prependIcon || props.appendIcon || props.icon
        || !!slots.prepend || !!slots.append;
      
      const hasLabel = props.label || !!slots.default;

      if (!hasLabel && hasIcon) {
        return PADDING_ICON_ONLY;
      }
      else if (hasLabel && !hasIcon) {
        return PADDING_LABEL_ONLY;
      }
      return DEFAULT_PADDING;
    });

    const onClick = (event: MouseEvent) => {
      if (!props.to && !props.href && !props.disabled && !props.load) {
        emit("click", event);
      }
    };

    return {
      colors,
      padding,
      loadColor,
      iconClasses,
      iconVariantColor,
      onClick
    };
  }
});
</script>