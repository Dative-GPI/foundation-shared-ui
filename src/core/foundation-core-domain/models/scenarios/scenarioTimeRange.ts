import type { Days } from "@dative-gpi/foundation-shared-domain/enums";
import { TimeRange } from "../shared/timeRange";

export class ScenarioTimeRange extends TimeRange {
  timeZoneId: string | null;
  
  constructor(params: ScenarioTimeRangeDTO) {
    super(params);
    this.timeZoneId = params.timeZoneId ?? null;
  }
}

export interface ScenarioTimeRangeDTO {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
  timeZoneId?: string | null;
}

export interface CreateScenarioTimeRangeDTO {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
  timeZoneId: string;
}