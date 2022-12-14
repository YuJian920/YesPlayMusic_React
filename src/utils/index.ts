/**
 * 毫秒转换分
 * @param millisecond
 * @returns
 */
export const millisToMinutesAndSeconds = (millisecond?: number) => {
	if (!millisecond) return;
	const minutes = Math.floor(millisecond / 60000);
	const seconds = ((millisecond % 60000) / 1000).toFixed(0);

	return +seconds == 60 ? minutes + 1 + ':00' : minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
};

export const secondsToAny = (duration: number) => {
	const hrs = ~~(duration / 3600);
	const mins = ~~((duration % 3600) / 60);
	const secs = ~~duration % 60;
	let ret = '';

	if (hrs > 0) ret += '' + hrs + ':' + (mins < 10 ? '0' : '');

	ret += '' + mins + ':' + (secs < 10 ? '0' : '');
	ret += '' + secs;
	return ret;
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

	return `${Y}年${M < 10 ? '0' + M : M}月${D < 10 ? '0' + D : D}日`;
};
