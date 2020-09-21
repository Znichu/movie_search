import {applyMiddleware, combineReducers, createStore} from "redux";
import {MoviesReducer} from "./movie-reducer";
import thunk from "redux-thunk";
import {SearchMovieReducer} from "./search-movie-reducer";

const rootReducer = combineReducers({
    movie: MoviesReducer,
    searchMovie: SearchMovieReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U; } ? U : never;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
