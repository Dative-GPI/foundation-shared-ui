<template>
  <FSRow
    gap="12px"
    :wrap="false"
  >
    <FSRadioGroup
      :values="availablePeriods"
      :disabled="disabled"
      v-model="selectedPeriod"
    />
    <FSRow
      align="center-left"
      height="fill"
      gap="12px"
      :wrap="false"
    >
      <FSDivider
        :vertical="true"
      />
      <FSPeriodicDailyField
        v-if="selectedPeriod === CronPeriod.Daily"
        :disabled="disabled"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
      <FSPeriodicWeeklyField
        v-else-if="selectedPeriod === CronPeriod.Weekly"
        :disabled="disabled"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
      <FSPeriodicMonthlyField
        v-else-if="selectedPeriod === CronPeriod.Monthly"
        :disabled="disabled"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
      <FSPeriodicYearlyField
        v-else-if="selectedPeriod === CronPeriod.Yearly"
        :disabled="disabled"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { ref, defineComponent, type PropType, watch } from "vue";

import { CronPeriod } from "@dative-gpi/foundation-shared-domain/enums";
import { availablePeriods, getCronPeriod } from "@dative-gpi/foundation-shared-components/tools";

import FSPeriodicMonthlyField from "./FSPeriodicMonthlyField.vue";
import FSPeriodicWeeklyField from "./FSPeriodicWeeklyField.vue";
import FSPeriodicYearlyField from "./FSPeriodicYearlyField.vue";
import FSPeriodicDailyField from "./FSPeriodicDailyField.vue";
import FSRadioGroup from "../../FSRadioGroup.vue";
import FSDivider from "../../FSDivider.vue";
import FSRow from "../../FSRow.vue";


export default defineComponent({
  name: "FSPeriodicField",
  components: {
    FSPeriodicMonthlyField,
    FSPeriodicWeeklyField,
    FSPeriodicYearlyField,
    FSPeriodicDailyField,
    FSRadioGroup,
    FSDivider,
    FSRow
  },
  props: {
    modelValue: {
      type: String as PropType<string>,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    
    const selectedPeriod = ref(CronPeriod.Daily);

    watch(() => selectedPeriod.value, () => {
      if (getCronPeriod(props.modelValue).value == selectedPeriod.value) {
        return;
      }
      const period = availablePeriods.find((item) => item.value == selectedPeriod.value);
      if (!period) {
        return;
      }
      emit('update:modelValue', period.item.default);
    });

    watch(() => props.modelValue, () => {
      selectedPeriod.value = getCronPeriod(props.modelValue).value;
    }, { immediate: true });

    return {
      availablePeriods,
      selectedPeriod,
      CronPeriod
    };
  }
});
</script>