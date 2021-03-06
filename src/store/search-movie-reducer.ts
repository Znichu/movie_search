import {MovieType} from "../type/types";
import {InferActionTypes, RootState} from "./store";
import {ThunkAction} from "redux-thunk";
import {movieAPI} from "../api/movie";

let initialState = {
    movie: [] as MovieType[],
    totalResults: 0,
    currentPage: 1,
    searchTerm: "",
    isFetching: false

}

export const SearchMovieReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_SEARCH_MOVIE": {
            return {
                ...state,
                movie: action.movie,
                totalResults: action.totalResults
            }
        }
        case "SET_SEARCH_TITLE": {
            return {
                ...state,
                searchTerm: action.title
            }
        }
        case "SET_TOGGLE_IS_FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

//Actions
export const actions = {
    setSearchMovieResult: (movie: MovieType[], totalResults: number) => ({type: "SET_SEARCH_MOVIE", movie, totalResults} as const),
    setSearchTitle: (title: string) => ({type: 'SET_SEARCH_TITLE', title} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "SET_TOGGLE_IS_FETCHING", isFetching} as const )

}

//Thunk
export const requestSearchMovie = (title: string, currentPage: number): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.toggleIsFetching(true));
        let data = await movieAPI.searchMovie(title, currentPage);
        dispatch(actions.setSearchMovieResult(data.results, data.total_results))
    } catch (e) {
        console.log(e)
    }
    dispatch(actions.toggleIsFetching(false))
}

//Types
type ThunkType = ThunkAction<Promise<void>, RootState, {}, ActionsType>;
type ActionsType = InferActionTypes<typeof actions>
type InitialStateType = typeof initialState