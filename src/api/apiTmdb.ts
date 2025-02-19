// 'use server'

import axios from "axios"
import { TypeTmdbApi, TypeSuccessResponse } from "@/types/TypeTmdbApi"

export async function TmdbApi({ type, options }: TypeTmdbApi) {
  const url = process.env.NEXT_PUBLIC_TMDB_BASE_URL
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY

  const myUrl = url + type
  const myOptionsObject = {
    language: 'ja-JP',
    watch_region: 'JP',
    with_original_language: 'ja|en|ko', // 日本語・英語・韓国語
    with_watch_providers: '8', // Netflix
    ...options
  }

  let myOptions = ''
  for(const [key, value] of Object.entries(myOptionsObject)) {
    myOptions += `&${key}=${value}`
  }



  const param = `api_key=${key}` + myOptions



  const response = await axios.get(`${myUrl}?${param}`).then(res => res.data as TypeSuccessResponse)
  // const json = await response.json()

  return response
}