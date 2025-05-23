<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :disabled="$props.disabled"
    :messages="messages"
  >
    <template
      v-if="$slots.label"
      v-slot:label="slotData"
    >
      <slot
        name="label"
        v-bind="slotData"
      />
    </template>
    <template
      v-if="$slots.description"
      v-slot:label="slotData"
    >
      <slot
        name="description"
        v-bind="slotData"
      />
    </template>
    <v-text-field
      class="fs-text-field"
      variant="outlined"
      :style="style"
      :type="$props.type"
      :persistentClear="true"
      :hideDetails="true"
      :disabled="$props.disabled"
      :clearable="$props.clearable && !$props.disabled && !!$props.modelValue"
      :rules="$props.rules"
      :validateOn="validateOn"
      :modelValue="$props.modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="slotData"
        />
      </template>
      <template
        #clear
      >
        <slot
          name="clear"
        >
          <FSButton
            v-if="$props.clearable && !$props.disabled && !!$props.modelValue"
            icon="mdi-close"
            variant="icon"
            :color="ColorEnum.Dark"
            @click="$emit('update:modelValue', null)"
          />
        </slot>
      </template>
    </v-text-field>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useBreakpoints, useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSBaseField from "./FSBaseField.vue";
import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSTextField",
  components: {
    FSBaseField,
    FSButton
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
    type: {
      type: String as PropType<"text" | "password" | "number">,
      required: false,
      default: "text"
    },
    modelValue: {
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
    clearable: {
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
  setup(props) {
    const { fontStyles, isMobileSized } = useBreakpoints();
    const { validateOn, getMessages } = useRules();
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
          "--fs-text-field-cursor"             : "default",
          "--fs-text-field-border-color"       : lights.base,
          "--fs-text-field-color"              : lights.dark,
          "--fs-text-field-active-border-color": lights.base,
          "--fs-base-field-input-height"       : isMobileSized.value ? "34px" : "38px",
          ...fontStyles.value
        };
      }
      return {
        "--fs-text-field-cursor"             : "text",
        "--fs-text-field-border-color"       : lights.dark,
        "--fs-text-field-color"              : darks.base,
        "--fs-text-field-active-border-color": darks.dark,
        "--fs-text-field-error-border-color" : errors.base,
        "--fs-base-field-input-height"       : isMobileSized.value ? "34px" : "38px",
        ...fontStyles.value
      };
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    return {
      validateOn,
      ColorEnum,
      messages,
      slots,
      style
    };
  }
});
</script>