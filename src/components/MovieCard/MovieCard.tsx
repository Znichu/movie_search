import React from "react";
import s from "./MovieCard.module.scss"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../commons/config";

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
                <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${img}`} alt=""/>
            </div>
            <div className={s.card__content}>
                <div className={s.head}>
                    <a href="#"><h3>{title}</h3></a>
                    <div className={s.rating}>
                        <span>{rating}</span>/10
                    </div>
                </div>
            </div>

        </div>
    )
}