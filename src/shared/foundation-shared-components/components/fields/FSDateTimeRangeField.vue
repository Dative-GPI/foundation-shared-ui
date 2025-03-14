<template>
  <FSTextField
    class="fs-date-field"
    :label="$props.label"
    :description="$props.description"
    :color="$props.color"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
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
          :editable="$props.editable"
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
  <FSDialogSubmit
    :title="$props.label"
    :submitButtonColor="$props.color"
    @click:submitButton="onSubmit"
    v-model="dialog"
  >
    <template
      #body
    >
      <FSCol>
        <FSCalendarTwin
          :color="$props.color"
          v-model="innerDateRange"
        />
        <FSRow>
          <FSCol>
            <FSClock
              :color="$props.color"
              :date="innerDateLeft"
              v-model="innerTimeLeft"
            />
          </FSCol>
          <FSCol>
            <FSClock
              :color="$props.color"
              :date="innerDateRight"
              v-model="innerTimeRight"
            />
          </FSCol>
        </FSRow>
      </FSCol>
    </template>
  </FSDialogSubmit>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, watch } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone, useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { useRules } from "@dative-gpi/foundation-shared-components/composables";

import FSDialogSubmit from "../FSDialogSubmit.vue";
import FSCalendarTwin from "../FSCalendarTwin.vue";
import FSTextField from "./FSTextField.vue";
import FSButton from "../FSButton.vue";
import FSClock from "../FSClock.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSDateTimeRangeField",
  components: {
    FSDialogSubmit,
    FSCalendarTwin,
    FSTextField,
    FSButton,
    FSClock,
    FSCol,
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
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getUserOffset } = useAppTimeZone();
    const { epochToShortTimeFormat } = useDateFormat();
    const { validateOn, getMessages } = useRules();

    const dialog = ref(false);

    const innerDateRange = ref<number[] | null>(null);
    const innerTimeRight = ref(0);
    const innerTimeLeft = ref(0);

    const toShortTimeFormat = computed((): string => {
      if (!props.modelValue || !Array.isArray(props.modelValue) || !props.modelValue.length) {
        return "";
      }
      return props.modelValue.map((epoch) => epochToShortTimeFormat(epoch)).join(" - ");
    });

    const innerDateLeft = computed((): number | null => {
      if (innerDateRange.value && Array.isArray(innerDateRange.value) && innerDateRange.value.length) {
        return innerDateRange.value[0];
      }
      return null;
    });

    const innerDateRight= computed((): number | null => {
      if (innerDateRange.value && Array.isArray(innerDateRange.value) && innerDateRange.value.length > 1) {
        return innerDateRange.value[1];
      }
      return null;
    });

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules, true));

    const onClick = (): void => {
      if (props.editable) {
        dialog.value = true;
      }
    };

    const onClear = (): void => {
      emit("update:modelValue", null);
      innerTimeLeft.value = 0;
      innerTimeRight.value = 0;
      innerDateRange.value = null;
    };

    const onSubmit = (): void => {
      if (innerDateRange.value && Array.isArray(innerDateRange.value) && innerDateRange.value.length > 1) {
        emit("update:modelValue", [innerDateRange.value[0] + innerTimeLeft.value, innerDateRange.value[1] + innerTimeRight.value]);
      }
      dialog.value = false;
    };

    const reset = (): void => {
      if (props.modelValue && Array.isArray(props.modelValue)) {
        // FSClock just gives two numbers without consideration for the time zone
        // We must adjust the time to the user's time zone
        switch (props.modelValue.length) {
          case 0: {
            break;
          }
          case 1: {
            innerTimeLeft.value = Math.floor((props.modelValue[0] + getUserOffset(props.modelValue[0])) % (24 * 60 * 60 * 1000));
            innerDateRange.value = [props.modelValue[0] - innerTimeLeft.value];
            break;
          }
          default: {
            innerTimeLeft.value = Math.floor((props.modelValue[0] + getUserOffset(props.modelValue[0])) % (24 * 60 * 60 * 1000));
            innerTimeRight.value = Math.floor((props.modelValue[1] + getUserOffset(props.modelValue[1])) % (24 * 60 * 60 * 1000));
            innerDateRange.value = [props.modelValue[0] - innerTimeLeft.value, props.modelValue[1] - innerTimeRight.value];
            break;
          }
        }
      }
      else {
        innerDateRange.value = null;
        innerTimeLeft.value = 0;
        innerTimeRight.value = 0;
      }
    };

    watch(() => props.modelValue, () => {
      reset();
    }, { immediate: true });

    return {
      toShortTimeFormat,
      innerDateLeft,
      innerTimeLeft,
      innerDateRight,
      innerTimeRight,
      innerDateRange,
      validateOn,
      ColorEnum,
      messages,
      dialog,
      onSubmit,
      onClear,
      onClick
    };
  }
});
</script>