import React from "react";
import TestimonialItem from "./Item/TestimonialItem";
import styles from "./Testimonial.module.css"

export default class Testimonial extends React.Component {

    render() {
        return (
            <div className="container-fluid container-sm px-0 px-md-5">
                <h1 className={`${styles.testimonialTitle} text-center mb-4 mb-md-5`}>
                    Отзывы
                </h1>
                <div className={`mx-0 mx-md-5 ${styles.testimonial}`}>
                    <div className={`row container-fluid ${styles.testimonialItem} mx-0`}>
                        <div className="col-12 col-xl-8 px-0 p-sm-3 p-md-4 p-lg-5">
                            <TestimonialItem link={"http://www.cielparfum.com/"}/>
                        </div>
                        <div className="col-12 col-xl-4 px-0">arrows here</div>
                    </div>
                </div>
            </div>
        )
    }

}