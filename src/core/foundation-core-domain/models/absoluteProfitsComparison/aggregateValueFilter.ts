import type { AggregationType, EntityType } from "@dative-gpi/foundation-shared-domain/enums";

export interface AggregateValueFilter {
  start: string;
  end: string;

  dataDefinitionId: string;
  timeOffset: number;

  entityType: EntityType;
  entitiesIds: string[];

  unit: string;
  aggregation: AggregationType;
}