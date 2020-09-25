import React, {useState} from "react";
import s from "./MovieCard.module.scss"
import noPoster from "../../assets/img/no_image.jpg"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../commons/config";
import {textTruncate} from "../../commons/helpers";
import {ModalMovieInfo} from "../ModalMovieInfo/ModalMovieInfo";

type PropsType = {
    img: string
    title: string
    rating: number
    id: number
}

export const MovieCard: React.FC<PropsType> = (props) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const {img, title, rating, id} = props;

    return (
        <>
            <div onClick={openModal} className={s.wrapper}>
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
            </div>
            {showModal &&  <ModalMovieInfo movieId={id} closeModal={closeModal}/>}

        </>
    )
}