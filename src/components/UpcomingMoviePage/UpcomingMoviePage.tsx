import React, {useEffect} from "react";
import {Grid, GridContent} from "../../styles/Grid";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {MovieCard} from "../MovieCard/MovieCard";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import {requestUpcomingMovies} from "../../store/movies-reducer";
import {Spinner} from "../../styles/Spinner.styles";

export const UpcomingMoviePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUpcomingMovies(1));
    }, [dispatch])

    const {totalPages, currentPage} = useSelector((state: RootState) => state.movie);
    const upcomingMovies = useSelector((state: RootState) => state.movie.movies);
    const isFetching = useSelector((state: RootState) => state.movie.isFetching);

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

    if (isFetching) return <Spinner/>

    return (
        <>
            <Grid>
                <GridContent>
                    {movieUpcoming}
                </GridContent>
                <MoviePagination pagesTotal={totalPages} onPageChange={handlePageClick} currentPage={currentPage}/>
            </Grid>
        </>
    )
}