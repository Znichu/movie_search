import axios from "axios";
import {ResponseMovieType} from "../type/types";


export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});
const api_key = process.env.REACT_APP_API_KEY;

export const movieAPI = {
    getPopularMovies(currentPage: number = 1) {
        return instance.get<ResponseMovieType>(`movie/popular?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data);
    },
    getUpcomingMovies(currentPage: number = 1) {
        return instance.get<ResponseMovieType>(`movie/upcoming?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data);
    },
    getTopRatedMovies(currentPage: number = 1) {
        return instance.get<ResponseMovieType>(`movie/top_rated?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data);
    },
    searchMovie(title: string, currentPage: number = 1) {
      return instance.get<ResponseMovieType>(`search/movie?api_key=${api_key}&language=en-US&query=Potter&page=${currentPage}&include_adult=false`)
          .then(res => res.data)
    }
};