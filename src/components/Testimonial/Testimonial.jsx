import React from "react";
import Slider from "react-slick";
import axios from "axios"
import TestimonialItem from "./Item/TestimonialItem";
import styles from "./Testimonial.module.css"
import arrowPng from "../../res/images/arrow.png"

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/testimonial"

export default class Testimonial extends React.Component {

    state = {
        currentSlide: 0,
        slides: []
    }

    componentDidMount() {
        axios.get(endpoint)
            .then(
                (res) => {
                    this.setState({slides: res.data})
                }
            )
            .catch(
                (err) => alert("Network error " + err)
            )
    }

    arrowStyle(props) {
        return (
            <div className="d-none"/>
        );
    }

    settings = {
        dots: false,

        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => this.setState({currentSlide: next}),
        nextArrow: <this.arrowStyle/>,
        prevArrow: <this.arrowStyle/>,
    }

    padWithZeros(text, targetLength) {
        let txt = "" + text
        while (txt.length < targetLength)
            txt = "0" + txt;
        return txt;
    }

    render() {
        const slides = this.state.slides.length && this.state.slides.map(
            (item) => <TestimonialItem id={item.id} link={item.link} text={item.text} sign={item.sign}/>)

        return (
            <div className={`container-fluid container-sm px-0 px-md-5 mb-5 pb-5 ${!this.state.slides.length && "d-none"}`}>
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
                                <div className="col-auto row d-flex justify-content-center" onClick={(event) => {
                                    event.preventDefault();
                                    this.slider.slickPrev();
                                }}>
                                    <img src={arrowPng} className={`${styles.arrow} ${styles.arrowLeft}`}/>
                                </div>
                                <div className="col-5 col-md-6 row d-flex justify-content-center">
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
                                <div className="col-auto row d-flex justify-content-center" onClick={(event) => {
                                    event.preventDefault();
                                    this.slider.slickNext();
                                }}>
                                    <img src={arrowPng} className={`${styles.arrow} ${styles.arrowRight}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}