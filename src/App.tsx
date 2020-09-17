import React from 'react';
import {useDispatch} from "react-redux";
import {requestPopularMovies, requestUpcomingMovies} from "./store/movie-reducer";
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./styles/GlobalStyle";

export const App = () => {
    const dispatch = useDispatch();
    const getPopularMovie = () => {
        dispatch(requestPopularMovies())
    }
    /*    const getUpcomingMovies = () => {
            dispatch(requestUpcomingMovies())
        }*/
    return (
        <>
            <Header/>
            <GlobalStyle/>
        </>
    );
}

