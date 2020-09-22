import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {requestPopularMovies, requestTopRatedMovies, requestUpcomingMovies} from "./store/movies-reducer";
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./styles/GlobalStyle";
import {MoviesPage} from "./components/MoviesPage/MoviesPage";
import {Route, Switch} from 'react-router-dom';
import {PopularMoviePage} from "./components/PopularMoviePage/PopularMoviePage";
import {TopRatedMoviePage} from "./components/TopRatedMoviePage/TopRatedMoviePage";
import {UpcomingMoviePage} from "./components/UpcomingMoviePage/UpcomingMoviePage";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {Menu} from "./components/Menu/Menu";

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
            <Switch>
                <Route path="/" exact render={() => <MoviesPage/>}/>
                <Route path="/popular" exact render={() => <PopularMoviePage/>}/>
                <Route path="/top-rated" exact render={() => <TopRatedMoviePage/>}/>
                <Route path="/upcoming" exact render={() => <UpcomingMoviePage/>}/>
                <Route path="/:movieId" exact render={() => <MovieInfo/>}/>
            </Switch>
            <GlobalStyle/>
        </>
    );
}

