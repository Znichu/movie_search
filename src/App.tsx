import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {requestPopularMovies, requestTopRatedMovies, requestUpcomingMovies} from "./store/movie-reducer";
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./styles/GlobalStyle";
import {MoviePage} from "./components/MoviePage/MoviePage";

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPopularMovies());
        dispatch(requestUpcomingMovies());
        dispatch(requestTopRatedMovies());
    }, [dispatch]);

    return (
        <>
            <Header/>
            <MoviePage/>
            <GlobalStyle/>
        </>
    );
}

