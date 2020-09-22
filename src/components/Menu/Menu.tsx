import React from "react";
import style from "./Menu.module.scss"
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return (
        <main >
            <nav className={style.tab__link}>
                <NavLink to={'/'} >#Popular</NavLink>
                <NavLink to={'/top-rated'}>#Top rated</NavLink>
                <NavLink to={'/upcoming'}>#Upcoming</NavLink>
                <a>about</a>
                <a>contact</a>
                <hr/>
            </nav>
        </main>
    )
}