<template>
  <FSCol>
    <FSRow>
      <FSSelectField
        :hideHeader="true"
        :clearable="false"
        :items="years"
        :modelValue="innerLeftYear"
        @update:modelValue="onChangeYear"
      />
      <FSRow
        align="center-right"
      >
        <FSButton
          :label="$tr('ui.common.today', 'Today')"
          @click="onClickToday"
        />
      </FSRow>
    </FSRow>
    <FSRow
      class="fs-calendar-twin"
      align="top-center"
      :style="style"
    >
      <FSCol
        align="top-center"
        width="hug"
        :class="leftClasses"
        :style="style"
      >
        <FSRow
          class="fs-calendar-header"
          align="center-center"
        >
          <FSButton
            size="l"
            variant="icon"
            icon="mdi-chevron-left"
            :color="ColorEnum.Dark"
            @click="onClickPrevious"
          />
          <FSSpan
            class="fs-calendar-text"
            font="text-h3"
          >
            {{ leftText }}
          </FSSpan>
          <div />
        </FSRow>
        <div
          class="fs-calendar-divider"
          :style="style"
        />
        <v-locale-provider
          :locale="languageCode"
        >
          <v-date-picker-month
            :month="innerLeftMonth"
            :year="innerLeftYear"
            :multiple="true"
            :allowedDates="allowedDates"
            :modelValue="innerLeftValue.map(epochToPicker)"
            @update:modelValue="onClickLeft"
            @update:month="null"
            @update:year="null"
          />
        </v-locale-provider>
      </FSCol>
      <FSCol
        align="top-center"
        width="hug"
        :class="rightClasses"
        :style="style"
      >
        <FSRow
          class="fs-calendar-header"
          align="center-center"
        >
          <div />
          <FSSpan
            class="fs-calendar-text"
            font="text-h3"
          >
            {{ rightText }}
          </FSSpan>
          <FSButton
            size="l"
            variant="icon"
            icon="mdi-chevron-right"
            :color="ColorEnum.Dark"
            @click="onClickNext"
          />
        </FSRow>
        <div
          class="fs-calendar-divider"
          :style="style"
        />
        <v-locale-provider
          :locale="languageCode"
        >
          <v-date-picker-month
            :month="innerRightMonth"
            :year="innerRightYear"
            :multiple="true"
            :allowedDates="allowedDates"
            :modelValue="innerRightValue.map(epochToPicker)"
            @update:modelValue="onClickRight"
            @update:month="null"
            @update:year="null"
          />
        </v-locale-provider>
      </FSCol>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, ref, type StyleValue } from "vue";

