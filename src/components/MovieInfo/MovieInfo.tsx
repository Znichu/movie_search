import React, {useEffect} from "react";
import {Content, Wrapper, Text} from "../../styles/MovieInfo.styles";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {requestMovieDetails} from "../../store/movie-info-reducer";
import {RootState} from "../../store/store"
import {Image} from '../../styles/Image.styles';
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../commons/config";
import noImage from "../../assets/img/no_image.jpg"
import {calcTime} from "../../commons/helpers";

type PropsType = {
    movieId: number
}

export const MovieInfo: React.FC<PropsType> = ({movieId}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestMovieDetails(movieId))
    }, [dispatch, movieId]);

    const movie = useSelector((state: RootState) => state.movieInfo.movie);

    return (

        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Image src={movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : noImage
                }
                       alt='movie-thumb'
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <div>
                        <span>Release: {movie.release_date}</span>
                        <span className="runtime">Running time: {calcTime(movie.runtime)}</span>
                    </div>
                    <h3 className="tagline">{movie.tagline}</h3>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>

                    <div className='rating-directors'>
                        <div>
                            <h3>RATING</h3>
                            <div className='score'>{movie.vote_average}</div>
                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    )
}