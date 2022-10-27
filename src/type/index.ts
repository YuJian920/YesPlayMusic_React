export interface RequestOptions {
  data?: object | string;
  [index: string]: any;
}

/**
 * 基础请求类型
 */
export interface BaseResponse {
  code: number;
  [index: string]: any;
}

/**
 * 专辑相关类型
 */
export interface AlbumType {
  id: number;
  name: string;
  pic: number;
  picUrl: string;
  pic_str: string;
  tns: any[];
}

/**
 * 歌手相关类型
 */
export interface ArtistType {
  alias: string[];
  id: number;
  name: string;
  tns: any[];
}
