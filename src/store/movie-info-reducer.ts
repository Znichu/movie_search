import {CrewItemType, GenresType, MovieType} from "../type/types";
import {InferActionTypes, RootState} from "./store";
import {ThunkAction} from "redux-thunk";
import {movieAPI} from "../api/movie";

let initialState = {
    movie: {} as MovieType,
    genres: [] as GenresType[],
    crew: [] as CrewItemType[],
    isFetching: false
}

export const MovieInfoReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_MOVIE_DETAILS": {
            return {
                ...state,
                movie: {...action.movie},
                genres: action.genres,
                crew: action.crew
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
    setSearchMovieResult: (movie: MovieType, genres: GenresType[], crew: CrewItemType[]) => ({type: "SET_MOVIE_DETAILS", movie, genres, crew} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "SET_TOGGLE_IS_FETCHING", isFetching} as const )

}

//Thunk
export const requestMovieDetails = (movieId: number): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.toggleIsFetching(true));
        let data = await movieAPI.getMovieDetails(movieId);

        dispatch(actions.setSearchMovieResult(data, data.genres, data.credits.crew))
    } catch (e) {
        console.log(e)
    }
    dispatch(actions.toggleIsFetching(false))
}

//Types
type ThunkType = ThunkAction<Promise<void>, RootState, {}, ActionsType>;
type ActionsType = InferActionTypes<typeof actions>
type InitialStateType = typeof initialState