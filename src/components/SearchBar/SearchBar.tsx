import React from "react";
import style from "./SearchBar.module.scss"

export const SearchBar = () => {
    return (
        <div className={style.search}>
            <div className={style.container}>
                <div>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}