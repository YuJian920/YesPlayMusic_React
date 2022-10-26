import { BaseResponse } from "../type";

/**
 * 所有榜单
 */
export interface GetTopListType extends BaseResponse {
  coverUrl: string;
  name: string;
  upateFrequency: string;
  updateFrequency: string;
  list: TopListType[];
}

export interface TopListType {
  coverImgId: number;
  coverImgUrl: string;
  description: string;
  name: string;
  updateFrequency: string;
}

/**
 * 推荐歌单
 */
export interface GetPersonalizedListType extends BaseResponse {
  result: PersonalizedListType[];
}

export interface PersonalizedListType {
  id: number;
  name: string;
  picUrl: string;
}

/**
 * 歌单详情
 */
export interface GetPlayListDetailType extends BaseResponse {
  playlist: PlayListDetailType;
}

export interface PlayListDetailType {
  id: number;
  name: string;
  coverImgUrl: string;
  description: string;
  tracks: PlayListDetailListType[];
  userId: number;
}

export interface PlayListDetailListType {
  al: {
    id: number;
    name: string;
    picUrl: string;
  };
  dt: number;
  ar: {
    id: number;
    name: string;
  }[];
  name: string;
}
