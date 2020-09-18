import React from "react";
import {SearchBar} from "../SearchBar/SearchBar";
import {HeroImage} from "../HeroImage/HeroImage";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";
import {StyledGrid, StyledGridContent} from "../../styles/StyledGrid";
import {MovieCard} from "./MovieCard/MovieCard";


export const MoviePage = () => {

    const popular = useSelector((state: RootState) => state.movie.heroImage);
    const popularMovies = useSelector((state: RootState) => state.movie.popularMovies.movies);
    const topRatedMovies = useSelector((state: RootState) => state.movie.topRatedMovies.movies);
    const upcomingMovies = useSelector((state: RootState) => state.movie.upcomingMovies.movies);

    const moviePopular = popularMovies.slice(0, 6).map(m => <MovieCard img={m.poster_path}
                                                    title={m.title}
                                                    rating={m.vote_average}
                                                    id={m.id}/>);

    const movieTopRated = topRatedMovies.slice(0, 6).map(m => <MovieCard img={m.poster_path}
                                                                          title={m.title}
                                                                          rating={m.vote_average}
                                                                          id={m.id}/>);

    const movieUpcoming = upcomingMovies.slice(0, 6).map(m => <MovieCard img={m.poster_path}
                                                                         title={m.title}
                                                                         rating={m.vote_average}
                                                                         id={m.id}/>);

    return (
        <>
            <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular.backdrop_path}`}
                       title={popular.title}
                       text={popular.overview}
            />
            <SearchBar/>
            <StyledGrid>
                <h1>#Popular</h1>
                <StyledGridContent>
                    {moviePopular}
                </StyledGridContent>
            </StyledGrid>
            <StyledGrid>
                <h1>#Top rated</h1>
                <StyledGridContent>
                    {movieTopRated}
                </StyledGridContent>
            </StyledGrid>
            <StyledGrid>
                <h1>#Upcoming</h1>
                <StyledGridContent>
                    {movieUpcoming}
                </StyledGridContent>
            </StyledGrid>
        </>
    )
}