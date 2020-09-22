import React, {useEffect} from "react";
import {StyledGrid, StyledGridContent} from "../../styles/StyledGrid";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {MovieCard} from "../MovieCard/MovieCard";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import {requestUpcomingMovies} from "../../store/movies-reducer";

export const UpcomingMoviePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUpcomingMovies(1));
    }, [])

    const {totalPages, currentPage} = useSelector((state: RootState) => state.movie);
    const upcomingMovies = useSelector((state: RootState) => state.movie.movies);

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
            <StyledGrid>
                <StyledGridContent>
                    {movieUpcoming}
                </StyledGridContent>
                <MoviePagination pagesTotal={totalPages} onPageChange={handlePageClick} currentPage={currentPage}/>
            </StyledGrid>
        </>
    )
}