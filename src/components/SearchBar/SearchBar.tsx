import React, {ChangeEvent, KeyboardEventHandler, useState} from "react";
import searchIcon from "../../assets/img/search-icon.svg"
import {StyledSearchBar, StyledSearchBarContent} from "../../styles/StyledSearchBar";
import {useDispatch, useSelector} from "react-redux";
import {actions, requestSearchMovie} from "../../store/search-movie-reducer";
import {RootState} from "../../store/store";

export const SearchBar = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state: RootState) => state.searchMovie.searchTerm);

    const changeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
        let term = e.currentTarget.value;
        dispatch(actions.setSearchTitle(term))
    }

    const onKeyPress = (event: any) => {
        if (event.key === "Enter" && searchTerm !== "") {
            dispatch(requestSearchMovie(searchTerm, 1));
        }
    }

    return (
        <>
            <StyledSearchBar>
                <StyledSearchBarContent>
                    <img src={searchIcon} alt="icon"/>
                    <input type="text" placeholder="Search Movie" onKeyPress={onKeyPress} onChange={changeSearchTitle} value={searchTerm}/>
                </StyledSearchBarContent>
            </StyledSearchBar>
        </>
    )
}