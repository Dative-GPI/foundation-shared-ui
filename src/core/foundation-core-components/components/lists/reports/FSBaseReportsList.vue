<template>
  <FSDataTable
    defaultMode="table"
    :loading="fetchingReports"
    :items="reports"
    :showSelect="$props.selectable"
    :tableCode="tableCode"
    :itemTo="$props.itemTo"
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
      #item.icon="{ item }"
    >
      <FSIcon >
        {{ item.icon }}
      </FSIcon>
    </template>
    <template
      #item.lastExecution="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToLongTimeFormat(item.lastExecution) }}
      </FSSpan>
    </template>
    <template
      #item.nextExecution="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToLongTimeFormat(item.nextExecution) }}
      </FSSpan>
    </template>
    <template
      #item.createdAt="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToLongTimeFormat(item.createdAt) }}
      </FSSpan>
    </template>
    <template
      #item.userIds="{ item }"
    >
      <FSChipUserOrganisationsList
        :userOrganisationIds="item.userIds"
        :wrapped="false"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import _ from "lodash";
import type { RouteLocation } from "vue-router";
import { defineComponent, type PropType, watch } from "vue";

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import { useReports } from "@dative-gpi/foundation-core-services/composables";
import type { ReportFilters, ReportInfos } from "@dative-gpi/foundation-core-domain/models";

import FSChipUserOrganisationsList from "../userOrganisations/FSChipUserOrganisationsList.vue";


export default defineComponent({
  name: "FSBaseReportsList",
  components: {
    FSChipUserOrganisationsList
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    reportsFilters: {
      type: Object as PropType<ReportFilters>,
      required: false,
      default: null
    },
    selectable: {
      type: Boolean,
      required: false,
      default: true
    },
    itemTo: {
      type: Function as PropType<(item: ReportInfos) => Partial<RouteLocation>>,
      required: false
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { epochToLongTimeFormat } = useDateFormat();
    const { getMany: fetchReports, fetching: fetchingReports, entities: reports } = useReports();
    

    watch(() => props.reportsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchReports(props.reportsFilters);
      }
    }, { immediate: true });

    return {
      fetchingReports,
      reports,
      epochToLongTimeFormat
    };
  }
});
</script>