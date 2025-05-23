<template>
  <FSBaseField
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :disabled="$props.disabled"
    :label="$props.label"
    :messages="messages"
  >
    <FSForm
      v-model="valid"
    >
      <FSRow
        :wrap="false"
      >
        <FSSelectDateSetting
          minWidth="180px"
          :lastPeriod="$props.lastPeriod"
          :disabled="$props.disabled"
          :variant="$props.variant"
          :hideHeader="true"
          :modelValue="innerDateSetting"
          @update:modelValue="innerDateSettingChange"
        />
        <FSNumberField
          minWidth="60px"
          v-if="pastSettings.includes(innerDateSetting)"
          :rules="[NumberRules.required(), NumberRules.min(0)]"
          :disabled="$props.disabled"
          :hideHeader="true"
          :clearable="false"
          :modelValue="innerDateValue"
          @update:modelValue="innerDateValueChange"
        />
        <template
          v-else-if="innerDateSetting === DateSetting.Expression"
        >
          <FSRow
            align="center-left"
            :wrap="false"
          >
            <FSIcon>
              mdi-clock-start
            </FSIcon>
            <FSTextField
              :rules="[TextRules.required(), DateRules.validateExpression($props.variant)]"
              :disabled="$props.disabled"
              :hideHeader="true"
              :clearable="false"
              :modelValue="innerStartDate"
              @update:modelValue="innerStartDateChange"
            />
          </FSRow>
          <FSRow
            align="center-left"
            :wrap="false"
          >
            <FSIcon>
              mdi-clock-end
            </FSIcon>
            <FSTextField
              :rules="[TextRules.required(), DateRules.validateExpression($props.variant)]"
              :disabled="$props.disabled"
              :hideHeader="true"
              :clearable="false"
              :modelValue="innerEndDate"
              @update:modelValue="innerEndDateChange"
            />
          </FSRow>
        </template>
        <template
          v-else-if="innerDateSetting === DateSetting.Pick"
        >
          <FSDateTimeRangeField
            :width="['350px', '310px']"
            :disabled="$props.disabled"
            :hideHeader="true"
            :clearable="false"
            :modelValue="actualValue"
            @update:modelValue="onPickDates"
          />
          <FSDateTimeRangeDialog
            :dialog="dateTimeRangeDialog"
            @cancel="onCancelPickDates"
            @update:modelValue="onPickDates"
          />
        </template>
      </FSRow>
    </FSForm>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, ref, watch } from "vue";
import _ from "lodash";

import { DateRules, NumberRules, TextRules } from "@dative-gpi/foundation-shared-components/models";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { useRules } from "@dative-gpi/foundation-shared-components/composables";
import { DateSetting } from "@dative-gpi/foundation-shared-domain/enums";

