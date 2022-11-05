import create from "zustand";
import type { PlayMusicStateType } from "./type";

export const usePlayMusicStore = create<PlayMusicStateType>((set, get) => ({
  instance: null,
  status: false,
  seek: 0,
  duration: 0,
  progress: 0,
  lyric: [],

  setInstance: (instance) => {
    set(() => ({ instance }));
    get().eventListener();
    return instance;
  },
  setLyric: (lyric) => {
    set(() => ({ lyric }));
  },
  toggleStatus: async (status) => {
    if (status === undefined) status = !get().status;

    if (status) await get().instance?.play();
    else get().instance?.pause();

    set(() => ({ status }));
  },
  eventListener: (remove = false) => {
    const { instance, seekUpdate, toggleStatus } = get();
    const pauseAudio = () => toggleStatus(false);

    if (!instance) return;
    if (remove) {
      instance.removeEventListener("timeupdate", seekUpdate);
      instance.removeEventListener("ended", pauseAudio);
      return;
    }

    instance.addEventListener("timeupdate", seekUpdate);
    instance.addEventListener("ended", pauseAudio);
  },
  seekUpdate: () => {
    const { instance } = get();

    set(() => ({
      seek: instance?.currentTime,
      duration: instance?.duration,
      progress: (instance?.currentTime! / instance?.duration!) * 100,
    }));
  },
}));
