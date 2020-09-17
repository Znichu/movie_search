import React from "react";
import style from "./SearchBar.module.scss"

export const SearchBar = () => {
    return (
        <>
            <input className={style.searchInput} type="text" placeholder="Search for a movie"/>
            <button className={style.searchButton}>search</button>
        </>
    )
}