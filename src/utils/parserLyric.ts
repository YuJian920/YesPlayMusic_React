import { ParsedLyric } from "../type";

const extractLrcRegex =
  /^(?<lyricTimestamps>(?:\[.+?\])+)(?!\[)(?<content>.+)$/gm;
const extractTimestampRegex =
  /\[(?<min>\d+):(?<sec>\d+)(?:\.|:)*(?<ms>\d+)*\]/g;

/**
 * Parse the lyric string.
 */
export const parseLyric = (lrc: string) => {
  // A sorted list of parsed lyric and its timestamp.
  const parsedLyrics: ParsedLyric[] = [];

  /**
   * Find the appropriate index to push our parsed lyric.
   */
  const binarySearch = (lyric: ParsedLyric) => {
    let time = lyric.time;

    let low = 0;
    let high = parsedLyrics.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midTime = parsedLyrics[mid].time;
      if (midTime === time) {
        return mid;
      } else if (midTime < time) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return low;
  };

  for (const line of lrc.trim().matchAll(extractLrcRegex)) {
    const { lyricTimestamps, content } = line.groups!;

    for (const timestamp of lyricTimestamps.matchAll(extractTimestampRegex)) {
      const { min, sec, ms } = timestamp.groups!;
      const rawTime = timestamp[0];
      const time = Number(min) * 60 + Number(sec) + Number(ms ?? 0) * 0.001;

      /** @type {ParsedLyric} */
      const parsedLyric = { rawTime, time, content: trimContent(content) };
      parsedLyrics.splice(binarySearch(parsedLyric), 0, parsedLyric);
    }
  }

  return parsedLyrics;
};

/**
 * @param {string} content
 * @returns {string}
 */
const trimContent = (content: string) => {
  let t = content.trim();
  return t.length < 1 ? content : t;
};
