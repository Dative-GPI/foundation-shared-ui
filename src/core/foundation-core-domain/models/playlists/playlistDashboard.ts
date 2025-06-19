import type { DashboardType } from '@dative-gpi/foundation-shared-domain/enums';

export class PlaylistDashboard
{
  id: string;
  dashboardScopedId: string;
  dashboardType: DashboardType;
  index: number;

  constructor(params: PlaylistDashboardDTO)
  {
      this.id = params.id;
      this.dashboardScopedId = params.dashboardScopedId;
      this.dashboardType = params.dashboardType as DashboardType;
      this.index = params.index;
  }
}

export interface PlaylistDashboardDTO
{
    id: string;
    dashboardScopedId: string;
    dashboardType: number;
    index: number;
}

export interface CreatePlaylistDashboardDTO {
    dashboardScopedId: string;
    dashboardType: number;
    index: number;
}
