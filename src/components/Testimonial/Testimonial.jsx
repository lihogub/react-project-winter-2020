import React from "react";
import Slider from "react-slick";
import TestimonialItem from "./Item/TestimonialItem";
import styles from "./Testimonial.module.css"
import arrowPng from "../../res/images/arrow.png"

export default class Testimonial extends React.Component {

    state = {
        currentSlide: 0,
        slides: [
            {id: 0, link: "http://www.cielparfum.com/"},
            {id: 1, link: "http://www.cielparfum.com/"},
            {id: 2, link: "http://www.cielparfum.com/"}
        ]
    }

    settings = {
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => this.setState({currentSlide: next})
    }

    padWithZeros(text, targetLength) {
        let txt = "" + text
        while (txt.length < targetLength)
            txt = "0" + txt;
        return txt;
    }

    render() {
        const slides = this.state.slides.length && this.state.slides.map(
            (item) => <TestimonialItem id={item.id} link={item.link}/>)

        return (
            <div className={`container-fluid container-sm px-0 px-md-5 ${!this.state.slides.length && "d-none"}`}>
                <h1 className={`${styles.testimonialTitle} text-center mb-4 mb-md-5`}>
                    Отзывы
                </h1>
                <div className={`mx-0 mx-md-5 ${styles.testimonial}`}>
                    <div className={`row container-fluid ${styles.testimonialItem} mx-0`}>
                        <div className="col-12 col-xl-8 px-0 p-sm-3 p-md-4 p-lg-5">
                            <Slider {...this.settings} ref={c => this.slider = c}>
                                {slides}
                            </Slider>
                        </div>
                        <div className="col-12 col-xl-4 px-0 d-flex align-items-center justify-content-center">
                            <div className="container-fluid row justify-content-center">
                                <div className="col-auto row d-flex justify-content-center">
                                    <img src={arrowPng} className={`${styles.arrow} ${styles.arrowLeft}`}
                                         onClick={() => this.slider.slickPrev()}/>
                                </div>
                                <div className="col row d-flex justify-content-center">
                                    <div className={`${styles.slideCounter} d-flex`}>
                                        <p className={styles.currentSlide}>
                                            {this.padWithZeros(this.state.currentSlide + 1, 2)}
                                        </p>
                                        <p className={`${styles.totalSlides} ${styles.splitterSlash} mx-2`}>
                                            {"/"}
                                        </p>
                                        <p className={styles.totalSlides}>
                                            {`${this.padWithZeros(this.state.slides.length, 2)}`}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-auto row d-flex justify-content-center">
                                    <img src={arrowPng} className={`${styles.arrow} ${styles.arrowRight}`}
                                         onClick={() => this.slider.slickNext()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}