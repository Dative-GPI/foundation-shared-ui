import { ref } from "vue";

import { uuidv4 } from "@dative-gpi/bones-ui";

import { getManyDatas } from "@dative-gpi/foundation-core-services/composables";

import { RootMode } from "@dative-gpi/foundation-shared-domain/enums";

import type { DataFiltersDTO, DataLeafDTO, AggregateValueFilter } from "@dative-gpi/foundation-core-domain/models";

export const useAggregateValue = () => {
  const fetching = ref(false);
  const error = ref<string | null>(null);
  const value = ref<number | null>(null);
  
  const fetch = async (filter: AggregateValueFilter) => {
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
    value.value = null;

    try {
      const periodFilters: DataFiltersDTO = {
        startDate: filter.start,
        endDate: filter.end,
        timeOffset: filter.timeOffset,
        dateVariables: [],
        mode: RootMode.Leaf,
        leaf: { ...leaf, correlationId: uuidv4() } as DataLeafDTO
      };

      const dataSerie = await getManyDatas(periodFilters);

      const dataSerieValue = dataSerie?.[0]?.datas?.[0]?.values?.[0];

      value.value = dataSerieValue == null ? null : Number(dataSerieValue);

    } catch (exception: any) {
      error.value = exception.response?.data ?? exception.message;
    } finally {
      fetching.value = false;
    }
  };

  return {
    fetching,
    error,
    value,
    fetch,
  };
};