import FSSelectDateSetting from "../selects/FSSelectDateSetting.vue";
import FSDateTimeRangeDialog from './FSDateTimeRangeDialog.vue';
import FSDateTimeRangeField from "./FSDateTimeRangeField.vue";
import FSNumberField from "./FSNumberField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSTextField from "./FSTextField.vue";
import FSForm from "../FSForm.vue";
import FSIcon from "../FSIcon.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTermField",
  components: {
    FSDateTimeRangeDialog,
    FSDateTimeRangeField,
    FSSelectDateSetting,
    FSNumberField,
    FSBaseField,
    FSTextField,
    FSForm,
    FSIcon,
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
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    variant : {
      type: String as PropType<"default" | "before-after">,
      required: false,
      default: "default"
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    lastPeriod: {
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
  emits: ["update", "update:startDate", "update:endDate"],
  setup(props, { emit }) {
    const { parseForPicker, epochToISO } = useDateFormat();
    const { getMessages } = useRules();

    const innerDateSetting = ref<DateSetting>(DateSetting.PastDays);
    const innerDateValue = ref<number>(1);
    const innerStartDate = ref<string>("now - 1d");
    const innerEndDate = ref<string>("now");
    const dateTimeRangeDialog = ref(false);

    const valid = ref<boolean>(false);

    const pastSettings = computed((): DateSetting[] => {
      return [
        DateSetting.PastHours, DateSetting.PastDays, DateSetting.PastWeeks, DateSetting.PastMonths, DateSetting.PastYears,
        DateSetting.MinutesBeforeAfter, DateSetting.HoursBeforeAfter, DateSetting.DaysBeforeAfter, DateSetting.WeeksBeforeAfter,
        DateSetting.MinutesBefore, DateSetting.HoursBefore, DateSetting.DaysBefore, DateSetting.WeeksBefore
      ];
    });

    const actualValue = computed(() => {
      const dates = [parseForPicker(innerStartDate.value), parseForPicker(innerEndDate.value)];
      if (dates.some(d => d == null)) {
        return null;
      }
      return dates as [number, number];
    })

    const messages = computed((): string[] => {
      return props.messages ??
        getMessages(props.startDate, props.rules).concat(getMessages(props.endDate, props.rules));
    });

    const innerStartDateChange = (value: string) => {
      debouncedStartDate(value);
    };

    const onStartDateChange = (value: string) => {
      innerStartDate.value = value;
      if (valid.value) {
        emit("update:startDate", value);
        emit("update", { startDate: innerStartDate.value, endDate: props.endDate });
      }
    };

    const debouncedStartDate = _.debounce(onStartDateChange, 1000);

    const innerEndDateChange = (value: string) => {
      debouncedEndDate(value);
    };

    const onEndDateChange = (value: string) => {
      innerEndDate.value = value;
      if (valid.value) {
        emit("update:endDate", value);
        emit("update", { startDate: props.startDate, endDate: innerEndDate.value });
      }
    };

    const debouncedEndDate = _.debounce(onEndDateChange, 1000);

    const innerDateSettingChange = (value: DateSetting) => {
      innerDateSetting.value = value;
      switch (value) {
        case DateSetting.None:
          return;
        case DateSetting.PastHours:
          innerStartDate.value = `now - ${innerDateValue.value}h`;
          innerEndDate.value = "now";
          break;
        case DateSetting.PastDays:
          innerStartDate.value = `now - ${innerDateValue.value}d`;
          innerEndDate.value = "now";
          break;
        case DateSetting.PastWeeks:
          innerStartDate.value = `now - ${innerDateValue.value}w`;
          innerEndDate.value = "now";
          break;
        case DateSetting.PastMonths:
          innerStartDate.value = `now - ${innerDateValue.value}M`;
          innerEndDate.value = "now";
          break;
        case DateSetting.PastYears:
          innerStartDate.value = `now - ${innerDateValue.value}y`;
          innerEndDate.value = "now";
          break;
        case DateSetting.CurrentHour:
          innerStartDate.value = "now/h";
          innerEndDate.value = "now";
          break;
        case DateSetting.CurrentDay:
          innerStartDate.value = "now/d";
          innerEndDate.value = "now";
          break;
        case DateSetting.CurrentWeek:
          innerStartDate.value = "now/w";
          innerEndDate.value = "now";
          break;
        case DateSetting.CurrentMonth:
          innerStartDate.value = "now/M";
          innerEndDate.value = "now";
          break;
        case DateSetting.CurrentYear:
          innerStartDate.value = "now/y";
          innerEndDate.value = "now";
          break;
        case DateSetting.LastDay:
          innerStartDate.value = `now - 1d/d`;
          innerEndDate.value = "now/d";
          break;
        case DateSetting.LastWeek:
          innerStartDate.value = `now - 1w/w`;
          innerEndDate.value = "now/w";
          break;
        case DateSetting.LastMonth:
          innerStartDate.value = `now - 1M/M`;
          innerEndDate.value = "now/M";
          break;
        case DateSetting.LastYear:
          innerStartDate.value = `now - 1y/y`;
          innerEndDate.value = "now/y";
          break;
        case DateSetting.SinceLastDay:
          innerStartDate.value = `now - 1d/d`;
          innerEndDate.value = "now";
          break;
        case DateSetting.SinceLastWeek:
          innerStartDate.value = `now - 1w/w`;
          innerEndDate.value = "now";
          break;
        case DateSetting.SinceLastMonth:
          innerStartDate.value = `now - 1M/M`;
          innerEndDate.value = "now";
          break;
        case DateSetting.SinceLastYear:
          innerStartDate.value = `now - 1y/y`;
          innerEndDate.value = "now";
          break;
        case DateSetting.LastPeriod:
          innerStartDate.value = "from - to + from";
          innerEndDate.value = "from";
          break;
        case DateSetting.MinutesBeforeAfter:
          innerStartDate.value = `alertstart - ${innerDateValue.value}m`;
          innerEndDate.value = `alertend + ${innerDateValue.value}m`;
          break;
        case DateSetting.HoursBeforeAfter:
          innerStartDate.value = `alertstart - ${innerDateValue.value}h`;
          innerEndDate.value = `alertend + ${innerDateValue.value}h`;
          break;
        case DateSetting.DaysBeforeAfter:
          innerStartDate.value = `alertstart - ${innerDateValue.value}d`;
          innerEndDate.value = `alertend + ${innerDateValue.value}d`;
          break;
        case DateSetting.WeeksBeforeAfter:
          innerStartDate.value = `alertstart - ${innerDateValue.value}w`;
          innerEndDate.value = `alertend + ${innerDateValue.value}w`;
          break;
        case DateSetting.MinutesBefore:
          innerStartDate.value = `alertstart - ${innerDateValue.value}m`;
          innerEndDate.value = "alertend";
          break;
        case DateSetting.HoursBefore:
          innerStartDate.value = `alertstart - ${innerDateValue.value}h`;
          innerEndDate.value = "alertend";
          break;
        case DateSetting.DaysBefore:
          innerStartDate.value = `alertstart - ${innerDateValue.value}d`;
          innerEndDate.value = "alertend";
          break;
        case DateSetting.WeeksBefore:
          innerStartDate.value = `alertstart - ${innerDateValue.value}w`;
          innerEndDate.value = "alertend";
          break;
        case DateSetting.Expression:
          if (props.variant === "before-after") {
            innerStartDate.value = `alertstart - ${innerDateValue.value}d`;
            innerEndDate.value = "alertend";
          }
          else {
            innerStartDate.value = `now - ${innerDateValue.value}d`;
            innerEndDate.value = "now";
          }
          break;
        case DateSetting.Pick:
          dateTimeRangeDialog.value = true;
          return;
      }
      emit("update:startDate", innerStartDate.value);
      emit("update:endDate", innerEndDate.value);
      emit("update", { startDate: innerStartDate.value, endDate: innerEndDate.value });
    };

    const innerDateValueChange = (value: number) => {
      innerDateValue.value = value ? value : 1;

      switch (innerDateSetting.value) {
        case DateSetting.None:
          return;
        case DateSetting.PastHours:
          innerStartDate.value = `now - ${innerDateValue.value}h`;
          innerEndDate.value = "now";
          break;
        case DateSetting.PastDays:
          innerStartDate.value = `now - ${innerDateValue.value}d`;
          innerEndDate.value = "now";
          break;
        case DateSetting.PastWeeks:
          innerStartDate.value = `now - ${innerDateValue.value}w`;
          innerEndDate.value = "now";
          break;
        case DateSetting.PastMonths:
          innerStartDate.value = `now - ${innerDateValue.value}M`;
          innerEndDate.value = "now";
          break;
        case DateSetting.PastYears:
          innerStartDate.value = `now - ${innerDateValue.value}y`;
          innerEndDate.value = "now";
          break;
        case DateSetting.MinutesBeforeAfter:
          innerStartDate.value = `alertstart - ${innerDateValue.value}m`;
          innerEndDate.value = `alertend + ${innerDateValue.value}m`;
          break;
        case DateSetting.HoursBeforeAfter:
          innerStartDate.value = `alertstart - ${innerDateValue.value}h`;
          innerEndDate.value = `alertend + ${innerDateValue.value}h`;
          break;
        case DateSetting.DaysBeforeAfter:
          innerStartDate.value = `alertstart - ${innerDateValue.value}d`;
          innerEndDate.value = `alertend + ${innerDateValue.value}d`;
          break;
        case DateSetting.WeeksBeforeAfter:
          innerStartDate.value = `alertstart - ${innerDateValue.value}w`;
          innerEndDate.value = `alertend + ${innerDateValue.value}w`;
          break;
        case DateSetting.MinutesBefore:
          innerStartDate.value = `alertstart - ${innerDateValue.value}m`;
          innerEndDate.value = "alertend";
          break;
        case DateSetting.HoursBefore:
          innerStartDate.value = `alertstart - ${innerDateValue.value}h`;
          innerEndDate.value = "alertend";
          break;
        case DateSetting.DaysBefore:
          innerStartDate.value = `alertstart - ${innerDateValue.value}d`;
          innerEndDate.value = "alertend";
          break;
        case DateSetting.WeeksBefore:
          innerStartDate.value = `alertstart - ${innerDateValue.value}w`;
          innerEndDate.value = "alertend";
          break;
      }
      emit("update:startDate", innerStartDate.value);
      emit("update:endDate", innerEndDate.value);
      emit("update", { startDate: innerStartDate.value, endDate: innerEndDate.value });
    };

    const onPickDates = (value: number[]) => {
      dateTimeRangeDialog.value = false;

      if(value.length < 2) {
        return;
      }

      innerStartDate.value = epochToISO(value[0]);
      innerEndDate.value = epochToISO(value[1]);

      if (valid.value !== false) {
        if(props.startDate !== innerStartDate.value) {
          emit("update:startDate", innerStartDate.value);
        }
        if (props.endDate !== innerEndDate.value) {
          emit("update:endDate", innerEndDate.value);
        }
        emit("update", { startDate: innerStartDate.value, endDate: innerEndDate.value });
      }
    };

    const onCancelPickDates = () => {
      dateTimeRangeDialog.value = false;
      reset();
    };

    const reset = (): void => {
      innerStartDate.value = props.startDate;
      innerEndDate.value = props.endDate;

      if (props.variant === "before-after") {
        if (props.endDate === "alertend") {
          let match = /^alertstart-([\d]+)([mhdw])$/g.exec(props.startDate.replaceAll(" ", ""));
          if (match != null) {
            innerDateValue.value = parseInt(match[1]);
            switch (match[2]) {
              case 'm': {
                innerDateSetting.value = DateSetting.MinutesBefore;
                return;
              }
              case 'h': {
                innerDateSetting.value = DateSetting.HoursBefore;
                return;
              }
              case 'd': {
                innerDateSetting.value = DateSetting.DaysBefore;
                return;
              }
              case 'w': {
                innerDateSetting.value = DateSetting.WeeksBefore;
                return;
              }
              default: {
                innerDateSetting.value = DateSetting.Expression;
                innerDateValue.value = 1;
                return;
              }
            }
          }
        }
        
        if (
          /^alertstart-([\d]+)([mhdw])$/g.test(props.startDate.replaceAll(" ", "")) &&
          /^alertend\+([\d]+)([mhdw])$/g.test(props.endDate.replaceAll(" ", ""))
        ) {
          let startMatch = /^alertstart-([\d]+)([mhdw])$/g.exec(props.startDate.replaceAll(" ", ""));
          let endMatch = /^alertend\+([\d]+)([mhdw])$/g.exec(props.endDate.replaceAll(" ", ""));
          if (startMatch != null && endMatch != null && startMatch[1] === endMatch[1] && startMatch[2] === endMatch[2]) {
            innerDateValue.value = parseInt(startMatch[1]);
            switch(startMatch[2]) {
              case 'm': {
                innerDateSetting.value = DateSetting.MinutesBeforeAfter;
                return;
              }
              case 'h': {
                innerDateSetting.value = DateSetting.HoursBeforeAfter;
                return;
              }
              case 'd': {
                innerDateSetting.value = DateSetting.DaysBeforeAfter;
                return;
              }
              case 'w': {
                innerDateSetting.value = DateSetting.WeeksBeforeAfter;
                return;
              }
              default: {
                innerDateSetting.value = DateSetting.Expression;
                innerDateValue.value = 1;
                return;
              }
            }
          }
        }

        innerDateSetting.value = DateSetting.Expression;
        innerDateValue.value = 1;
        return;
      }

      if (props.lastPeriod && props.endDate === "from" && props.startDate === "from - to + from") {
        innerDateSetting.value = DateSetting.LastPeriod;
        return;
      }
      if (props.endDate === "now/d" && props.startDate === "now - 1d/d") {
        innerDateSetting.value = DateSetting.LastDay;
        return;
      }
      if (props.endDate === "now/w" && props.startDate === "now - 1w/w") {
        innerDateSetting.value = DateSetting.LastWeek;
        return;
      }
      if (props.endDate === "now/M" && props.startDate === "now - 1M/M") {
        innerDateSetting.value = DateSetting.LastMonth;
        return;
      }
      if (props.endDate === "now/y" && props.startDate === "now - 1y/y") {
        innerDateSetting.value = DateSetting.LastYear;
        return;
      }

      if (props.endDate === "now") {
        let match = /^now-1([dwMy])\/([dwMy])$/g.exec(props.startDate.replaceAll(" ", ""));
        if (match != null) {
          innerDateValue.value = 1;
          switch (match[1]) {
            case 'd': {
              innerDateSetting.value = DateSetting.SinceLastDay;
              return;
            }
            case 'w': {
              innerDateSetting.value = DateSetting.SinceLastWeek;
              return;
            }
            case 'M': {
              innerDateSetting.value = DateSetting.SinceLastMonth;
              return;
            }
            case 'y': {
              innerDateSetting.value = DateSetting.SinceLastYear;
              return;
            }
            default: {
              innerDateSetting.value = DateSetting.Expression;
              return;
            }
          }
        }
        match = /^now-([\d]+)([hdwMy])$/g.exec(props.startDate.replaceAll(" ", ""));
        if (match != null) {
          innerDateValue.value = parseInt(match[1]);
          switch (match[2]) {
            case 'h': {
              innerDateSetting.value = DateSetting.PastHours;
              return;
            }
            case 'd': {
              innerDateSetting.value = DateSetting.PastDays;
              return;
            }
            case 'w': {
              innerDateSetting.value = DateSetting.PastWeeks;
              return;
            }
            case 'M': {
              innerDateSetting.value = DateSetting.PastMonths;
              return;
            }
            case 'y': {
              innerDateSetting.value = DateSetting.PastYears;
              return;
            }
            default: {
              innerDateSetting.value = DateSetting.Expression;
              innerDateValue.value = 1;
              return;
            }
          }
        }

        match = /^now\/([hdwMy])$/g.exec(props.startDate.replaceAll(" ", ""));
        if (match != null) {
          innerDateValue.value = 1;
          switch (match[1]) {
            case 'h': {
              innerDateSetting.value = DateSetting.CurrentHour;
              return;
            }
            case 'd': {
              innerDateSetting.value = DateSetting.CurrentDay;
              return;
            }
            case 'w': {
              innerDateSetting.value = DateSetting.CurrentWeek;
              return;
            }
            case 'M': {
              innerDateSetting.value = DateSetting.CurrentMonth;
              return;
            }
            case 'y': {
              innerDateSetting.value = DateSetting.CurrentYear;
              return;
            }
            default: {
              innerDateSetting.value = DateSetting.Expression;
              return;
            }
          }
        }
      }

      if (props.endDate && parseForPicker(props.endDate) != null && props.startDate && parseForPicker(props.startDate) != null) {
        innerDateSetting.value = DateSetting.Pick;
        innerDateValue.value = 1;
        return;
      }

      innerDateSetting.value = DateSetting.Expression;
      innerDateValue.value = 1;
    };

    // This watcher is called once even if both value are set at the same time
    watch([() => props.startDate, () => props.endDate], () => {
      // Having one of those different from the inner value means something up the chain is updating
      if (props.startDate !== innerStartDate.value || props.endDate !== innerEndDate.value) {
        reset();
      }
    });

    onMounted((): void => {
      reset();
    });

    return {
      dateTimeRangeDialog,
      innerDateSetting,
      innerDateValue,
      innerStartDate,
      innerEndDate,
      actualValue,
      pastSettings,
      DateSetting,
      NumberRules,
      DateRules,
      TextRules,
      messages,
      valid,
      innerDateSettingChange,
      innerDateValueChange,
      innerStartDateChange,
      innerEndDateChange,
      onCancelPickDates,
      parseForPicker,
      onPickDates
    };
  }
});
</script>