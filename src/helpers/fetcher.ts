import type { Optional } from "@/types";

export const fetcher = async <T>(
  url: string,
  params?: RequestInit,
): Promise<Optional<T>> => {
  try {
    const response = await fetch(url, params);

    return response.json() as unknown as Promise<Optional<T>>;
  } catch {
    return undefined;
  }
};
