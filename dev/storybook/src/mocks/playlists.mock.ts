import type { PlaylistDashboard, PlaylistInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const PLAYLISTS: PlaylistInfosDTO[] = [{
  id: "playlist1",
  icon: "mdi-pencil",
  code: "p1",
  label: "Playlist 1",
  description: "This is the first playlist",
  looped: true,
  delay: 0,
  dashboards: []
}, {
  id: "playlist2",
  icon: "",
  code: "p2",
  label: "Playlist 2",
  looped: false,
  delay: 5,
  description: "This is the second playlist",
  dashboards: [
    {
      id: "dashboard1",
      dashboardScopedId: "dashboardScopedId1",
      dashboardType: 1,
      index: 0
    }
  ]
}];