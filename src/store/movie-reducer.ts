import { ThunkAction } from "redux-thunk";
import { InferActionTypes, RootState } from "./store";
import { movieAPI } from "../api/movie";

let initialState = {
    popularMovies: [],
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
        case "SET_MOVIES":
            return { ...state,
                movies: action.movies,
                searchTitle: state.newTitle
            };
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.numberPage };
        case "SET_TOTAL_COUNT":
            return { ...state, totalCount: action.totalCount };
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
export const action = {
    setMoviesAndTitle: (movies: Array<MovieType>) =>
        ({ type: "SET_MOVIES", movies } as const),
    setCurrentPage: (numberPage: number) =>
        ({ type: "SET_CURRENT_PAGE", numberPage } as const),
    setTotalCount: (totalCount: number ) =>
        ({ type: "SET_TOTAL_COUNT", totalCount } as const),
    toggleIsFetching: (isFetching: boolean) =>
        ({ type: "TOGGLE_IS_FETCHING", isFetching } as const),
    setSearchTitle: (newTitle: string) =>
        ({ type: "SET_SEARCH_NEW_TITLE", newTitle } as const),
    setNotFound: (notFound: boolean) =>
        ({ type: "SET_NOT_FOUND", notFound } as const)
};

//Thunk
export const requestMovies = (
    title: string,
    currentPage: number
): ThunkType => async (dispatch) => {
    try {
        dispatch(action.setCurrentPage(currentPage));
        dispatch(action.toggleIsFetching(true));
        let data = await movieAPI.getPopularMovies(currentPage);
        if (data.Response === "True") {
            dispatch(action.setMoviesAndTitle(data.Search));
            dispatch(action.setTotalCount(data.totalResults));
            dispatch(action.setNotFound(false));
        } else {
            dispatch(action.setNotFound(true));
            dispatch(action.setTotalCount(0));
        }
    } catch (e) {
        console.log(e.message);
    }
    dispatch(action.toggleIsFetching(false));
};

//Types
type InitialStateType = typeof initialState;
type ThunkType = ThunkAction<Promise<void>, RootState, {}, ActionsTypes>;
type ActionsTypes = InferActionTypes<typeof action>;
type MovieType = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};