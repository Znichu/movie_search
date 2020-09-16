import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {SearchBar} from "./components/SearchBar/SearchBar";
import {MoviePage} from "./components/MoviePage/MoviePage";
import {Slider} from "./components/Slider/Slider";
import {useDispatch} from "react-redux";
import {requestPopularMovies, requestUpcomingMovies} from "./store/movie-reducer";

export const App = () => {
    const dispatch = useDispatch();
    const getPopularMovie = () => {
        dispatch(requestPopularMovies())
    }
    const getUpcomingMovies = () => {
        dispatch(requestUpcomingMovies())
    }
    return (
        <div className="app">
            <Header/>
            <Slider/>
            <SearchBar/>
            <MoviePage/>
            <button onClick={getPopularMovie}>get popular</button>
            <button onClick={getUpcomingMovies} >get upcoming</button>
        </div>
    );
}

