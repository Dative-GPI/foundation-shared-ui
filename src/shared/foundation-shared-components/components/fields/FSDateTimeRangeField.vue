<template>
  <FSTextField
    class="fs-date-field"
    :label="$props.label"
    :description="$props.description"
    :color="$props.color"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :disabled="$props.disabled"
    :readonly="true"
    :rules="$props.rules"
    :messages="messages"
    :validateOn="validateOn"
    :validationValue="$props.modelValue"
    :modelValue="toShortTimeFormat"
    @click="onClick"
    @update:modelValue="onClear"
    v-bind="$attrs"
  >
    <template
      #prepend-inner
    >
      <slot
        name="prepend-inner"
      >
        <FSButton
          variant="icon"
          icon="mdi-calendar"
          :disabled="$props.disabled"
          :color="ColorEnum.Dark"
        />
      </slot>
    </template>
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSTextField>
  <FSDateTimeRangeDialog
    :title="$props.label"
    :submitButtonColor="$props.color"
    v-model:dialog="dialog"
    :modelValue="$props.modelValue"
    @update:modelValue="onSubmit($event)"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { useRules } from "@dative-gpi/foundation-shared-components/composables";

import FSDateTimeRangeDialog from "./FSDateTimeRangeDialog.vue";
import FSTextField from "./FSTextField.vue";
import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSDateTimeRangeField",
  components: {
    FSDateTimeRangeDialog,
    FSTextField,
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
    modelValue: {
      type: Array as PropType<number[] | null>,
      required: false,
      default: () => null
    },
    color: {
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { epochToShortTimeFormat } = useDateFormat();
    const { validateOn, getMessages } = useRules();

    const dialog = ref(false);

    const toShortTimeFormat = computed((): string => {
      if (!props.modelValue || !Array.isArray(props.modelValue) || !props.modelValue.length) {
        return "";
      }
      return props.modelValue.map((epoch) => epochToShortTimeFormat(epoch)).join(" - ");
    });

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules, true));

    const onClick = (): void => {
      if (!props.disabled) {
        dialog.value = true;
      }
    };

    const onSubmit = (value: number[]): void => {
      emit("update:modelValue", value);
      dialog.value = false;
    };

    const onClear = (): void => {
      emit("update:modelValue", null);
    };

    return {
      toShortTimeFormat,
      validateOn,
      ColorEnum,
      messages,
      dialog,
      onSubmit,
      onClear,
      onClick,
    };
  }
});
</script>