import React, {useState} from "react";
import RMDBLogo from "../../assets/img/reactMovie_logo.png"
import TMDBLogo from "../../assets/img/tmdb_logo.svg"
import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from "../../styles/StyledHeader";

export const Header = () => {

    const [visibleInput, setvisibleInput] = useState(false)

    const changeVisible = () => {
        setvisibleInput(!visibleInput)
    }

    return (
        <StyledHeader>
            <div className="header-content">
                <StyledRMDBLogo src={RMDBLogo} />
                <StyledTMDBLogo src={TMDBLogo} />
            </div>

        </StyledHeader>
    )
}