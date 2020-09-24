import React from "react";
import style from "./Modal.module.scss"
import {MovieInfo} from "../MovieInfo/MovieInfo";

type PropsType = {
    movieId: number
    closeModal: () => void
}

export const Modal: React.FC<PropsType> = ({movieId, closeModal}) => {

    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                <span onClick={closeModal} className={style.close}>&times;</span>
                <MovieInfo movieId={movieId}/>
            </div>
        </div>
    )
}