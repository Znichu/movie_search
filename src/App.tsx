import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {requestPopularMovies, requestTopRatedMovies, requestUpcomingMovies} from "./store/movie-reducer";
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./styles/GlobalStyle";
import {MoviePage} from "./components/MoviePage/MoviePage";
import {Route, Switch} from 'react-router-dom';
import {PopularMoviePage} from "./components/PopularMoviePage/PopularMoviePage";
import {TopRatedMoviePage} from "./components/TopRatedMoviePage/TopRatedMoviePage";
import {UpcomingMoviePage} from "./components/UpcomingMoviePage/UpcomingMoviePage";

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
                <Route path="/" exact render={() => <MoviePage/>}/>
                <Route path="/popular" exact render={() => <PopularMoviePage/>}/>
                <Route path="/top-rated" exact render={() => <TopRatedMoviePage/>}/>
                <Route path="/upcoming" exact render={() => <UpcomingMoviePage/>}/>
            </Switch>
            <GlobalStyle/>
        </>
    );
}

