import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {requestPopularMovies, requestUpcomingMovies} from "./store/movies-reducer";
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./styles/GlobalStyle";
import {MoviesPage} from "./components/MoviesPage/MoviesPage";

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {


    }, [dispatch]);

    return (
        <>
            <Header/>
            <MoviesPage/>
            <GlobalStyle/>
        </>
    );
}

