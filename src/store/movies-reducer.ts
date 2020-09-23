import { ThunkAction } from "redux-thunk";
import { InferActionTypes, RootState } from "./store";
import { movieAPI } from "../api/movie";
import {MovieType} from "../type/types";

let initialState = {
    movies: [] as MovieType[],
    totalCount: 0,
    currentPage: 1,
    totalPages: 0,
    heroImage: [] as MovieType[],
    isFetching: false,
    notFound: false,
};

//Reducer
export const MoviesReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_POPULAR_MOVIES":
        case "SET_TOP_RATED_MOVIES":
        case "SET_UPCOMING_MOVIES": {
            return {
                ...state,
                    movies: action.movies,
                    totalCount: action.totalCount,
                    totalPages: action.totalPages,
                    currentPage: action.currentPage
            }
        }
        case "SET_NOW_PLAYING_MOVIES": {
            return {
                ...state,
                heroImage: action.movies,
                totalCount: action.totalCount,
                totalPages: action.totalPages,
                currentPage: action.currentPage
            }
        }
        case "TOGGLE_IS_FETCHING":
            return { ...state, isFetching: action.isFetching };
        case "SET_NOT_FOUND":
            return { ...state, notFound: action.notFound };
        default:
            return state;
    }
};

//Actions
export const actions = {
    setPopularMovies: (movies: MovieType[], totalCount: number, totalPages: number, currentPage: number) => ({ type: "SET_POPULAR_MOVIES", movies, totalCount, totalPages, currentPage } as const),
    setUpcomingMovies: (movies: MovieType[], totalCount: number, totalPages: number, currentPage: number ) => ({ type: "SET_UPCOMING_MOVIES", movies, totalCount, totalPages, currentPage } as const),
    setTopRatedMovies: (movies: MovieType[], totalCount: number, totalPages: number, currentPage: number ) => ({ type: "SET_TOP_RATED_MOVIES", movies, totalCount, totalPages, currentPage } as const),
    setNowPlayingMovies: (movies: MovieType[], totalCount: number, totalPages: number, currentPage: number ) => ({ type: "SET_NOW_PLAYING_MOVIES", movies, totalCount, totalPages, currentPage } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: "TOGGLE_IS_FETCHING", isFetching } as const),
    setNotFound: (notFound: boolean) => ({ type: "SET_NOT_FOUND", notFound } as const)
};

//Thunk
export const requestPopularMovies = (currentPage: number): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.toggleIsFetching(true));
        let data = await movieAPI.getPopularMovies(currentPage);
        dispatch(actions.setPopularMovies(data.results, data.total_results, data.total_pages, data.page));
    } catch (e) {
        console.log(e.message);
    }
    dispatch(actions.toggleIsFetching(false));
};

export const requestUpcomingMovies = (currentPage: number): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.toggleIsFetching(true));
        const data = await movieAPI.getUpcomingMovies(currentPage);
        dispatch(actions.setUpcomingMovies(data.results, data.total_results, data.total_pages, data.page));
    } catch (e) {
        console.log(e.message)
    }
    dispatch(actions.toggleIsFetching(false));
}

export const requestTopRatedMovies = (currentPage: number): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.toggleIsFetching(true));
        let data = await movieAPI.getTopRatedMovies(currentPage);
        dispatch(actions.setTopRatedMovies(data.results, data.total_results, data.total_pages, data.page));
    } catch (e) {
        console.log(e.message);
    }
    dispatch(actions.toggleIsFetching(false));
}

export const requestNowPlayingMovies = (currentPage: number): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.toggleIsFetching(true));
        let data = await movieAPI.getNowPlayingMovies(currentPage);
        dispatch(actions.setNowPlayingMovies(data.results, data.total_results, data.total_pages, data.page));
    } catch (e) {
        console.log(e.message);
    }
    dispatch(actions.toggleIsFetching(false));
}

//Types
type InitialStateType = typeof initialState;
type ThunkType = ThunkAction<Promise<void>, RootState, {}, ActionsTypes>;
type ActionsTypes = InferActionTypes<typeof actions>;
