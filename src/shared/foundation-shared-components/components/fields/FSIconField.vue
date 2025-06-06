<template>
  <FSCol
    :maxWidth="$props.maxWidth"
  >
    <FSTextField
      :label="$props.label"
      :description="$props.description"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :disabled="$props.disabled"
      :rules="$props.rules"
      :messages="messages"
      :validateOn="validateOn"
      :validationValue="$props.modelValue"
      :maxWidth="null"
      v-model="innerValue"
      v-bind="$attrs"
    >
      <template
        #append-inner
      >
        <FSIcon
          v-if="$props.modelValue"
          size="l"
        >
          {{ $props.modelValue }}
        </FSIcon>
        <slot
          name="append-inner"
        />
      </template>
    </FSTextField>
    <FSToggleSet
      ref="toggleSetRef"
      variant="slide"
      :buttonColor="$props.buttonColor"
      :activeColor="$props.activeColor"
      :modelValue="$props.modelValue"
      :required="$props.required"
      :disabled="$props.disabled"
      :values="icons"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import type { PropType, StyleValue } from "vue";
import { computed, defineComponent, ref, watch } from "vue";

import { Icons, sortByLevenshteinDistance } from "@dative-gpi/foundation-shared-components/utils";
import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import type { FSToggle } from "@dative-gpi/foundation-shared-components/models";

import FSToggleSet from "../FSToggleSet.vue";
import FSTextField from "./FSTextField.vue";
import FSIcon from "../FSIcon.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSIconField",
  components: {
    FSToggleSet,
    FSTextField,
    FSIcon,
    FSCol,
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
    preSelection: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    buttonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    activeVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    activeColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
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
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    maxWidth: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "600px"
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { validateOn, getMessages } = useRules();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const toggleSetRef = ref<HTMLElement | null>(null);
    const innerValue = ref<string | null>(null);

    const style = computed((): StyleValue => {
      if (props.disabled) {
        return {
          "--fs-icon-field-color": lights.dark
        };
      }
      return {
        "--fs-icon-field-color"      : darks.base,
        "--fs-icon-field-error-color": errors.base
      };
    });

    const icons = computed((): FSToggle[] => {
      const innerIcons: FSToggle[] = [];
      if (!innerValue.value || innerValue.value.length < 3) {
        if (props.preSelection && props.preSelection.length) {
          innerIcons.push(...props.preSelection.map((icon: string) => ({
            id: icon,
            prependIcon: icon
          })));
        }
        else {
          innerIcons.push(...Icons.slice(0, 32).map((icon) => ({
            id: icon.name,
            prependIcon: icon.name
          })));
        }
      }
      else {
        const matchingIcons = Icons.filter((icon) => {
          return icon.fullText.toLowerCase().includes(innerValue.value!.toLowerCase());
        }).sort((a, b) => sortByLevenshteinDistance(a.name, b.name, innerValue.value!));
        innerIcons.push(...matchingIcons.slice(0, Math.min(32, matchingIcons.length)).map((icon) => ({
          id: icon.name,
          prependIcon: icon.name
        })));
      }
      if (props.modelValue) {
        const selectedIcon = innerIcons.find((icon) => icon.id === props.modelValue);
        if (selectedIcon) {
          innerIcons.splice(innerIcons.indexOf(selectedIcon), 1);
          innerIcons.unshift(selectedIcon);
        }
        else {
          innerIcons.unshift({
            id: props.modelValue,
            prependIcon: props.modelValue
          });
        }
      }
      return innerIcons;
    });

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules));

    watch(() => props.modelValue, () => {
      if (toggleSetRef.value) {
        (toggleSetRef.value as any).goToStart();
      }
    });

    return {
      toggleSetRef,
      innerValue,
      validateOn,
      messages,
      style,
      icons
    };
  }
})
</script>