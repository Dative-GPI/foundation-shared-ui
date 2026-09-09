import type { Days } from '@/shared/foundation-shared-domain/enums';
import { TimeRange } from '@/core/foundation-core-domain/models/shared';

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