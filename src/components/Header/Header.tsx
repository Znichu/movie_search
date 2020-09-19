import React from "react";
import RMDBLogo from "../../assets/img/reactMovie_logo.png"
import TMDBLogo from "../../assets/img/tmdb_logo.svg"
import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from "../../styles/StyledHeader";
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <StyledHeader>
            <div className="header-content">
                <Link to="/">
                <StyledRMDBLogo src={RMDBLogo} />
                </Link>
                <StyledTMDBLogo src={TMDBLogo} />
            </div>
        </StyledHeader>
    )
}