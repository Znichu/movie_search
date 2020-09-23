import React from "react";
import s from "./MovieCard.module.scss"
import noPoster from "../../assets/img/no_image.jpg"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../commons/config";
import {Link} from "react-router-dom";

type PropsType = {
    img: string
    title: string
    rating: number
    id: number
}

export const MovieCard: React.FC<PropsType> = (props) => {

    const {img, title, rating, id} = props;

    return (
            <div className={s.wrapper}>
                <figure className={s.movie__card}>
                    <img src={img ? `${IMAGE_BASE_URL}${POSTER_SIZE}${img}` : noPoster} alt=""/>
                    <figcaption>
                        <h4>{title}</h4>
                        <div className={s.rating}>
                            <i style={{color: "rgb(250, 80, 80)", marginRight: "5px"}} className="fa fa-heart"></i>
                            <h4>{rating}</h4>
                        </div>
                    </figcaption>
                </figure>
            </div>
    )
}