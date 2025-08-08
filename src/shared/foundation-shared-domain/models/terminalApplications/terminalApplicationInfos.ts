import { isoToEpoch } from "../../tools/datesTools";

export class TerminalApplicationInfos {
  id: string;
  userId: string;
  label: string;
  icon: string;
  location: string;
  lastConnection: number;

  constructor(params: TerminalApplicationInfosDTO) {
    this.id = params.id;
    this.userId = params.userId;
    this.label = params.label;
    this.icon = params.icon;
    this.location = params.location;
    this.lastConnection = isoToEpoch(params.lastConnection);
  }
}

export interface TerminalApplicationInfosDTO {
  id: string;
  userId: string;
  label: string;
  icon: string;
  location: string;
  lastConnection: string;
}

export interface TerminalApplicationFilters {
  search?: string | null;
}