import type { AggregationType, EntityType } from "@dative-gpi/foundation-shared-domain/enums";

export interface AbsoluteProfitsComparisonFilter {
  referencePeriodStart: string;
  referencePeriodEnd: string;
  observedPeriodStart: string;
  observedPeriodEnd: string;

  dataDefinitionId: string;
  timeOffset: number;

  entityType: EntityType;
  entitiesIds: string[];

  unit: string;
  aggregation: AggregationType;
}