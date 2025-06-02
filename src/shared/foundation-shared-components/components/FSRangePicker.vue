<template>
  <FSBaseField
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :disabled="$props.disabled"
    :label="$props.label"
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
        <FSCol
          width="fill"
        >
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
            :tick-size="0"
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
                  {{ intervalTime <= 3600000
                    ?
                      epochToShortTimeOnlyFormat(tick.value)
                    :
                      epochToDayMonthShortOnly(tick.value)
                  }}
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
import { computed, defineComponent, ref, watch } from "vue";

import { useDateFormat, useDateExpression } from "@dative-gpi/foundation-shared-services/composables";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints, useColors } from '@dative-gpi/foundation-shared-components/composables';

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

    const intervalTime = computed(() => {
      const possibleIntervals = [60000, 3600000, 86400000];

      const interval = possibleIntervals.find(interval => {
        return (endTimestamp.value - startTimestamp.value) / interval < 100;
      });

      if (interval) {
        return interval;
      }
      return 86400000;
    });

    const ticks = computed(() => {
      const ticks: number[] = [];

      const rangeDuration = endTimestamp.value - startTimestamp.value;
      const interval = rangeDuration / maximumTickToShow.value;

      for (let i = 1; i < maximumTickToShow.value; i++) {
        ticks.push(startTimestamp.value + i * interval);
      }
      return ticks;
    });

    const maximumTickToShow = computed(() => {
      if (isExtraSmall.value) {
        return 4;
      }
      if (isMobileSized.value) {
        return 5;
      }
      return 6;
    });

    const onPlayingChange = (value: boolean) => {
      playing.value = value;
    };

    const onClickBackward = () => {
      const rangeDuration = props.modelValue[1] - props.modelValue[0];
      emit('update:modelValue', [startTimestamp.value, startTimestamp.value + rangeDuration]);
    };

    const onClickForward = () => {
      const rangeDuration = props.modelValue[1] - props.modelValue[0];
      emit('update:modelValue', [endTimestamp.value - rangeDuration, endTimestamp.value]);
    };

    watch(() => [props.startDate, props.endDate], () => {
      if((props.modelValue[0] < startTimestamp.value || props.modelValue[1] > endTimestamp.value)) {
        emit('update:modelValue', [startTimestamp.value, endTimestamp.value]);
      }
    }, { immediate: true });

    watch(playing, (value) => {
      if(!value && playingInterval.value) {
        clearInterval(playingInterval.value);
      } else {
        playingInterval.value = setInterval(() => {
          if(props.modelValue[0] + props.stepTime <= endTimestamp.value && props.modelValue[1] + props.stepTime <= endTimestamp.value) {
            emit('update:modelValue', [props.modelValue[0] + props.stepTime, props.modelValue[1] + props.stepTime]);
          } else {
            playing.value = false;
          }
        }, props.playingStepDuration);
      }
    });

    return {
      ticks,
      playing,
      ColorEnum,
      lightColors,
      intervalTime,
      endTimestamp,
      startTimestamp,
      maximumTickToShow,
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