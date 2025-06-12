import type { DashboardType } from '@dative-gpi/foundation-shared-domain/enums';

export class PlaylistDashboard
{
  id: string;
  dashboardScopeId: string;
  dashboardType: DashboardType;
  index: number;

  constructor(params: PlaylistDashboardDTO)
  {
      this.id = params.id;
      this.dashboardScopeId = params.dashboardScopeId;
      this.dashboardType = params.dashboardType as DashboardType;
      this.index = params.index;
  }
}

export interface PlaylistDashboardDTO
{
    id: string;
    dashboardScopeId: string;
    dashboardType: number;
    index: number;
}

export interface CreatePlaylistDashboardDTO {
    dashboardScopeId: string;
    dashboardType: number;
    index: number;
}
