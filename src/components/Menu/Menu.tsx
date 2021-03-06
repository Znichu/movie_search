import React from "react";
import style from "./Menu.module.scss"
import {Link, useLocation} from "react-router-dom";

export const Menu = () => {

    let location = useLocation();

    return (
        <div className={style.wrapper}>
            <ul className={style.snip}>
                <li className={location.pathname === '/' ? style.current : ""}>
                    <Link to={"/"} data-hover="Popular">Popular</Link>
                </li>
                <li className={location.pathname === '/top-rated' ? style.current : ""}>
                    <Link to={"/top-rated"} data-hover="Top rated">Top rated</Link>
                </li>
                <li className={location.pathname === '/upcoming' ? style.current : ""}>
                    <Link to={"/upcoming"} data-hover="Upcoming">Upcoming</Link>
                </li>
            </ul>
        </div>
    )
}