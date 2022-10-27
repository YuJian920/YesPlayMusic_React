import type { AlbumType, ArtistType, BaseResponse } from "../../type";

export interface GetSongDetailType extends BaseResponse {
  songs: {
    name: string; // 歌曲标题
    id: number; // 歌曲ID
    t: 0 | 1 | 2;
    alia: string[];
    ar: ArtistType[];
    al: AlbumType; // 专辑信息
    dt: number; // 歌曲时长
    sq: any; // 无损质量文件信息
    h: any; // 高质量文件信息
    m: any; // 中质量文件信息
    l: any; // 低质量文件信息
  }[];
}
