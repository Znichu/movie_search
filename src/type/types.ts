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
    runtime: number,
    credits: {
        crew: CrewItemType[]
    }
}

export type CrewItemType = {
    credit_id: string
    department: string
    gender: number
    id: number
    job: string
    name: string
    profile_path: null | string
}
export type GenresType = {
    id: number
    name: string
}

export type ResponseMovieType = {
    page: number
    total_results: number
    total_pages: number
    results: MovieType[]
}