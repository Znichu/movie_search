import React from "react";
import {HeroImage} from "../HeroImage/HeroImage";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";
import {SearchBar} from "../SearchBar/SearchBar";
import {StyledGrid, StyledGridContent, StyledHeaderCategory} from "../../styles/StyledGrid";
import {MovieCard} from "../MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import {requestPopularMovies} from "../../store/movies-reducer";

export const PopularMoviePage = React.memo(() => {

    const dispatch = useDispatch();

    const popular = useSelector((state: RootState) => state.movie.heroImage);
    const popularMovies = useSelector((state: RootState) => state.movie.popularMovies.movies);
    const {totalPages, currentPage} = useSelector((state: RootState) => state.movie.popularMovies);

    const moviePopular = popularMovies.map(m => <MovieCard img={m.poster_path}
                                                           title={m.title}
                                                           rating={m.vote_average}
                                                           id={m.id}
                                                           key={m.id}
    />);

    const handlePageClick = (e: any) => {
        const page = e.selected + 1;
        dispatch(requestPopularMovies(page));
    }

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
                <MoviePagination onPageChange={handlePageClick}  pagesTotal={totalPages} currentPage={currentPage}/>
            </StyledGrid>
        </>
    )
})