import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});
const api_key = process.env.REACT_APP_API_KEY;

export const movieAPI = {
    getPopularMovies(currentPage: number = 1) {
        return instance.get(`movie/popular?api_key=${api_key}=en-US&page=${currentPage}`)
            .then((response) => response.data);
    }
};