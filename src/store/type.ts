import { ParsedLyric } from "../type";

export interface PlayMusicStateType {
  instance: HTMLAudioElement | null;
  status: boolean;
  seek: number;
  duration: number;
  progress: number;
  lyric: ParsedLyric[];

  setInstance: (instance: HTMLAudioElement) => HTMLAudioElement;
  setLyric: (instance: ParsedLyric[]) => void;
  toggleStatus: (status?: boolean) => void;
  eventListener: (remove?: boolean) => void;
  seekUpdate: () => void;
}
