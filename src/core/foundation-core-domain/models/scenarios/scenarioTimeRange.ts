import type { Days } from "@dative-gpi/foundation-shared-domain/enums";
import { TimeRange } from "../shared/timeRange";

export class ScenarioTimeRange extends TimeRange {
  timeZoneId: string;
  
  constructor(params: ScenarioTimeRangeDTO) {
    super(params);
    this.timeZoneId = params.timeZoneId ?? '';
  }
}

export interface ScenarioTimeRangeDTO {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
  timeZoneId?: string;
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