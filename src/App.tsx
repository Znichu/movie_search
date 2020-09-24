import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./styles/GlobalStyle";
import {MoviesPage} from "./components/MoviesPage/MoviesPage";
import {useDispatch} from "react-redux";
import {requestNowPlayingMovies} from "./store/movies-reducer";

export const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestNowPlayingMovies(2))
    }, [dispatch]);

    return (
        <>
            <Header/>
            <MoviesPage/>
            <GlobalStyle/>
        </>
    );
}

