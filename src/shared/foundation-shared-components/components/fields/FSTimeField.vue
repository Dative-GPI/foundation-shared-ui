<template>
  <FSCol>
    <slot v-if="!$props.hideHeader" name="label">
      <FSRow :wrap="false">
        <FSSpan
          v-if="$props.label"
          class="fs-time-field-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-time-field-label"
          style="margin-left: -8px;"
          font="text-overline"
          :ellipsis="false"
          :style="style"
        >
          *
        </FSSpan>
        <v-spacer style="min-width: 40px;" />
        <FSSpan
          v-if="messages.length > 0"
          class="fs-time-field-messages"
          font="text-overline"
          :style="style"
        >
          {{ messages.join(", ") }}
        </FSSpan>
      </FSRow>
    </slot>
    <FSRow>
      <FSNumberField
        :editable="$props.editable"
        :hideHeader="true"
        :rules="$props.rules"
        :messages="messages"
        :validateOn="validateOn"
        :validationValue="$props.modelValue"
        :modelValue="innerTime"
        @update:modelValue="onSubmitValue"
        v-bind="$attrs"
        >
        <template v-for="(_, name) in slots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </FSNumberField>
      <FSSelectField
        class="fs-time-field-select"
        :editable="$props.editable"
        :hideHeader="true"
        :clearable="false"
        :items="timeScale"
        :modelValue="selectedUnit.id"
        @update:modelValue="onSubmitTimeScale"
      />
    </FSRow>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-time-field-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { getTimeScaleIndex, timeScale } from "@dative-gpi/foundation-shared-components/utils";
import { useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSNumberField from "./FSNumberField.vue";
import FSSelectField from "./FSSelectField.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTimeField",
  components: {
    FSNumberField,
    FSSelectField,
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
      type: Number,
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
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);
    
    const innerTime = ref(props.modelValue);
    const selectedUnit = ref(timeScale[0]);

    if (getTimeScaleIndex(props.modelValue) !== 0) {
      selectedUnit.value = timeScale[getTimeScaleIndex(props.modelValue)];
      innerTime.value = props.modelValue / selectedUnit.value.id;
    }

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-time-field-cursor"             : "default",
          "--fs-time-field-border-color"       : lights.base,
          "--fs-time-field-color"              : lights.dark,
          "--fs-time-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-time-field-cursor"             : "text",
        "--fs-time-field-border-color"       : lights.dark,
        "--fs-time-field-color"              : darks.base,
        "--fs-time-field-active-border-color": darks.dark,
        "--fs-time-field-error-color"        : errors.base,
        "--fs-time-field-error-border-color" : errors.base
      };
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onSubmitValue = (value: number): void => {
      innerTime.value = value;
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    const onSubmitTimeScale = (value: number): void => {
      selectedUnit.value = timeScale.find((item) => item.id === value);
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    return {
      selectedUnit,
      validateOn,
      innerTime,
      timeScale,
      messages,
      blurred,
      style,
      onSubmitTimeScale,
      onSubmitValue
    };
  }
});
</script>
