import type { SongDetailType } from "../api/song/type";
import type { ParsedLyric } from "../type";

export interface PlayMusicStateType {
  isShowPlayer: boolean;
  instance: HTMLAudioElement | null;
  isPlay: boolean;
  seek: number;
  duration: number;
  progress: number;
  lyric: ParsedLyric[];
  currentPlay: SongDetailType | null;

  togglePlayerShow: (isShowPlayer?: boolean) => void;
  setInstance: (instance: HTMLAudioElement, autoPlay?: boolean) => HTMLAudioElement;
  setLyric: (instance: ParsedLyric[]) => void;
  togglePlay: (isPlay?: boolean) => void;
  eventListener: (remove?: boolean) => void;
  seekUpdate: () => void;
  setCurrentPlay: (currentPlay: SongDetailType) => void;
}
