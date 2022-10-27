/**
 * 毫秒转换秒
 * @param millisecond
 * @returns
 */
export const millisToMinutesAndSeconds = (millisecond: number) => {
  if (!millisecond) return;
  const minutes = Math.floor(millisecond / 60000);
  const seconds = ((millisecond % 60000) / 1000).toFixed(0);

  return +seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;
};

/**
 * 时间戳转换年月日
 * @param timestamp 
 * @returns 
 */
export const timestampToYMD = (timestamp: number) => {
  const date = new Date(timestamp);
  const Y = date.getFullYear();
  const M = date.getMonth() + 1;
  const D = date.getDate();

  return `${Y}年${M < 10 ? "0" + M : M}月${D < 10 ? "0" + D : D}日`;
};
