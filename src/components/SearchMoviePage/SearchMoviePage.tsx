import React from "react";
import {StyledGrid, StyledGridContent} from "../../styles/StyledGrid";
import {MovieCard} from "../MovieCard/MovieCard";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {requestSearchMovie} from "../../store/search-movie-reducer";


export const SearchMoviePage: React.FC = React.memo( () => {
    const dispatch = useDispatch();

    const searchMovies = useSelector((state: RootState) =>  state.searchMovie.movie);
    const pagesTotal = useSelector((state: RootState) => state.searchMovie.totalResults);
    const currentPage = useSelector((state: RootState) => state.searchMovie.currentPage);
    const searchTerm = useSelector((state: RootState) => state.searchMovie.searchTerm )

    const movieElement = searchMovies.map(m => <MovieCard img={m.poster_path} title={m.title} rating={m.vote_average} id={m.id}/>);

    const changeMoviePage = (e: any) => {
        const page = e.selected + 1;
        dispatch(requestSearchMovie(searchTerm, page))
    }

    return (
        <>
            <StyledGrid>
                <StyledGridContent>
                    {movieElement}
                </StyledGridContent>
                <MoviePagination pagesTotal={pagesTotal} onPageChange={changeMoviePage} currentPage={currentPage}/>
            </StyledGrid>
        </>
    )
})