import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../commons/config";
import {HeroImage} from "../HeroImage/HeroImage";

export const MainSlider = () => {

    const movie = useSelector((state: RootState) => state.movie.movies);

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
                movie.map(m => <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${m.backdrop_path}`}
                                          title={m.title}
                                          text={m.overview}
                />)
            }
        </Slider>
    )
}