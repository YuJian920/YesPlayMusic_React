import create from "zustand";
import type { PlayMusicStateType } from "./type";

export const usePlayMusicStore = create<PlayMusicStateType>((set, get) => ({
  // 歌词页面显示状态
  isShowPlayer: false,
  // 歌曲播放状态
  isPlay: false,

  // 歌曲 Audio 实例
  instance: null,
  // 当前播放市场
  seek: 0,
  // 歌曲总时长
  duration: 0,
  // 当前播放进度
  progress: 0,
  // 歌词数组
  lyric: [],
  currentPlay: null,

  /**
   * 切换歌词页显示，参数为空时自动取反
   * @param isShowPlayer
   */
  togglePlayerShow: (isShowPlayer) => {
    if (isShowPlayer === undefined) isShowPlayer = !get().isShowPlayer;

    set(() => ({ isShowPlayer }));
  },

  /**
   * 设置 Audio 实例
   * @param instance
   * @returns
   */
  setInstance: (instance, autoPlay = false) => {
    const { eventListener, togglePlay } = get();
    set(() => ({ instance }));
    eventListener();

    if (autoPlay) togglePlay(true);
    return instance;
  },

  /**
   * 设置歌词数据
   * @param lyric
   */
  setLyric: (lyric) => {
    set(() => ({ lyric }));
  },

  /**
   * 切换播放状态，参数为空时自动取反
   * @param isPlay
   */
  togglePlay: async (isPlay) => {
    const { isPlay: _isPlay, instance } = get();
    if (isPlay === undefined) isPlay = !_isPlay;

    if (isPlay) await instance?.play();
    else instance?.pause();

    set(() => ({ isPlay }));
  },

  /**
   * 监听播放状态
   * @param remove
   * @returns
   */
  eventListener: (remove = false) => {
    const { instance, seekUpdate, togglePlay } = get();
    const pauseAudio = () => togglePlay(false);

    if (!instance) return;
    if (remove) {
      instance.removeEventListener("timeupdate", seekUpdate);
      instance.removeEventListener("ended", pauseAudio);
      return;
    }

    instance.addEventListener("timeupdate", seekUpdate);
    instance.addEventListener("ended", pauseAudio);
  },

  /**
   * 调整歌曲进度
   */
  seekUpdate: () => {
    const { instance } = get();

    set(() => ({
      seek: instance?.currentTime,
      duration: instance?.duration,
      progress: (instance?.currentTime! / instance?.duration!) * 100,
    }));
  },

  setCurrentPlay: (currentPlay) => {
    set(() => ({ currentPlay }));
  },
}));
