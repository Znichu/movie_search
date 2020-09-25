import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";
import {HeroImage} from "../HeroImage/HeroImage";
import {MovieType} from "../../type/types";

type PropsType = {
    heroImage: MovieType[]
}

export const MainSlider: React.FC<PropsType> = ({heroImage}) => {

    const settings = {
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    };

    return (
        <Slider {...settings}>
            {
                heroImage.slice(0, 6).map(m => <HeroImage key={m.id}
                                                          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${m.backdrop_path}`}
                                                          title={m.title}
                                                          text={m.overview}
                />)
            }
        </Slider>
    )
}