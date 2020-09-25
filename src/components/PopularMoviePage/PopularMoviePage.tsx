import React, {useEffect} from "react";
import {Grid, GridContent} from "../../styles/Grid";
import {MovieCard} from "../MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import {requestPopularMovies} from "../../store/movies-reducer";
import {Spinner} from "../../styles/Spinner.styles";

export const PopularMoviePage = React.memo(() => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPopularMovies(1));
    }, [dispatch])

    const popularMovies = useSelector((state: RootState) => state.movie.movies);
    const {totalPages, currentPage} = useSelector((state: RootState) => state.movie);
    const isFetching = useSelector((state: RootState) => state.movie.isFetching);

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

    if (isFetching) return <Spinner/>

    return (
        <>
            <Grid>
                <GridContent>
                    {moviePopular}
                </GridContent>
                <MoviePagination onPageChange={handlePageClick} pagesTotal={totalPages} currentPage={currentPage}/>
            </Grid>
        </>
    )
})