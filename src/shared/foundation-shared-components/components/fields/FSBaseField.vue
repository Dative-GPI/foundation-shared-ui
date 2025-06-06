<template>
  <FSCol
    :maxWidth="$props.maxWidth"
    :style="style"
  >
    <slot
      v-if="!$props.hideHeader"
      name="label"
    >
      <FSRow
        gap="40px"
        :wrap="false"
      >
        <FSRow
          gap="2px"
          :width="widths.label"
          :wrap="false"
        >
          <FSSpan
            class="fs-base-field-label"
            font="text-overline"
          >
            {{ $props.label }}
          </FSSpan>
          <FSSpan
            v-if="$props.label && $props.required"
            class="fs-base-field-label"
            font="text-overline"
            :ellipsis="false"
            :style="style"
          >
            *
          </FSSpan>
        </FSRow>
        <FSRow
          align="center-right"
          :width="widths.messages"
        >
          <FSSpan
            v-if="$props.messages && $props.messages.length > 0"
            class="fs-base-field-messages"
            font="text-overline"
            :style="style"
          >
            {{ $props.messages.join(", ") }}
          </FSSpan>
        </FSRow>
      </FSRow>
    </slot>
    <slot />
    <slot
      name="description"
    >
      <FSSpan
        v-if="$props.description"
        class="fs-base-field-description"
        font="text-overline"
        :lineClamp="2"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSBaseField",
  components: {
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    messages: {
      type: Array,
      required: false,
      default: () => []
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    minWidth: {
      type: String,
      required: false,
      default: "120px"
    },
    maxWidth: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "600px"
    }
  },
  setup(props) {
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => {
      if (props.disabled) {
        return {
          "--fs-base-field-color"    : lights.dark,
          "--fs-base-field-min-width": props.minWidth
        };
      }
      return {
        "--fs-base-field-color"      : darks.base,
        "--fs-base-field-error-color": errors.base,
        "--fs-base-field-min-width"  : props.minWidth
      };
    });

    const widths = computed(() => ({
      label: props.messages && props.messages.length ? "calc(50% - 40px)" : "100%",
      messages: props.messages && props.messages.length ? "50%" : "0"
    }));

    return {
      widths,
      style,
      slots
    };
  }
});
</script>