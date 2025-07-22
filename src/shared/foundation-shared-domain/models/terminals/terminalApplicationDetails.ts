import { TerminalApplicationInfos, type TerminalApplicationInfosDTO } from "./terminalApplicationInfos";

export class TerminalApplicationDetails extends TerminalApplicationInfos {
  constructor(params: TerminalApplicationDetailsDTO) {
    super(params);
  }
}

export interface TerminalApplicationDetailsDTO extends TerminalApplicationInfosDTO {
}

export interface CreateApplicationTerminalDTO {
  label: string;
  icon: string;
  key: string;
  location: string;
  token: string;
}

export interface UpdateTerminalApplicationDTO {
  label: string;
  icon: string;
  location: string;
  token: string;
}