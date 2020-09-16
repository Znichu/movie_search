import React from "react";
import style from "./MoviePage.module.scss"

export const MoviePage = () => {
    return (
        <div className={style.movies}>
            <div className={style.container}>
                <div className={style.movies__block}>
                    <div className={style.title}>
                        <h2>Movies</h2>
                    </div>
                    <div className={style.tabs}></div>
                </div>
            </div>
        </div>
    )
}