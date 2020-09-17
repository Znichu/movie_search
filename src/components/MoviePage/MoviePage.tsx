import React, {useEffect} from "react";
import {SearchBar} from "../SearchBar/SearchBar";
import {HeroImage} from "../HeroImage/HeroImage";
import {useDispatch, useSelector} from "react-redux";
import {requestPopularMovies} from "../../store/movie-reducer";
import {RootState} from "../../store/store";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";


export const MoviePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPopularMovies())
    }, [dispatch]);

    const popular = useSelector((state: RootState) => state.movie.heroImage);

    return (
        <>
            <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular.backdrop_path}`}
                       title={popular.original_title}
                       text={popular.overview}
            />
            <SearchBar/>
        </>
    )
}