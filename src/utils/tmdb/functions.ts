import { TmdbApi } from "@/api/apiTmdb";
import { TypeTmdbApi } from "@/types/TypeTmdbApi"

export async function getLists({ type, options }: TypeTmdbApi) {
  const response = await TmdbApi({ type, options })
  return response.results;
}