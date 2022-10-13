const baseURL = "http://localhost:3000";

export default async <T>(endpoint: string): Promise<Awaited<T>> => {
  return fetch(`${baseURL}${endpoint}`)
    .then(async (response) => {
      const result = await response.json();
      if (response.ok) return result.data;
      else return Promise.reject(result);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
