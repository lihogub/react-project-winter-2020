import React from "react";
import styles from "./Testimonial.module.css"

export default class Testimonial extends React.Component {

    render() {
        return (
            <div className="container-fluid container-sm px-0 px-md-5">
                <h1 className={`${styles.testimonialTitle} text-center`}>
                    Отзывы
                </h1>
                <div className={`mx-0 mx-md-5 ${styles.testimonial}`}>
                    <div className={`row container-fluid mx-0 mt-4 ${styles.testimonialItem}`}>
                            <div className="col">left<br/></div>
                            <div className="col"><br/>right</div>
                    </div>
                </div>
            </div>
        )
    }

}