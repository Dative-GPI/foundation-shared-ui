<template>
  <v-snackbar
    class="fs-snackbar"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :multi-line="$props.multiLine"
    :location="$props.location"
    :timeout="$props.timeout"
    :style="style"
  >
    <slot>
      <FSRow
        align="center-left"
        :wrap="false"
        gap="12px"
      >
        <FSIcon
          v-if="$props.icon"
        >
          {{ $props.icon }}
        </FSIcon>
        <FSSpan
          v-if="$props.text"
          :ellipsis="!$props.multiLine"
        >
          {{ $props.text }}
        </FSSpan>
      </FSRow>
    </slot>
    <template
      v-if="$slots.actions || $props.closeButton"
      #actions
    >
      <slot
        name="actions"
      >
        <FSButton
          v-if="$props.closeButton"
          icon="mdi-close"
          variant="icon"
          @click="$emit('update:modelValue', false)"
        />
      </slot>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { type ColorBase, ColorEnum, type SnackbarVariant, SnackbarVariants } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSButton from "./FSButton.vue";
import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSSnackbar",
  components: {
    FSButton,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    timeout: {
      type: Number,
      required: false,
      default: 5000
    },
    location: {
      type: String as PropType<"top" | "bottom" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right">,
      required: false,
      default: "bottom"
    },
    multiLine: {
      type: Boolean,
      required: false,
      default: false
    },
    closeButton: {
      type: Boolean,
      required: false,
      default: false
    },
    variant: {
      type: String as PropType<SnackbarVariant>,
      required: false,
      default: SnackbarVariants.Full
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));

    const style = computed((): StyleValue => {
      switch (props.variant) {
        case "standard": return {
          "--fs-snackbar-border-radius": sizeToVar(props.borderRadius),
          "--fs-snackbar-background-color": colors.value.light,
          "--fs-snackbar-color": colors.value.dark
        };
        default: return {
          "--fs-snackbar-border-radius": sizeToVar(props.borderRadius),
          "--fs-snackbar-background-color": colors.value.base,
          "--fs-snackbar-color": colors.value.light
        };
      }
    });

    return {
      style
    };
  }
});
</script>
