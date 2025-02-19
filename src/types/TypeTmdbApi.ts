export interface TypeTmdbApi {
  type: 'movie' | 'tv',
  options?: {}
}

export interface TypeSuccessResponse {
  results: [{
    poster_path: string
  }]
}