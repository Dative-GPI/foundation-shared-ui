<template>
  <FSDataTable
    defaultMode="table"
    :loading="fetchingReportExecutions"
    :headersOptions="headersOptions"
    :items="reportExecutions"
    :tableCode="tableCode"
    :groupBy="groupByExecutionDate"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
    <template
      #item.state="{ item }"
    >
      <FSRow
        align="center-left"
        :wrap="false"
      >
        <FSIcon
          :color="getColorByState(item.state)"
        >
          {{ getIconByState(item.state) }}
        </FSIcon>
        <FSText
          font="text-overline"
          :color="getColorByState(item.state)"
        >
          {{ getLabelByState(item.state) }} 
        </FSText>
      </FSRow>
    </template> 
    <template
      #item.executedAt="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeOnlyFormat(item.executedAt) }}
      </FSSpan>
    </template>
    <template
      #item.users="{ item }"
    >
      <FSChipGroup
        variant="slide"
        :labels="item.users"
      />
    </template>
  </FSDataTable>
</template>
  
  <script lang="ts">
import { defineComponent, type PropType, computed, watch } from "vue";
import _ from "lodash";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { JobState } from "@dative-gpi/foundation-shared-domain/enums";
import { getLabelByState, getColorByState, getIconByState } from "@dative-gpi/foundation-shared-components/tools";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import type { ReportExecutionFilters } from "@dative-gpi/foundation-core-domain/models";
import { useReportExecutions } from "@dative-gpi/foundation-core-services/composables";
  
import FSChipGroup from "@dative-gpi/foundation-shared-components/components/FSChipGroup.vue";

export default defineComponent({
  name: "FSBaseReportExecutionsList",
  components: {
    FSChipGroup
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    reportExecutionsFilters: {
      type: Object as PropType<ReportExecutionFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { epochToLongTimeFormat, epochToLongDateFormat, epochToShortTimeOnlyFormat } = useDateFormat();
    const { getMany: fetchReportExecutions, fetching: fetchingReportExecutions, entities: reportExecutions } = useReportExecutions();

    const groupByExecutionDate = {
      key: "executedAtGroup",
      order: "desc"
    };

    const headersOptions = computed(() => ({
      state: {
        fixedFilters: getEnumEntries(JobState).map(e => ({
          value: e.value,
          text: getLabelByState(e.value)
        })),
        methodFilter: (value: JobState, item: JobState) => value == item
      }
    }));
    
    watch(() => props.reportExecutionsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchReportExecutions(props.reportExecutionsFilters);
      }
    }, { immediate: true });
  
    return {
      fetchingReportExecutions,
      groupByExecutionDate,
      reportExecutions,
      headersOptions,
      getColorByState,
      getIconByState,
      getLabelByState,
      epochToLongTimeFormat,
      epochToLongDateFormat,
      epochToShortTimeOnlyFormat
    };
  }
});
  </script>