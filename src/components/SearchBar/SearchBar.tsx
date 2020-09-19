import React from "react";
import searchIcon from "../../assets/img/search-icon.svg"
import {StyledSearchBar, StyledSearchBarContent} from "../../styles/StyledSearchBar";

export const SearchBar = () => {
    return (
        <>
            <StyledSearchBar>
                <StyledSearchBarContent>
                    <img src={searchIcon} alt="icon"/>
                    <input type="text" placeholder="Search Movie"/>
                </StyledSearchBarContent>
            </StyledSearchBar>
        </>
    )
}