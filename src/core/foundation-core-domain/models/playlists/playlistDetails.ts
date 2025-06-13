import { PlaylistInfos, type PlaylistInfosDTO } from "./playlistInfos";
import type { CreatePlaylistDashboardDTO } from "./playlistDashboard";

export class PlaylistDetails extends PlaylistInfos {

  constructor(params: PlaylistDetailsDTO) {
    super(params);
  }
}

export interface PlaylistDetailsDTO extends PlaylistInfosDTO {
}

export interface CreatePlaylistDTO {
  label: string;
  description: string;
  icon: string;
  code: string;
  looped: boolean;
  delay: number;
  dashboards: CreatePlaylistDashboardDTO[];
}

export interface UpdatePlaylistDTO {
  label: string;
  description: string;
  icon: string;
  code: string;
  looped: boolean;
  delay: number;
  dashboards: CreatePlaylistDashboardDTO[];
}