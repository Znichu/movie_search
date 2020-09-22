import React, {useEffect} from "react";
import {Content, Wrapper, Text} from "../../styles/MovieInfo.styles";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {requestMovieDetails} from "../../store/movie-info-reducer";
import {RootState} from "../../store/store";


export const MovieInfo = () => {
    const dispatch = useDispatch();
    const {movieId} = useParams();

    useEffect(() => {
        dispatch(requestMovieDetails(movieId))
    }, [dispatch, movieId]);

    const movie = useSelector((state: RootState) => state.movieInfo.movie);

    return (

        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
{/*                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                    alt='movie-thumb'
                />*/}
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className='rating-directors'>
                        <div>
                            <h3>RATING</h3>
                            <div className='score'>{movie.vote_average}</div>
                        </div>
{/*                        <div className='director'>
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>*/}
                    </div>
                </Text>
            </Content>
        </Wrapper>
    )
}