import React from "react";
import s from "./MovieCard.module.scss"
import noPoster from "../../assets/img/no_image.jpg"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../commons/config";
import {Link} from "react-router-dom";
import {textTruncate} from "../../commons/helpers";

type PropsType = {
    img: string
    title: string
    rating: number
    id: number
}

export const MovieCard: React.FC<PropsType> = (props) => {

    const {img, title, rating, id} = props;

    return (
        <>
            {/*            <div className={s.card}>
                <div className={s.card__header}>
                    <img src={img ? `${IMAGE_BASE_URL}${POSTER_SIZE}${img}` : noPoster} alt=""/>
                </div>
                <div className={s.card__content}>
                    <div className={s.head}>
                        <Link to={"/" + id}><h3>{title}</h3></Link>
                        <div className={s.rating}>
                            <span>{rating}</span>/10
                        </div>
                    </div>
                </div>
            </div>*/}


            <div className={s.wrapper}>
                <Link to={"/" + id}>
                    <figure className={s.movie__card}>
                        <img src={img ? `${IMAGE_BASE_URL}${POSTER_SIZE}${img}` : noPoster} alt=""/>
                        <figcaption>
                            <h5>{textTruncate(title, 26)}</h5>
                            <div className={s.rating}>
                                <i style={{color: "rgb(250, 80, 80)", marginRight: "5px"}} className="fa fa-heart"></i>
                                <h4>{rating}</h4>
                            </div>
                        </figcaption>
                    </figure>
                </Link>
            </div>

        </>
    )
}