import { useDateFormat, useAppLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSSelectField from "./fields/FSSelectField.vue";
import FSButton from "./FSButton.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCalendarTwin",
  components: {
    FSSelectField,
    FSButton,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    modelValue: {
      type: Array as PropType<number[] | null>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    limit: {
      type: String as PropType<"none" | "past" | "future">,
      required: false,
      default: "none"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { epochToPicker, epochToPickerHeader, pickerToEpoch, todayToEpoch } = useDateFormat();
    const { languageCode } = useAppLanguageCode();
    const { getColors } = useColors();
    
    const innerLeftMonth = ref(new Date().getMonth());
    const innerLeftYear = ref(new Date().getFullYear());

    const innerRightMonth = ref(new Date().getMonth());
    const innerRightYear = ref(new Date().getFullYear());

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => ({
      "--fs-calendar-background-color"       : backgrounds.base,
      "--fs-calendar-hover-background-color" : colors.value.light,
      "--fs-calendar-active-background-color": colors.value.base,
      "--fs-calendar-border-color"           : lights.dark,
      "--fs-calendar-hover-border-color"     : colors.value.base,
      "--fs-calendar-active-border-color"    : colors.value.base,
      "--fs-calendar-color"                  : darks.base,
      "--fs-calendar-hover-color"            : colors.value.base,
      "--fs-calendar-active-color"           : colors.value.light
    }));

    const innerLeftValue = computed((): number[] => {
      if (!props.modelValue || !props.modelValue.length) {
        return [];
      }
      return props.modelValue.filter(value =>
        compare("during", "left", epochToPickerHeader(value)) || compare("before", "left", epochToPickerHeader(value))
      );
    });

    const innerRightValue = computed((): number[] => {
      if (!props.modelValue || !props.modelValue.length) {
        return [];
      }
      return props.modelValue.filter(value =>
        compare("during", "right", epochToPickerHeader(value)) || compare("after", "right", epochToPickerHeader(value))
      );
    });

    const leftText = computed(() => {
      const date = new Date(0);
      date.setMonth(innerLeftMonth.value);
      date.setFullYear(innerLeftYear.value);
      return new Intl.DateTimeFormat(languageCode.value, { month: "long", year: "numeric" }).format(date);
    });

    const rightText = computed(() => {
      const date = new Date(0);
      date.setMonth(innerRightMonth.value);
      date.setFullYear(innerRightYear.value);
      return new Intl.DateTimeFormat(languageCode.value, { month: "long", year: "numeric" }).format(date);
    });

    const leftClasses = computed((): string[] => {
      const classNames = ["fs-calendar-half", "fs-calendar-left"];
      if (props.modelValue && props.modelValue.length > 1) {
        const first = epochToPickerHeader(props.modelValue[0]);
        const last = epochToPickerHeader(props.modelValue[1]);
        if (compare("before", "left", first) && compare("after", "left", last)) {
          classNames.push("fs-calendar-full");
        }
        else if (compare("during", "left", first) && compare("during", "left", last)) {
          if (first.d !== last.d) {
            classNames.push("fs-calendar-part");
          }
        }
        else if (compare("during", "left", first)) {
          classNames.push("fs-calendar-start");
        }
        else if (compare("during", "left", last)) {
          classNames.push("fs-calendar-end");
        }
      }
      return classNames;
    });

    const rightClasses = computed((): string[] => {
      const classNames = ["fs-calendar-half", "fs-calendar-right"];
      if (props.modelValue && props.modelValue.length > 1) {
        const first = epochToPickerHeader(props.modelValue[0]);
        const last = epochToPickerHeader(props.modelValue[1]);
        if (compare("before", "right", first) && compare("after", "right", last)) {
          classNames.push("fs-calendar-full");
        }
        else if (compare("during", "right", first) && compare("during", "right", last)) {
          if (first.d !== last.d) {
            classNames.push("fs-calendar-part");
          }
        }
        else if (compare("during", "right", first)) {
          classNames.push("fs-calendar-start");
        }
        else if (compare("during", "right", last)) {
          classNames.push("fs-calendar-end");
        }
      }
      return classNames;
    });

    const years = computed((): any[] => {
      const years = [];
      switch (props.limit) {
        case "past":
          for (let i = 1900; i < new Date().getFullYear(); i++) {
            years.push({ label: i.toString(), id: i });
          }
          break;
        case "future":
          for (let i = new Date().getFullYear(); i < 2100; i++) {
            years.push({ label: i.toString(), id: i });
          }
          break;
        default:
          for (let i = 1900; i < 2100; i++) {
            years.push({ label: i.toString(), id: i });
          }
          break;
      }
      return years;
    });

    const compare = (operator: "before" | "during" | "after", side: "left" | "right", date: { d: number, m: number, y: number }): boolean => {
      switch (operator) {
        case "before":
          switch (side) {
            case "left":
              return innerLeftYear.value > date.y || (innerLeftYear.value === date.y && innerLeftMonth.value > date.m);
            default:
              return innerRightYear.value > date.y || (innerRightYear.value === date.y && innerRightMonth.value > date.m);
          }
        case "during":
          switch (side) {
            case "left":
              return innerLeftYear.value === date.y && innerLeftMonth.value === date.m;
            default:
              return innerRightYear.value === date.y && innerRightMonth.value === date.m;
          }
        case "after":
          switch (side) {
            case "left":
              return innerLeftYear.value < date.y || (innerLeftYear.value === date.y && innerLeftMonth.value < date.m);
            default:
              return innerRightYear.value < date.y || (innerRightYear.value === date.y && innerRightMonth.value < date.m);
          }
      }
    };

    const onClickPrevious = (): void => {
      if (innerLeftMonth.value === 11) {
        innerLeftMonth.value--;
        innerRightMonth.value = 11;
        innerRightYear.value--;
      }
      else if (innerLeftMonth.value === 0) {
        innerLeftYear.value--;
        innerLeftMonth.value = 11;
        innerRightMonth.value--;
      }
      else {
        innerLeftMonth.value--;
        innerRightMonth.value--;
      }
    };

    const onClickNext = (): void => {
      if (innerRightMonth.value === 11) {
        innerRightMonth.value = 0;
        innerRightYear.value++;
        innerLeftMonth.value++;
      }
      else if (innerRightMonth.value === 0) {
        innerRightMonth.value++;
        innerLeftMonth.value = 0;
        innerLeftYear.value++;
      }
      else {
        innerRightMonth.value++;
        innerLeftMonth.value++;
      }
    };

    const onClickLeft = (value: unknown): void => {
      const dates = value as Date[];

      // Click on the same date while only one date is selected on the left calendar
      if (dates.length === 0) {
        if (props.modelValue && props.modelValue.length > 0) {
          emit("update:modelValue", [props.modelValue[0], props.modelValue[0]]);
        }
        return;
      }
      
      const clicked = pickerToEpoch(dates[dates.length - 1]);
      if (props.modelValue && props.modelValue[0] === props.modelValue[1]) {
        emit("update:modelValue", [props.modelValue[0], clicked].sort());
      }
      else {
        emit("update:modelValue", [clicked, clicked]);
      }
    };

    const onClickRight = (value: unknown): void => {
      const dates = value as Date[];

      // Click on the same date while only one date is selected on the right calendar
      if (dates.length === 0) {
        if (props.modelValue && props.modelValue.length > 0) {
          emit("update:modelValue", [props.modelValue[props.modelValue.length - 1], props.modelValue[props.modelValue.length - 1]]);
        }
        return;
      }
      
      const clicked = pickerToEpoch(dates[dates.length - 1]);
      if (props.modelValue && props.modelValue[0] === props.modelValue[1]) {
        emit("update:modelValue", [props.modelValue[0], clicked].sort());
      }
      else {
        emit("update:modelValue", [clicked, clicked]);
      }
    };

    const onClickToday = (): void => {
      const today = new Date();
      innerLeftMonth.value = today.getMonth();
      innerLeftYear.value = today.getFullYear();

      if (innerLeftMonth.value === 11) {
        innerRightMonth.value = 0;
        innerRightYear.value = innerLeftYear.value + 1;
      }
      else {
        innerRightMonth.value = innerLeftMonth.value + 1;
        innerRightYear.value = innerLeftYear.value;
      }
      
      today.setHours(0, 0, 0, 0);
      emit("update:modelValue", [pickerToEpoch(today), pickerToEpoch(today)]);
    };

    const onChangeYear = (value: number): void => {
      if (innerRightYear.value !== innerLeftYear.value) {
        innerLeftYear.value = value;
        innerRightYear.value = value + 1;
      }
      else {
        innerLeftYear.value = value;
        innerRightYear.value = value;
      }
    }

    const allowedDates = (value: unknown): boolean => {
      if (!(value instanceof Date)) {
        return false;
      }
      switch (props.limit) {
        case "past"  : return pickerToEpoch(value) <= todayToEpoch();
        case "future": return pickerToEpoch(value) >= todayToEpoch();
        default      : return true;
      }
    };

    onMounted((): void => {
      if (!props.modelValue || !props.modelValue.length) {
        innerLeftMonth.value = new Date().getMonth();
        innerLeftYear.value = new Date().getFullYear();
        if (innerLeftMonth.value < 11) {
          innerRightMonth.value = innerLeftMonth.value + 1;
          innerRightYear.value = innerLeftYear.value;
        }
        else {
          innerRightMonth.value = 0;
          innerRightYear.value = innerLeftYear.value + 1;
        }
      }
      else {
        innerLeftMonth.value = epochToPickerHeader(props.modelValue[0]).m;
        innerLeftYear.value = epochToPickerHeader(props.modelValue[0]).y;
        if (innerLeftMonth.value < 11) {
          innerRightMonth.value = innerLeftMonth.value + 1;
          innerRightYear.value = innerLeftYear.value;
        }
        else {
          innerRightMonth.value = 0;
          innerRightYear.value = innerLeftYear.value + 1;
        }
      }
    });

    return {
      ColorEnum,
      languageCode,
      style,
      leftClasses,
      leftText,
      innerLeftMonth,
      innerLeftYear,
      innerLeftValue,
      rightClasses,
      rightText,
      innerRightMonth,
      innerRightYear,
      innerRightValue,
      years,
      epochToPicker,
      onClickPrevious,
      onClickNext,
      onClickLeft,
      onClickRight,
      onClickToday,
      onChangeYear,
      allowedDates
    };
  }
});
</script>