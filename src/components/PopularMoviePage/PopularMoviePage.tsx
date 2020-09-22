import React, {useEffect} from "react";
import {StyledGrid, StyledGridContent} from "../../styles/StyledGrid";
import {MovieCard} from "../MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import {requestPopularMovies} from "../../store/movies-reducer";

export const PopularMoviePage = React.memo(() => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPopularMovies(1));
    }, [])

    const popularMovies = useSelector((state: RootState) => state.movie.movies);
    const {totalPages, currentPage} = useSelector((state: RootState) => state.movie);

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
            <StyledGrid>
                <StyledGridContent>
                    {moviePopular}
                </StyledGridContent>
                <MoviePagination onPageChange={handlePageClick} pagesTotal={totalPages} currentPage={currentPage}/>
            </StyledGrid>
        </>
    )
})