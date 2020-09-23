export type MovieType = {
    popularity: number
    vote_count: number
    video: boolean
    poster_path: string
    id: number
    adult:false
    backdrop_path: string
    original_language: string
    original_title: string
    genre_ids: number[]
    title: string
    vote_average: number
    overview: string
    release_date: number
    genres: GenresType[]
    tagline: string
    budget: number
    runtime: number
}

type GenresType = {
    id: number
    name: string
}

export type ResponseMovieType = {
    page: number
    total_results: number
    total_pages: number
    results: MovieType[]
}