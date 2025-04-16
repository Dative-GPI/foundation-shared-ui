<template>
  <FSDialogSubmit
    :title="$props.label"
    :submitButtonColor="$props.color"
    :modelValue="$props.dialog"
    :disabled="!valid"
    @update:modelValue="$emit('cancel')"
    @click:submitButton="onSubmit"
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
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSDialogSubmit from "../FSDialogSubmit.vue";
import FSCalendarTwin from "../FSCalendarTwin.vue";
import FSClock from "../FSClock.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSDateTimeRangeDialog",
  components: {
    FSDialogSubmit,
    FSCalendarTwin,
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
    dialog: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue", "cancel"],
  setup(props, { emit }) {
    const { getUserOffset } = useAppTimeZone();

    const innerDateRange = ref<number[] | null>(null);
    const innerTimeRight = ref(0);
    const innerTimeLeft = ref(0);

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

    const valid = computed((): boolean => {
      return !!innerDateRange.value && Array.isArray(innerDateRange.value) && innerDateRange.value.length > 1 &&
        innerDateRange.value[0] + innerTimeLeft.value < innerDateRange.value[1] + innerTimeRight.value;
    });

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

    const onSubmit = (): void => {
      if (valid.value) {
        emit("update:modelValue", [innerDateRange.value![0] + innerTimeLeft.value, innerDateRange.value![1] + innerTimeRight.value]);
        return;
      }
    };

    return {
      valid,
      innerDateLeft,
      innerTimeLeft,
      innerDateRight,
      innerTimeRight,
      innerDateRange,
      ColorEnum,
      onSubmit
    };
  }
});
</script>