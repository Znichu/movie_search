import React from "react";
import {StyledSearchBar, StyledSearchBarContent} from "../../styles/StyledSearchBar";

export const SearchBar = () => {
    return (
        <>
            <StyledSearchBar>
                <StyledSearchBarContent>
                    <input type="text" placeholder="Search Movie"/>
                </StyledSearchBarContent>
            </StyledSearchBar>
        </>
    )
}