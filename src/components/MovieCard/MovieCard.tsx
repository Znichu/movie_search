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
        <div className={s.card}>
            <div className={s.card__header}>
                <img src={ img ? `${IMAGE_BASE_URL}${POSTER_SIZE}${img}` : noPoster} alt=""/>
            </div>
            <div className={s.card__content}>
                <div className={s.head}>
                    <Link to={"/" + id}><h3>{title}</h3></Link>
                    <div className={s.rating}>
                        <span>{rating}</span>/10
                    </div>
                </div>
            </div>

        </div>
    )
}