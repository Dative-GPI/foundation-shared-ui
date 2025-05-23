<template>
  <FSCol>
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
      @keydown.enter="onAdd"
      v-model="innerValue"
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
        #append-inner
      >
        <FSButton
          variant="icon"
          icon="mdi-tag-outline"
          :disabled="$props.disabled"
          :color="ColorEnum.Dark"
          @click="onAdd"
        />
        <slot
          name="append-inner"
        />
      </template>
    </FSTextField>
    <FSTagGroup
      :tagVariant="$props.tagVariant"
      :showRemove="!$props.disabled"
      :tags="$props.modelValue"
      :color="$props.tagColor"
      @remove="onRemove"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue } from "vue";

import { useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSTextField from "./FSTextField.vue";
import FSTagGroup from "../FSTagGroup.vue";
import FSButton from "../FSButton.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSTagField",
  components: {
    FSTextField,
    FSTagGroup,
    FSButton,
    FSCol
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
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    tagVariant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "full"
    },
    tagColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const {validateOn, getMessages} = useRules();
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots["append-inner"];

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const innerValue = ref("");

    const style = computed((): StyleValue => {
      if (props.disabled) {
        return {
          "--fs-tag-field-color": lights.dark
        };
      }
      return {
        "--fs-tag-field-color"      : darks.base,
        "--fs-tag-field-error-color": errors.base
      };
    });

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules));

    const onAdd = (event: Event): void => {
      event.stopImmediatePropagation();
      event.preventDefault();
      if (props.disabled) {
        return;
      }
      const tags = props.modelValue ?? [];
      if (!innerValue.value.length || tags.includes(innerValue.value)) {
        return;
      }
      emit("update:modelValue", tags.concat(innerValue.value));
      innerValue.value = "";
    }

    const onRemove = (label: string): void => {
      if (props.disabled) {
        return;
      }
      const tags = props.modelValue ?? [];
      if (!tags.length || !tags.includes(label)) {
        return;
      }
      emit("update:modelValue", tags.filter(t => t !== label));
    }

    return {
      innerValue,
      validateOn,
      ColorEnum,
      messages,
      slots,
      style,
      onRemove,
      onAdd
    };
  }
});
</script>