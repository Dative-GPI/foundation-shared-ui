import { PlaylistDashboard, type PlaylistDashboardDTO } from './playlistDashboard';

export class PlaylistInfos {
  id: string;
  label: string;
  description: string;
  icon: string;
  code: string;
  looped: boolean;
  delay: number;
  dashboards: PlaylistDashboard[];

  constructor(params: PlaylistInfosDTO) {
    this.id = params.id;
    this.label = params.label;
    this.description = params.description;
    this.icon = params.icon;
    this.code = params.code;
    this.looped = params.looped;
    this.delay = params.delay;
    this.dashboards = params.dashboards.map((d: PlaylistDashboardDTO) => new PlaylistDashboard(d));
  }
}

export interface PlaylistInfosDTO {
  id: string;
  label: string;
  description: string;
  icon: string;
  code: string;
  looped: boolean;
  delay: number;
  dashboards: PlaylistDashboardDTO[];
}

export interface PlaylistFilters {
  playlistsIds?: string[] | null;
  search?: string | null;
}