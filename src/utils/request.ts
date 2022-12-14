import { stringify } from 'qs';
import type { RequestOptions } from '../type';

const baseURL = 'http://localhost:3000';

export default async <T>(endpoint: string, option: RequestOptions = {}): Promise<T> => {
	const data = option.data || option;
	const path = `${baseURL}${endpoint}` + (data ? `?${stringify(data)}` : '');
	try {
		const response = await fetch(path);
		const result = await response.json();
		if (response.ok) return result;
		else return Promise.reject(result);
	} catch (error) {
		return Promise.reject(error);
	}
};
