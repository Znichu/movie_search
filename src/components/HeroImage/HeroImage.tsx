import React from "react";
import {HeroImageStyles} from "../../styles/HeroImage.styles";

type PropsType = {
    image: string
    title: string
    text: string
}

export const HeroImage: React.FC<PropsType> = (props) => {

    const {image, title, text} = props;

    return (
        <HeroImageStyles image={image} >
            <div className="heroimage-content">
                <div className="heroimage-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </HeroImageStyles>
    )
}