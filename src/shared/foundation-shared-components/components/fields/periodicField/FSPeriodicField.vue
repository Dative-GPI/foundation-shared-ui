<template>
  <FSRow
    gap="12px"
    :wrap="false"
  >
    <FSRadioGroup
      :values="availablePeriod"
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
        v-if="selectedPeriod === 'daily'"
        :disabled="disabled"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
      <FSPeriodicWeeklyField
        v-else-if="selectedPeriod === 'weekly'"
        :disabled="disabled"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
      <FSPeriodicMonthlyField
        v-else-if="selectedPeriod === 'monthly'"
        :disabled="disabled"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
      <FSPeriodicYearlyField
        v-else-if="selectedPeriod === 'yearly'"
        :disabled="disabled"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { ref, defineComponent, type PropType, watch } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

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
    const { $tr } = useTranslationsProvider();

    const availablePeriod = [
      { label: $tr("ui.common.daily", "Daily")    , value: "daily"  , item: { default : "0 12 */1 * *"} },
      { label: $tr("ui.common.weekly", "Weekly")  , value: "weekly" , item: { default : "0 12 * * 1"} },
      { label: $tr("ui.common.monthly", "Monthly"), value: "monthly", item: { default : "0 12 1 * *"} },
      { label: $tr("ui.common.yearly", "Yearly")  , value: "yearly" , item: { default : "0 12 1 1 *"} }
    ];
    
    const selectedPeriod = ref("daily");

    const getPeriod = (value: string) => {
      const cronArray = value.split(" ");
      if (cronArray[3] !== "*") {
        return "yearly";
      }
      else if(!cronArray[2].includes("*") || cronArray[2].includes("-")) {
        return "monthly";
      }
      else if(cronArray[4] !== "*") {
        return "weekly";
      }
      return "daily";
    };

    watch(() => selectedPeriod.value, () => {
      if (getPeriod(props.modelValue) === selectedPeriod.value) {
        return;
      }
      const period = availablePeriod.find((item) => item.value === selectedPeriod.value);
      if (!period) {
        return;
      }
      emit('update:modelValue', period.item.default);
    });

    watch(() => props.modelValue, () => {
      selectedPeriod.value = getPeriod(props.modelValue);
    }, { immediate: true });

    return {
      availablePeriod,
      selectedPeriod
    };
  }
});
</script>