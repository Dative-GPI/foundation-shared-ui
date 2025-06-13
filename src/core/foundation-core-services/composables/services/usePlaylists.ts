import { PlaylistDetails, type PlaylistDetailsDTO, type PlaylistFilters, PlaylistInfos, type PlaylistInfosDTO, type CreatePlaylistDTO, type UpdatePlaylistDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { PLAYLISTS_URL, PLAYLIST_URL } from "../../config/urls";

const PlaylistServiceFactory = new ServiceFactory<PlaylistDetailsDTO, PlaylistDetails>("playlist", PlaylistDetails)
  .createComplete<PlaylistInfos, PlaylistInfosDTO, CreatePlaylistDTO, UpdatePlaylistDTO, PlaylistFilters>(PLAYLISTS_URL, PLAYLIST_URL, PlaylistInfos);

export const usePlaylist = ComposableFactory.get(PlaylistServiceFactory);
export const usePlaylists = ComposableFactory.getMany(PlaylistServiceFactory);
export const useCreatePlaylist = ComposableFactory.create(PlaylistServiceFactory);
export const useUpdatePlaylist = ComposableFactory.update(PlaylistServiceFactory);
export const useRemovePlaylist = ComposableFactory.remove(PlaylistServiceFactory);