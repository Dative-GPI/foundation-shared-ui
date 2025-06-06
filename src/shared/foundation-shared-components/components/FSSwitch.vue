<template>
  <FSCol
    padding="8px 0px"
  >
    <FSRow
      gap="16px"
      :wrap="false"
    >
      <v-switch
        v-if="variant == 'left'"
        class="fs-switch"
        hide-details
        inset
        :validateOn="validateOn"
        :rules="$props.rules"
        :ripple="false"
        :style="style"
        :disabled="$props.disabled"
        :modelValue="$props.modelValue"
        @update:modelValue="onToggle"
        v-bind="$attrs"
      />
      <FSCol>
        <FSSpan
          v-if="$props.label"
          class="fs-switch-label"
          :style="style"
          :font="font"
          @click.stop="onToggle"
        >
          {{ $props.label }}
        </FSSpan>
        <slot
          name="description"
        >
          <FSSpan
            v-if="$props.description"
            class="fs-switch-description"
            font="text-overline"
            :style="style"
            :lineClamp="2"
          >
            {{ $props.description }}
          </FSSpan>
        </slot>
      </FSCol>
      <FSRow
        v-if="variant == 'right'"
        align="center-right"
      >
        <v-switch
          class="fs-switch"
          hide-details
          inset
          :disabled="$props.disabled"
          :validateOn="validateOn"
          :rules="$props.rules"
          :ripple="false"
          :style="style"
          :modelValue="$props.modelValue"
          @update:modelValue="onToggle"
          v-bind="$attrs"
        />
      </FSRow>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";

import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSSwitch",
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
    modelValue: {
      type: Boolean as PropType<boolean | null>,
      required: false,
      default: false
    },
    variant: {
      type: String as PropType<"left" | "right">,
      required: false,
      default: "left"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { validateOn, getMessages } = useRules();
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => {
      if (props.disabled) {
        return {
          "--fs-switch-translate-x": props.modelValue ? "8px" : "-8px",
          "--fs-switch-cursor"     : "default",
          "--fs-switch-track-color": props.modelValue ? colors.value.light : lights.base,
          "--fs-switch-thumb-color": backgrounds.base,
          "--fs-switch-color"      : lights.dark
        };
      }
      if (messages.value.length) {
        return {
          "--fs-switch-translate-x": props.modelValue ? "8px" : "-8px",
          "--fs-switch-cursor"     : "pointer",
          "--fs-switch-track-color": errors.base,
          "--fs-switch-thumb-color": backgrounds.base,
          "--fs-switch-color"      : darks.base
        };
      }
      return {
        "--fs-switch-translate-x": props.modelValue ? "8px" : "-8px",
        "--fs-switch-cursor"     : "pointer",
        "--fs-switch-track-color": props.modelValue ? colors.value.base : lights.dark,
        "--fs-switch-thumb-color": backgrounds.base,
        "--fs-switch-color"      : darks.base
      };
    });

    const font = computed((): "text-button" | "text-body" => props.modelValue ? "text-button" : "text-body");

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onToggle = (): void => {
      if (props.disabled) {
        return;
      }
      emit("update:modelValue", !props.modelValue);
    }

    return {
      validateOn,
      messages,
      style,
      font,
      onToggle
    };
  }
});
</script>