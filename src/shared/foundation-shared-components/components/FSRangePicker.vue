<template>
  <FSBaseField
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :disabled="$props.disabled"
    :label="$props.label"
    :maxWidth="$props.maxWidth"
  >
    <FSRow
      align="bottom-center"
      gap="32px"
    >
      <FSTermField
        width="430px"
        :label="$tr('ui.instant-picker.analyze-period', 'Analyze Period')"
        :startDate="$props.startDate"
        :endDate="$props.endDate"
        :disabled="$props.disabled"
        @update:startDate="$emit('update:startDate', $event)"
        @update:endDate="$emit('update:endDate', $event)"
      />
      <FSRow
        padding="0 0 2px 0"
        align="center-center"
      >
        <FSCol>
          <FSRangeSlider
            minWidth='min(300px, 90vw)'
            :disabled="$props.disabled"
            :color="ColorEnum.Light"
            :thumbColor="ColorEnum.Primary"
            :trackFillColor="ColorEnum.Primary"
            :trackSize="8"
            thumb-label="always"
            :step="$props.stepTime"
            :min="startTimestamp"
            :max="endTimestamp"
            :ticks="ticks"
            showTicks="always"
            :modelValue="$props.modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
          >
            <template
              #thumb-label="{ modelValue }"
            >
              <FSSpan
                font="text-overline"
              >
                {{ epochToMonthShortTimeFormat(modelValue) }}
              </FSSpan>
            </template>
            <template
              #tick-label="{ tick }"
            >
              <FSRow>
                <FSText
                  :color="lightColors.dark"
                  font="text-overline"
                >
                  {{ tickPrecision === TimePrecision.Hours ? epochToShortTimeOnlyFormat(tick.value) : epochToDayMonthShortOnly(tick.value) }}
                </FSText>
              </FSRow>
            </template>
          </FSRangeSlider>
        </FSCol>
        <FSPlayButtons
          v-if="$props.playable"
          :disabled="$props.disabled"
          :modelValue="playing"
          @click:backward="onClickBackward"
          @click:forward="onClickForward"
          @update:modelValue="onPlayingChange"
        />
      </FSRow>
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, type PropType } from "vue";

import { useBreakpoints, useColors } from '@dative-gpi/foundation-shared-components/composables';
import { useDateFormat, useDateExpression } from "@dative-gpi/foundation-shared-services/composables";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { computeTicks, TimePrecision } from '@dative-gpi/foundation-shared-components/utils';

import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSSpan from '@dative-gpi/foundation-shared-components/components/FSSpan.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSPlayButtons from '@dative-gpi/foundation-shared-components/components/FSPlayButtons.vue';
import FSRangeSlider from '@dative-gpi/foundation-shared-components/components/FSRangeSlider.vue';
import FSBaseField from '@dative-gpi/foundation-shared-components/components/fields/FSBaseField.vue';
import FSTermField from '@dative-gpi/foundation-shared-components/components/fields/FSTermField.vue';

export default defineComponent({
  name: "FSRangePicker",
  components: {
    FSCol,
    FSSpan,
    FSText,
    FSTermField,
    FSBaseField,
    FSRangeSlider,
    FSPlayButtons,
  },
  props: {
    label: {
      type: String,
      required: false,
    },
    mode: {
      type: String as () => 'single' | 'range',
      required: false,
      default: 'single'
    },
    modelValue: {
      type: Object as () => [number, number],
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    description: {
      type: String,
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
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    playable: {
      type: Boolean,
      required: false,
      default: true
    },
    stepTime: {
      type: Number,
      required: false,
      default: 60000
    },
    playingStepDuration: {
      type: Number,
      required: false,
      default: 50
    },
    maxWidth: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ['update:modelValue', 'update:startDate', 'update:endDate'],
  setup(props, { emit }) {
    const { epochToShortTimeOnlyFormat, epochToShortDateFormat, epochToDayMonthShortOnly, epochToISO, epochToMonthShortTimeFormat } = useDateFormat();
    const { convert : convertTermToEpoch } = useDateExpression();
    const { isMobileSized, isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();

    const lightColors = getColors(ColorEnum.Light);
    const playing = ref(false);
    const playingInterval = ref();

    const startTimestamp = computed(() => convertTermToEpoch(props.startDate));
    const endTimestamp = computed(() => convertTermToEpoch(props.endDate));

    const tickCount = computed(() => {
      if (isExtraSmall.value) { return 3; }
      if (isMobileSized.value) { return 4; }
      return 5;
    });

    const tickPrecision = computed(() => {
      const rangeDuration = endTimestamp.value - startTimestamp.value;
      if (rangeDuration <= 86400000 * tickCount.value) { return TimePrecision.Hours; }
      if (rangeDuration <= 2592000000 * tickCount.value) { return TimePrecision.Days; }
      return TimePrecision.Months;
    });

    // Génération des ticks via la fonction utilitaire
    const ticks = computed(() => computeTicks({
      start: startTimestamp.value,
      end: endTimestamp.value,
      tickCount: tickCount.value,
      precision: tickPrecision.value
    }));

    const onPlayingChange = (value: boolean) => {
      playing.value = value;
    };

    const onClickBackward = () => {
      const modelValueDuration = props.modelValue[1] - props.modelValue[0];
      emit('update:modelValue', [startTimestamp.value, startTimestamp.value + modelValueDuration]);
    };

    const onClickForward = () => {
      const modelValueDuration = props.modelValue[1] - props.modelValue[0];
      emit('update:modelValue', [endTimestamp.value - modelValueDuration, endTimestamp.value]);
    };

    watch([() => props.startDate, () => props.endDate, () => props.modelValue], () => {
      if((props.modelValue[0] < startTimestamp.value || props.modelValue[1] > endTimestamp.value)) {
        emit('update:modelValue', [startTimestamp.value, endTimestamp.value]);
      }
    }, { immediate: true });

    watch(playing, (value) => {
      if(!value && playingInterval.value) {
        clearInterval(playingInterval.value);
        return;
      }

      playingInterval.value = setInterval(() => {
        if(props.modelValue[0] + props.stepTime <= endTimestamp.value && props.modelValue[1] + props.stepTime <= endTimestamp.value) {
          emit('update:modelValue', [props.modelValue[0] + props.stepTime, props.modelValue[1] + props.stepTime]);
        } else {
          playing.value = false;
        }
      }, props.playingStepDuration);
    });

    return {
      ticks,
      playing,
      ColorEnum,
      lightColors,
      endTimestamp,
      TimePrecision,
      tickPrecision,
      startTimestamp,
      epochToISO,
      onPlayingChange,
      onClickForward,
      onClickBackward,
      epochToShortDateFormat,
      epochToShortTimeOnlyFormat,
      epochToDayMonthShortOnly,
      epochToMonthShortTimeFormat
    };
  },
});
</script>