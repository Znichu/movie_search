import React, {useEffect} from "react";
import {Content, Wrapper, Text} from "../../styles/MovieInfo.styles";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {requestMovieDetails} from "../../store/movie-info-reducer";
import {RootState} from "../../store/store"
import {Image} from '../../styles/Image.styles';
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../commons/config";
import noImage from "../../assets/img/no_image.jpg"
import {calcTime, convertMoney} from "../../commons/helpers";
import ReactPlayer from "react-player";

type PropsType = {
    movieId: number
}

export const MovieInfo: React.FC<PropsType> = React.memo( ({movieId}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestMovieDetails(movieId))
    }, [dispatch, movieId]);

    const {movie, genres, crew} = useSelector((state: RootState) => state.movieInfo);

    const genresItem = genres.map(g => g.name).join(", ").toLowerCase();
    const directors = crew.filter(member => member.job === 'Director');

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Image src={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : noImage}
                       alt='movie-thumb'
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <div className="facts">
                        <span>Genre{genresItem.length > 1 ? "s" : ""}: {genresItem}</span>
                        {movie.budget > 0 ? <span>Budget: {convertMoney(movie.budget)}</span> : null}
                        <span>Release: {movie.release_date}</span>
                        {movie.runtime > 0 ? <span>Running time: {calcTime(movie.runtime)}</span> : null}
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
})