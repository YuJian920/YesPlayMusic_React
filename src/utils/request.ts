import { stringify } from "qs";

const baseURL = "http://localhost:3000";

interface RequestOptions {
  data?: object | string;
}

export default async <T>(
  endpoint: string,
  option: RequestOptions = {}
): Promise<Awaited<T>> => {
  const { data } = option;
  const path = `${baseURL}${endpoint}` + (data ? `?${stringify(data)}` : "");
  return fetch(path)
    .then(async (response) => {
      const result = await response.json();
      if (response.ok) return result;
      else return Promise.reject(result);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
