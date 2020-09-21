import React, {ChangeEvent, KeyboardEventHandler, useState} from "react";
import searchIcon from "../../assets/img/search-icon.svg"
import {StyledSearchBar, StyledSearchBarContent} from "../../styles/StyledSearchBar";
import {useDispatch, useSelector} from "react-redux";
import {requestSearchMovie} from "../../store/search-movie-reducer";
import {RootState} from "../../store/store";

export const SearchBar = () => {
    const dispatch = useDispatch();

    const [searchTitle, setSearchTitle] = useState("");
    const currentPage = useSelector((state: RootState) => state.searchMovie.currentPage);

    const changeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
        let title = e.currentTarget.value;
        setSearchTitle(title)
    }

    const onKeyPress = (event: any) => {
        if (event.key === "Enter" && searchTitle !== "") {
            debugger
            dispatch(requestSearchMovie(searchTitle, currentPage));
        }
    }

    return (
        <>
            <StyledSearchBar>
                <StyledSearchBarContent>
                    <img src={searchIcon} alt="icon"/>
                    <input type="text" placeholder="Search Movie" onKeyPress={onKeyPress} onChange={changeSearchTitle} value={searchTitle}/>
                </StyledSearchBarContent>
            </StyledSearchBar>
        </>
    )
}