import React from 'react';
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./styles/GlobalStyle";
import {MoviesPage} from "./components/MoviesPage/MoviesPage";

export const App = () => {
    return (
        <>
            <Header/>
            <MoviesPage/>
            <GlobalStyle/>
        </>
    );
}

