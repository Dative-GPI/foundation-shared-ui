<template>
  <FSCol
    width="hug"
  >
    <v-radio
      hide-details
      :ripple="false"
      :rules="$props.rules"
      :validateOn="validateOn"
      :modelValue="$props.selected"
      @click.prevent
      @blur="blurred = true"
      v-bind="$attrs"
    >
      <template #input>
        <FSRow
          align="center-left"
          width="hug"
          :style="style"
          @click.stop="onToggle"
        >
          <FSIcon
            class="fs-radio"
            size="l"
            :style="style"
          >
            {{ icon }}
          </FSIcon>
          <slot>
            <FSSpan
              v-if="$props.label"
              class="fs-radio-label"
              :style="style"
              :font="font"
            >
              {{ $props.label }}
            </FSSpan>
          </slot>
        </FSRow>
      </template>
    </v-radio>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-radio-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSRadio",
  components: {
    FSIcon,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    modelValue: {
      type: [String, Boolean, Number],
      required: true
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    rules: {
      type: Array as PropType<Function[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { validateOn, blurred, getMessages } = useRules();
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-radio-cursor"     : "default",
          "--fs-radio-radio-color": props.selected ? colors.value.light : lights.base,
          "--fs-radio-color"      : lights.dark
        };
      }
      if (messages.value.length) {
        return {
          "--fs-radio-cursor"     : "pointer",
          "--fs-radio-radio-color": errors.base,
          "--fs-radio-color"      : darks.base
        }
      }
      return {
        "--fs-radio-cursor"     : props.selected ? "default" : "pointer",
        "--fs-radio-radio-color": props.selected ? colors.value.base : darks.base,
        "--fs-radio-color"      : darks.base
      };
    });

    const icon = computed((): string => props.selected ? "mdi-radiobox-marked" : "mdi-radiobox-blank");

    const font = computed((): string => props.selected ? "text-button" : "text-body");

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onToggle = (): void => {
      if (!props.editable) {
        return;
      }
      if (!props.selected) {
        emit("update:modelValue", props.modelValue);
      }
    };

    return {
      validateOn,
      messages,
      blurred,
      style,
      icon,
      font,
      onToggle
    };
  }
});
</script>