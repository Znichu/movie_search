import React from "react";
import style from "./Menu.module.scss"

export const Menu = () => {
    return (
        <main >
            <nav className={style.tab__link}>
                <a>home</a>
                <a>shop</a>
                <a>blog</a>
                <a>about</a>
                <a>contact</a>
                <hr/>
            </nav>
        </main>
    )
}