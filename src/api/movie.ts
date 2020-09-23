import axios from "axios";
import {MovieType, ResponseMovieType} from "../type/types";


export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});
const api_key = process.env.REACT_APP_API_KEY;

export const movieAPI = {
    getPopularMovies(currentPage: number ) {
        return instance.get<ResponseMovieType>(`movie/popular?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data);
    },
    getUpcomingMovies(currentPage: number ) {
        return instance.get<ResponseMovieType>(`movie/upcoming?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data);
    },
    getTopRatedMovies(currentPage: number ) {
        return instance.get<ResponseMovieType>(`movie/top_rated?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data);
    },
    getNowPlayingMovies(currentPage: number){
        return instance.get<ResponseMovieType>(`movie/now_playing?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data)
    },
    searchMovie(title: string, currentPage: number ) {
      return instance.get<ResponseMovieType>(`search/movie?api_key=${api_key}&language=en-US&query=${title}&page=${currentPage}&include_adult=false`)
          .then(res => res.data)
    },
    getMovieDetails(movieId: number) {
        return instance.get<MovieType>(`movie/${movieId}?api_key=${api_key}&language=en-US`)
            .then(res => res.data)
    }
};