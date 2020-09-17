import React from "react";
import {StyledHeroImage} from "../../styles/StyledHeroImage";

type PropsType = {
    image: string
    title: string
    text: string
}

export const HeroImage: React.FC<PropsType> = (props) => {

    const {image, title, text} = props;

    return (
        <StyledHeroImage image={image} >
            <div className="heroimage-content">
                <div className="heroimage-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </StyledHeroImage>
    )
}