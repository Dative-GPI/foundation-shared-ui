<template>
  <FSWrapGroup
    v-if="props.variant === 'wrap'"
    class="fs-option-group"
    :padding="props.padding"
    :gap="props.gap"
    :style="style"
  >
    <template
      v-if="props.values && props.values.length"
    >
      <template
        v-if="!$slots.item"
      >
        <FSOptionItem
          v-for="(item, index) in props.values"
          :padding="props.optionPadding"
          :disabled="props.disabled"
          :prependIcon="item.prependIcon"
          :appendIcon="item.appendIcon"
          :variant="getVariant(item)"
          :color="getColor(item)"
          :class="getClass(item)"
          :label="item.label"
          :icon="item.icon"
          :key="index"
          @click="toggle(item)"
        />
      </template>
      <template
        v-else
      >
        <template
          v-for="item in props.values"
        >
          <slot
            name="item"
            v-bind="{ item, toggle, getVariant, getColor, getClass }"
          />
        </template>
      </template>
    </template>
    <slot
      v-else
      v-bind="{ toggle, getVariant, getColor, getClass }"
    />
  </FSWrapGroup>
  <FSSlideGroup
    v-else-if="props.variant === 'slide'"
    class="fs-option-group"
    :padding="props.padding"
    :gap="props.gap"
    :style="style"
  >
    <template
      v-if="props.values && props.values.length"
    >
      <template
        v-if="!$slots.item"
      >
        <FSOptionItem
          v-for="(item, index) in props.values"
          :padding="props.optionPadding"
          :disabled="props.disabled"
          :prependIcon="item.prependIcon"
          :appendIcon="item.appendIcon"
          :variant="getVariant(item)"
          :color="getColor(item)"
          :class="getClass(item)"
          :label="item.label"
          :icon="item.icon"
          :key="index"
          @click="toggle(item)"
        />
      </template>
      <template
        v-else
      >
        <template
          v-for="item in props.values"
        >
          <slot
            name="item"
            v-bind="{ item, toggle, getVariant, getColor, getClass }"
          />
        </template>
      </template>
    </template>
    <slot
      v-else
      v-bind="{ toggle, getVariant, getColor, getClass }"
    />
  </FSSlideGroup>
  <FSRow
    v-else
    class="fs-option-group-full-width"
    width="100%"
    :padding="props.padding"
    :gap="props.gap"
    :style="style"
    :wrap="false"
  >
    <template
      v-if="props.values && props.values.length"
    >
      <template
        v-if="!$slots.item"
      >
        <FSOptionItem
          v-for="(item, index) in props.values"
          :padding="props.optionPadding"
          :disabled="props.disabled"
          :prependIcon="item.prependIcon"
          :appendIcon="item.appendIcon"
          :variant="getVariant(item)"
          :color="getColor(item)"
          :class="getClass(item)"
          :label="item.label"
          :icon="item.icon"
          :key="index"
          @click="toggle(item)"
        />
      </template>
      <template
        v-else
      >
        <template
          v-for="item in props.values"
        >
          <slot
            name="item"
            v-bind="{ item, toggle, getVariant, getColor, getClass }"
          />
        </template>
      </template>
    </template>
    <slot
      v-else
      v-bind="{ toggle, getVariant, getColor, getClass }"
    />
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { type ColorBase, ColorEnum, type FSToggle } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSOptionItem from "./FSOptionItem.vue";
import FSSlideGroup from "./FSSlideGroup.vue";
import FSWrapGroup from "./FSWrapGroup.vue";

export default defineComponent({
  name: "FSOptionGroup",
  components: {
    FSOptionItem,
    FSSlideGroup,
    FSWrapGroup
  },
  props: {
    values: {
      type: Array as PropType<FSToggle[]>,
      required: false,
      default: () => []
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    },
    variant: {
      type: String as PropType<"wrap" | "slide" | "fullwidth">,
      required: false,
      default: "wrap"
    },
    optionVariant: {
      type: String as PropType<"standard" | "background" | "full">,
      required: false,
      default: "standard"
    },
    activeVariant: {
      type: String as PropType<"standard" | "background" | "full">,
      required: false,
      default: "full"
    },
    optionClass: {
      type: [Array, String] as PropType<string[] | string>,
      required: false,
      default: null
    },
    activeClass: {
      type: [Array, String] as PropType<string[] | string>,
      required: false,
      default: null
    },
    modelValue: {
      type: [Array, String, Number] as PropType<(string | number)[] | string | number | null>,
      required: false,
      default: null
    },
    optionColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Background
    },
    activeColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    singleColor: {
      type: Boolean,
      required: false,
      default: false
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "3px"
    },
    optionPadding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "4px"
    },
    gap: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "8px"
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getColors } = useColors();

    const lights = getColors(ColorEnum.Light);
    const backgrounds = getColors(ColorEnum.Background);
    const colors = getColors(props.optionColor);

    const style = computed((): StyleValue => ({
      "--fs-option-group-background-color": backgrounds.base,
      "--fs-option-group-border-size"     : props.border ? "1px" : "0",
      "--fs-option-group-border-radius"   : sizeToVar(props.borderRadius),
      "--fs-option-group-border-color"    : lights.base
    }));

    const getVariant = (value: FSToggle): "standard" | "background" | "full" => {
      if (Array.isArray(props.modelValue) && props.modelValue.some(v => v === value.id)) {
        return props.activeVariant;
      }
      if (!Array.isArray(props.modelValue) && props.modelValue === value.id) {
        return props.activeVariant;
      }
      return props.optionVariant;
    };

    const getColor = (value: FSToggle): ColorBase => {
      if (Array.isArray(props.modelValue) && props.modelValue.some(v => v === value.id)) {
        return props.singleColor ? colors.dark : props.activeColor;
      }
      if (!Array.isArray(props.modelValue) && props.modelValue === value.id) {
        return props.singleColor ? colors.dark : props.activeColor;
      }
      return props.singleColor ? colors.base : props.optionColor;
    };

    const getClass = (value: FSToggle): string[] | string => {
      if (Array.isArray(props.modelValue) && props.modelValue.some(v => v === value.id)) {
        return props.activeClass;
      }
      if (!Array.isArray(props.modelValue) && props.modelValue === value.id) {
        return props.activeClass;
      }
      return props.optionClass;
    };

    const toggle = (value: FSToggle): void => {
      if (Array.isArray(props.modelValue)) {
        if (props.multiple) {
          if (props.modelValue.length && props.modelValue.every(v => v === value.id)) {
            if (!props.required) {
              emit("update:modelValue", []);
              return;
            }
          }
          else if (props.modelValue.some(v => v === value.id)) {
            emit("update:modelValue", props.modelValue.filter(v => v !== value.id));
            return;
          }
          else {
            emit("update:modelValue", [...props.modelValue, value.id]);
            return;
          }
        }
        else {
          if (props.modelValue.some(v => v === value.id)) {
            if (!props.required) {
              emit("update:modelValue", []);
              return;
            }
          }
          else {
            emit("update:modelValue", [value.id]);
            return;
          }
        }
      }
      else {
        if (props.modelValue === value.id) {
          if (!props.required) {
            emit("update:modelValue", null);
            return;
          }
        }
        else {
          emit("update:modelValue", value.id);
          return;
        }
      }
    };

    return {
      props,
      style,
      getVariant,
      getColor,
      getClass,
      toggle
    };
  }
})
</script>