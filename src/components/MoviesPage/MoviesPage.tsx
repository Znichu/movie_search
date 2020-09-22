import React from "react";
import {SearchBar} from "../SearchBar/SearchBar";
import {HeroImage} from "../HeroImage/HeroImage";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";
import {StyledGrid, StyledGridContent, StyledHeaderCategory} from "../../styles/StyledGrid";
import {MovieCard} from "../MovieCard/MovieCard";
import {Link} from "react-router-dom";
import {SearchMoviePage} from "../SearchMoviePage/SearchMoviePage";


export const MoviesPage = () => {

    const popular = useSelector((state: RootState) => state.movie.heroImage);
    const popularMovies = useSelector((state: RootState) => state.movie.popularMovies.movies);
    const topRatedMovies = useSelector((state: RootState) => state.movie.topRatedMovies.movies);
    const upcomingMovies = useSelector((state: RootState) => state.movie.upcomingMovies.movies);
    const searchTerm = useSelector((state: RootState) => state.searchMovie.searchTerm);


    const moviePopular = popularMovies.slice(0, 6).map(m => <MovieCard img={m.poster_path}
                                                                       title={m.title}
                                                                       rating={m.vote_average}
                                                                       id={m.id}
                                                                       key={m.id}
    />);

    const movieTopRated = topRatedMovies.slice(0, 6).map(m => <MovieCard img={m.poster_path}
                                                                         title={m.title}
                                                                         rating={m.vote_average}
                                                                         id={m.id}
                                                                         key={m.id}
    />);

    const movieUpcoming = upcomingMovies.slice(0, 6).map(m => <MovieCard img={m.poster_path}
                                                                         title={m.title}
                                                                         rating={m.vote_average}
                                                                         id={m.id}
                                                                         key={m.id}
    />);

    return (
        <>
            {!searchTerm && <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular.backdrop_path}`}
                                       title={popular.title}
                                       text={popular.overview}
            />
            }
            <SearchBar/>
            {searchTerm
                ? <SearchMoviePage />
                : <>
                    <StyledGrid>
                        <StyledHeaderCategory>
                            <h1>#Popular</h1>
                            <Link to="/popular">View all</Link>
                        </StyledHeaderCategory>
                        <StyledGridContent>
                            {moviePopular}
                        </StyledGridContent>
                    </StyledGrid>
                    <StyledGrid>
                        <StyledHeaderCategory>
                            <h1>#Top rated</h1>
                            <Link to="/top-rated">View all</Link>
                        </StyledHeaderCategory>
                        <StyledGridContent>
                            {movieTopRated}
                        </StyledGridContent>
                    </StyledGrid>
                    <StyledGrid>
                        <StyledHeaderCategory>
                            <h1>#Upcoming</h1>
                            <Link to="/upcoming">View all</Link>
                        </StyledHeaderCategory>
                        <StyledGridContent>
                            {movieUpcoming}
                        </StyledGridContent>
                    </StyledGrid>
                </>
            }
        </>
    )
}