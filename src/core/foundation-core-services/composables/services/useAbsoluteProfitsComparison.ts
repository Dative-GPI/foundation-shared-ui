import { ref } from "vue";

import { uuidv4 } from "@dative-gpi/bones-ui";

import { getManyDatas } from "@dative-gpi/foundation-core-services/composables";

import { RootMode } from "@dative-gpi/foundation-shared-domain/enums";

import type { DataFiltersDTO, DataLeafDTO, AbsoluteProfitsComparisonFilter } from "@dative-gpi/foundation-core-domain/models";

export const useAbsoluteProfitsComparison = () => {
  const fetching = ref(false);
  const error = ref<string | null>(null);
  const rawReferenceValue = ref<number | null>(null);
  const rawObservedValue = ref<number | null>(null);
  
  const fetch = async (filter: AbsoluteProfitsComparisonFilter) => {
    fetching.value = true;

    const leaf = {
      correlationId: uuidv4(),
      entitiesIds: filter.entitiesIds,
      entityType: filter.entityType,
      labelTemplate: "",
      aggregateByEntity: 0,
      aggregationTimeStep: undefined,
      duration: 0,
      durationTimeStep: undefined,
      durationDataDefinitionId: undefined,
      durationDataScale: 0,
      dataDefinitions: [
        {
          dataDefinitionId: filter.dataDefinitionId,
          codeTemplate: "",
          label:  "",
          unit: filter.unit,
          sort: 0,
          aggregation: filter.aggregation,
          code: ""
        }
      ],
      groupByDataDefinitionIds: [],
      take: 0,
      removeRedundants: false,
      dataCriterias: [],
      timeCriterias: [],
      executionIndex: 0
    };
    
    error.value = null;
    rawReferenceValue.value = null;
    rawObservedValue.value = null;

    try {
      const refFilters: DataFiltersDTO = {
        startDate: filter.referencePeriodStart,
        endDate: filter.referencePeriodEnd,
        timeOffset: filter.timeOffset,
        dateVariables: [],
        mode: RootMode.Leaf,
        leaf: { ...leaf, correlationId: uuidv4() } as DataLeafDTO
      };

      const actFilters: DataFiltersDTO = {
        startDate: filter.observedPeriodStart,
        endDate: filter.observedPeriodEnd,
        timeOffset: filter.timeOffset,
        dateVariables: [],
        mode: RootMode.Leaf,
        leaf: { ...leaf, correlationId: uuidv4() } as DataLeafDTO
      };

      const dataSerieReference = await getManyDatas(refFilters);
      const dataSerieObserved = await getManyDatas(actFilters);

      const rawRef = dataSerieReference?.[0]?.datas?.[0]?.values?.[0];
      const rawObs = dataSerieObserved?.[0]?.datas?.[0]?.values?.[0];

      rawReferenceValue.value = rawRef == null ? null : Number(rawRef);
      rawObservedValue.value  = rawObs == null ? null : Number(rawObs);

    } catch (exception: any) {
      error.value = exception.response?.data ?? exception.message;
    } finally {
      fetching.value = false;
    }
  };

  return {
    fetching,
    error,
    rawReferenceValue,
    rawObservedValue,
    fetch,
  };
};