import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {SearchBar} from "./components/SearchBar/SearchBar";
import {MoviePage} from "./components/MoviePage/MoviePage";
import {Slider} from "./components/Slider/Slider";
import {movieAPI} from "./api/movie";

export const App = () => {
    console.log(process.env.REACT_APP_API_KEY)
    const getPopularMovie = () => {
        movieAPI.getPopularMovies();
    }
    return (
        <div className="app">
            <Header/>
            <Slider/>
            <SearchBar/>
            <MoviePage/>
            <button onClick={getPopularMovie}>get</button>
        </div>
    );
}

