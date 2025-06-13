import { CORE_URL } from "./base";

export const PLAYLISTS_URL = () => `${CORE_URL()}/playlists`;
export const PLAYLIST_URL = (playlistId: string) => `${PLAYLISTS_URL()}/${encodeURIComponent(playlistId)}`;