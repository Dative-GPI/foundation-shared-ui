<template>
  <FSBaseField
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :disabled="$props.disabled"
    :label="$props.label"
    :messages="messages"
  >
    <FSRow
      :wrap="false"
      align="center-left"
    >
      <FSNumberField
        suffix="h"
        :hideHeader="true"
        :modelValue="innerHours"
        :disabled="$props.disabled"
        :rules="[() => messages.length === 0 || '']"
        @update:modelValue="onChangeHours"
      />
      <FSSpan>:</FSSpan>
      <FSNumberField
        suffix="min"
        :hideHeader="true"
        :disabled="$props.disabled"
        :rules="[() => messages.length === 0 || '']"
        :modelValue="innerMinutes"
        @update:modelValue="onChangeMinutes"
      />
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, watch } from "vue";

import { NumberRules } from "@dative-gpi/foundation-shared-components/models";
import { useRules } from "@dative-gpi/foundation-shared-components/composables";

import FSNumberField from "./FSNumberField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSDurationField",
  components: {
    FSNumberField,
    FSBaseField,
    FSSpan,
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
      type: Number as PropType<number | null>,
      required: false,
      default: null
    },
    maxDuration: {
      type: Number as PropType<number | null>,
      required: false,
      default: null
    },
    minDuration: {
      type: Number as PropType<number | null>,
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
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMessages } = useRules();
    const MS_PER_MINUTE = 60 * 1000;
    const MS_PER_HOUR = 60 * MS_PER_MINUTE;

    const innerHours = ref<number | null>(null);
    const innerMinutes = ref<number | null>(null);

    const durationRules = computed(() => {
      const rules: any[] = [...props.rules];
      if (props.required) {
        rules.push(NumberRules.required());
      }
      if (props.minDuration != null) {
        const minHours = Math.floor(props.minDuration / MS_PER_HOUR);
        const minMinutes = Math.floor((props.minDuration % MS_PER_HOUR) / MS_PER_MINUTE);
        const label = minHours > 0 ? `${minHours}h${minMinutes.toString().padStart(2, '0')}` : `${minMinutes}min`;
        rules.push((v: any) => (v != null && v >= props.minDuration!) || `Min. ${label}`);
      }
      if (props.maxDuration != null) {
        const maxHours = Math.floor(props.maxDuration / MS_PER_HOUR);
        const maxMinutes = Math.floor((props.maxDuration % MS_PER_HOUR) / MS_PER_MINUTE);
        const label = maxHours > 0 ? `${maxHours}h${maxMinutes.toString().padStart(2, '0')}` : `${maxMinutes}min`;
        rules.push((v: any) => (v != null && v <= props.maxDuration!) || `Max. ${label}`);
      }
      return rules;
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, durationRules.value));

    const reset = (): void => {
      if (props.modelValue == null) {
        innerHours.value = null;
        innerMinutes.value = null;
        return;
      }
      innerHours.value = Math.floor(props.modelValue / MS_PER_HOUR);
      innerMinutes.value = Math.floor((props.modelValue % MS_PER_HOUR) / MS_PER_MINUTE);
    };

    const emitValue = (): void => {
      const hours = innerHours.value ?? 0;
      const minutes = innerMinutes.value ?? 0;
      emit("update:modelValue", (hours * MS_PER_HOUR) + (minutes * MS_PER_MINUTE));
    };

    const onChangeHours = (value: number | null): void => {
      innerHours.value = value;
      emitValue();
    };

    const onChangeMinutes = (value: number | null): void => {
      value = Math.min(59, Math.max(0, value ?? 0));
      innerMinutes.value = value;
      emitValue();
    };

    watch(() => props.modelValue, () => {
      const currentHours = innerHours.value ?? 0;
      const currentMinutes = innerMinutes.value ?? 0;
      const currentTotal = (currentHours * MS_PER_HOUR) + (currentMinutes * MS_PER_MINUTE);
      if (currentTotal !== (props.modelValue ?? 0)) {
        reset();
      }
    }, { immediate: true });

    return {
      NumberRules,
      innerHours,
      innerMinutes,
      durationRules,
      messages,
      onChangeHours,
      onChangeMinutes
    };
  }
});
</script>
