import {applyMiddleware, combineReducers, createStore} from "redux";
import {MoviesReducer} from "./movie-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    movie: MoviesReducer
});

type State = typeof rootReducer;
export type RootState = ReturnType<State>;
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U; } ? U : never;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
