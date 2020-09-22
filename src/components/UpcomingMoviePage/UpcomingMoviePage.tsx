import React from "react";
import {HeroImage} from "../HeroImage/HeroImage";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";
import {SearchBar} from "../SearchBar/SearchBar";
import {StyledGrid, StyledGridContent, StyledHeaderCategory} from "../../styles/StyledGrid";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {MovieCard} from "../MovieCard/MovieCard";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import {requestUpcomingMovies} from "../../store/movie-reducer";

export const UpcomingMoviePage = () => {

    const dispatch = useDispatch();

    const {totalPages, currentPage} = useSelector((state: RootState) => state.movie.upcomingMovies);
    const popular = useSelector((state: RootState) => state.movie.heroImage);
    const upcomingMovies = useSelector((state: RootState) => state.movie.upcomingMovies.movies);

    const movieUpcoming = upcomingMovies.map(m => <MovieCard img={m.poster_path}
                                                             title={m.title}
                                                             rating={m.vote_average}
                                                             id={m.id}
                                                             key={m.id}
    />);

    const handlePageClick = (e: any) => {
        const page = e.selected + 1;
        dispatch(requestUpcomingMovies(page));
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
                    <h1>#Upcoming</h1>
                </StyledHeaderCategory>
                <StyledGridContent>
                    {movieUpcoming}
                </StyledGridContent>
                <MoviePagination pagesTotal={totalPages} onPageChange={handlePageClick} currentPage={currentPage}/>
            </StyledGrid>
        </>
    )
}