import { ParsedLyric } from "../type";

export interface PlayMusicStateType {
  isShowPlayer: boolean;
  instance: HTMLAudioElement | null;
  isPlay: boolean;
  seek: number;
  duration: number;
  progress: number;
  lyric: ParsedLyric[];

  togglePlayerShow: (isShowPlayer?: boolean) => void;
  setInstance: (instance: HTMLAudioElement) => HTMLAudioElement;
  setLyric: (instance: ParsedLyric[]) => void;
  togglePlay: (isPlay?: boolean) => void;
  eventListener: (remove?: boolean) => void;
  seekUpdate: () => void;
}
