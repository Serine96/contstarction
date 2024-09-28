"use client";
import { FC, useRef } from "react";
import classes from "../style/slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
const images = [
    {
        text: "Կառուցապատման պլան",
        img: "/slide/slide1.png",
    },
    {
        text: "Ինժեներական մոդելավորում",
        img: "/slide/slide2.png",
    },
    {
        text: "Կառուցապատում",
        img: "/slide/slide3.png",
    },
    {
        text: "Ներքին հարդարում և մոդելավորում",
        img: "/slide/slide4.png",
    },
];

const SimpleSlider: FC = () => {
    const useSlideRef = useRef<any>(null);

    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };
    const slideList = images.map((el, i) => {
        return (
            <div key={i} className={classes["card"]}>
                <div className={classes["image_div"]}>
                    <img src={el.img} alt="img" />
                </div>
                <h3>{el.text}</h3>
            </div>
        );
    });
    return (
        <div className={classes["images_slider"]}>
            <div className="slider-container">
                <Slider ref={useSlideRef} {...settings}>
                    {slideList}
                </Slider>
            </div>
        </div>
    );
};

export default SimpleSlider;
