import axios from "axios";
import {ResponseMovieType} from "../type/types";


export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/"
});
const api_key = process.env.REACT_APP_API_KEY;

export const movieAPI = {
    getPopularMovies(currentPage: number = 1) {
        return instance.get<ResponseMovieType>(`popular?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data);
    },
    getUpcomingMovies(currentPage: number = 1) {
        return instance.get<ResponseMovieType>(`upcoming?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data);
    },
    getTopRatedMovies(currentPage: number = 1) {
        return instance.get<ResponseMovieType>(`top_rated?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(res => res.data);
    }
};