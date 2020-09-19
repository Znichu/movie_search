import React from "react";
import {HeroImage} from "../HeroImage/HeroImage";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";
import {SearchBar} from "../SearchBar/SearchBar";
import {StyledGrid, StyledGridContent, StyledHeaderCategory} from "../../styles/StyledGrid";
import {MovieCard} from "../MovieCard/MovieCard";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export const PopularMoviePage = () => {

    const popular = useSelector((state: RootState) => state.movie.heroImage);
    const popularMovies = useSelector((state: RootState) => state.movie.popularMovies.movies);
    const moviePopular = popularMovies.map(m => <MovieCard img={m.poster_path}
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
                <StyledHeaderCategory>
                    <h1>#Popular</h1>
                </StyledHeaderCategory>
                <StyledGridContent>
                    {moviePopular}
                </StyledGridContent>
            </StyledGrid>
        </>
    )
}