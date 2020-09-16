import React from "react";
import style from "./Header.module.scss"
import moviedb from "../../assets/img/moviedb.png"

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header__logo}>
                    <span>React Movie Search</span>
                </div>
                <div className={style.header__api}>
                    <img src={moviedb} alt="moviedb"/>
                </div>
            </div>
        </div>
    )
}