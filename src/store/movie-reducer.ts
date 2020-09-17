import { ThunkAction } from "redux-thunk";
import { InferActionTypes, RootState } from "./store";
import { movieAPI } from "../api/movie";
import {MovieType} from "../type/types";

let initialState = {
    popularMovies: [] as MovieType[],
    upcomingMovies: [] as MovieType[],
    heroImage: {} as MovieType,
    movies: [] as Array<MovieType>,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    notFound: false,
    searchTitle: "",
    newTitle: ""
};

//Reducer
export const MoviesReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_POPULAR_MOVIES": {
            return {
                ...state,
                popularMovies: action.movies
            }
        }
        case "SET_UPCOMING_MOVIES": {
            return {
                ...state,
                upcomingMovies: action.movies
            }
        }
        case "SET_HERO_IMAGE": {
            return {
                ...state,
                heroImage: action.movie
            }
        }
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.numberPage };
        case "TOGGLE_IS_FETCHING":
            return { ...state, isFetching: action.isFetching };
        case "SET_SEARCH_NEW_TITLE":
            return { ...state, newTitle: action.newTitle };
        case "SET_NOT_FOUND":
            return { ...state, notFound: action.notFound };
        default:
            return state;
    }
};

//Actions
export const actions = {
    setPopularMovies: (movies: MovieType[]) => ({ type: "SET_POPULAR_MOVIES", movies } as const),
    setUpcomingMovies: (movies: MovieType[] ) => ({ type: "SET_UPCOMING_MOVIES", movies } as const),
    setHeroImage: (movie: MovieType ) => ({ type: "SET_HERO_IMAGE", movie } as const),
    setCurrentPage: (numberPage: number) => ({ type: "SET_CURRENT_PAGE", numberPage } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: "TOGGLE_IS_FETCHING", isFetching } as const),
    setSearchTitle: (newTitle: string) => ({ type: "SET_SEARCH_NEW_TITLE", newTitle } as const),
    setNotFound: (notFound: boolean) => ({ type: "SET_NOT_FOUND", notFound } as const)
};

//Thunk
export const requestPopularMovies = (): ThunkType => async (dispatch) => {

    let index = Math.floor(Math.random() * (20 + 1 - 1));

    try {
/*        dispatch(actions.setCurrentPage(currentPage));*/
        dispatch(actions.toggleIsFetching(true));
        let data = await movieAPI.getPopularMovies();
        dispatch(actions.setHeroImage(data.results[index]))
        dispatch(actions.setPopularMovies(data.results))
    } catch (e) {
        console.log(e.message);
    }
    dispatch(actions.toggleIsFetching(false));
};
export const requestUpcomingMovies = (): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.toggleIsFetching(true));
        const data = await movieAPI.getUpcomingMovies();
        dispatch(actions.setUpcomingMovies(data.results))
    } catch (e) {
        console.log(e.message)
    }
    dispatch(actions.toggleIsFetching(false))
}

//Types
type InitialStateType = typeof initialState;
type ThunkType = ThunkAction<Promise<void>, RootState, {}, ActionsTypes>;
type ActionsTypes = InferActionTypes<typeof actions>;
