import React, {useEffect} from "react";
import {StyledGrid, StyledGridContent} from "../../styles/StyledGrid";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {MovieCard} from "../MovieCard/MovieCard";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import {requestTopRatedMovies} from "../../store/movies-reducer";
import {Spinner} from "../../styles/Spinner.styles";

export const TopRatedMoviePage = React.memo(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestTopRatedMovies(1))
    }, [dispatch])

    const {totalPages, currentPage} = useSelector((state: RootState) => state.movie);
    const topRatedMovies = useSelector((state: RootState) => state.movie.movies);
    const isFetching = useSelector((state: RootState) => state.movie.isFetching);

    const movieTopRated = topRatedMovies.map(m => <MovieCard img={m.poster_path}
                                                             title={m.title}
                                                             rating={m.vote_average}
                                                             id={m.id}
                                                             key={m.id}
    />);

    const handlePageClick = (e: any) => {
        const page = e.selected + 1;
        dispatch(requestTopRatedMovies(page));
    }

    if (isFetching) return <Spinner/>

    return (
        <>
            <StyledGrid>
                <StyledGridContent>
                    {movieTopRated}
                </StyledGridContent>
                <MoviePagination pagesTotal={totalPages} onPageChange={handlePageClick} currentPage={currentPage}/>
            </StyledGrid>
        </>
    )
})