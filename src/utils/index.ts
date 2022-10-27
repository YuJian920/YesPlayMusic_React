/**
 * 毫秒转换秒
 * @param millisecond
 * @returns
 */
export const millisToMinutesAndSeconds = (millisecond: number) => {
  const minutes = Math.floor(millisecond / 60000);
  const seconds = ((millisecond % 60000) / 1000).toFixed(0);

  return +seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;
};
