import React from "react";
import {SearchBar} from "../SearchBar/SearchBar";
import {HeroImage} from "../HeroImage/HeroImage";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";
import {Route, Switch} from "react-router-dom";
import {SearchMoviePage} from "../SearchMoviePage/SearchMoviePage";
import {Menu} from "../Menu/Menu";
import {PopularMoviePage} from "../PopularMoviePage/PopularMoviePage";
import {TopRatedMoviePage} from "../TopRatedMoviePage/TopRatedMoviePage";
import {UpcomingMoviePage} from "../UpcomingMoviePage/UpcomingMoviePage";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {MainSlider} from "../Slider/Slider";


export const MoviesPage = () => {

    const popular = useSelector((state: RootState) => state.movie.heroImage);
    const searchTerm = useSelector((state: RootState) => state.searchMovie.searchTerm);


    return (
        <>
            {!searchTerm && <MainSlider/>}
            <SearchBar/>
            <Menu/>
            {searchTerm
                ? <SearchMoviePage />
                : <>
                    <Switch>
                        <Route path="/" exact render={() => <PopularMoviePage/>}/>
                        <Route path="/top-rated" exact render={() => <TopRatedMoviePage/>}/>
                        <Route path="/upcoming" exact render={() => <UpcomingMoviePage/>}/>
                        <Route path="/:movieId" exact render={() => <MovieInfo/>}/>
                    </Switch>
                </>
            }
        </>
    )
}