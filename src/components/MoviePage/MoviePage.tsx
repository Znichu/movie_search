import React, {useEffect} from "react";
import {SearchBar} from "../SearchBar/SearchBar";
import {HeroImage} from "../HeroImage/HeroImage";
import {useDispatch, useSelector} from "react-redux";
import {requestPopularMovies} from "../../store/movie-reducer";
import {RootState} from "../../store/store";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";
import {StyledGrid, StyledGridContent} from "../../styles/StyledGrid";
import {MovieCard} from "./MovieCard/MovieCard";


export const MoviePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPopularMovies())
    }, [dispatch]);

    const popular = useSelector((state: RootState) => state.movie.heroImage);
    const popularMovies = useSelector((state: RootState) => state.movie.popularMovies)

    const movie = popularMovies.map(m => <MovieCard img={m.poster_path}
                                                    title={m.title}
                                                    rating={m.vote_average}
                                                    id={m.id}/>)

    return (
        <>
            <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular.backdrop_path}`}
                       title={popular.title}
                       text={popular.overview}
            />
            <SearchBar/>
            <StyledGrid>
                <h1>Popular</h1>
                <StyledGridContent>
                    {movie}
                </StyledGridContent>
            </StyledGrid>
        </>
    )
}