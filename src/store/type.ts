export interface PlayMusicStateType {
  instance: HTMLAudioElement | null;
  status: boolean;
  seek: number;
  duration: number;
  progress: number;

  setInstance: (instance: HTMLAudioElement) => HTMLAudioElement;
  toggleStatus: (status?: boolean) => void;
  eventListener: (remove?: boolean) => void;
  seekUpdate: () => void;
}
