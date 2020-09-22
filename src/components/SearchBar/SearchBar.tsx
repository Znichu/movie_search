import React, {ChangeEvent, useCallback, useEffect} from "react";
import searchIcon from "../../assets/img/search-icon.svg"
import {StyledSearchBar, StyledSearchBarContent} from "../../styles/StyledSearchBar";
import {useDispatch, useSelector} from "react-redux";
import {actions, requestSearchMovie} from "../../store/search-movie-reducer";
import {RootState} from "../../store/store";
import debounce from "lodash.debounce";

export const SearchBar = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state: RootState) => state.searchMovie.searchTerm);

    const sendRequest = () => {
        dispatch(requestSearchMovie(searchTerm, 1))
    }

    const changeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
        let term = e.currentTarget.value;
        dispatch(actions.setSearchTitle(term))
    }

    //search only when there's a gap of 500ms.
    const searchRequest = useCallback(debounce(sendRequest, 500), [searchTerm]);

    useEffect(() => {
        searchRequest();
        //return delayedQuery.cancel to cancel previous calls during useEffect cleanup
        return searchRequest.cancel;
    }, [searchTerm, searchRequest]);

    return (
        <>
            <StyledSearchBar>
                <StyledSearchBarContent>
                    <img src={searchIcon} alt="icon"/>
                    <input type="text"
                           placeholder="Search Movie"
                           onChange={changeSearchTitle}
                           value={searchTerm}/>
                </StyledSearchBarContent>
            </StyledSearchBar>
        </>
    )
}