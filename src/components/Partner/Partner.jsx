import React from "react";
import Slider from "react-slick"
import PartnerItem from "./Item/PartnerItem"
import styles from "./Partner.module.css"

export default class Partner extends React.Component {

    sliderStyle = {
        width: (275+10)*10,
        maxWidth: 10*40 + "vw"
    }

    sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }

    render() {
        let partnersUp = Array
            .from(Array(32).keys())
            .map(id => <PartnerItem key={id} id={id%8}/>)
        let partnersDown = [...partnersUp]
        partnersUp.splice(0, 4);
        return (
            <div className="container-fluid px-0 mx-0 pt-3 pb-5 mx-0 mb-md-3">
                <div className="container-fluid container-md pb-3 px-0 pb-md-5 px-3">
                    <h1 className={`text-center ${styles.titleStyle}`}>С нами работают</h1>
                    <p className={`text-left text-md-center ${styles.textStyle}`}>
                        Десятки компаний доверяют нам самое ценное, что у них есть в интернете - свои сайты.
                        Мы делаем всё, чтобы наше сотрудничество было долгим.
                    </p>
                </div>
                <Slider {...this.sliderSettings} style={{...this.sliderStyle, ...{margin: "10px -10px 10px 0"}}}>
                    {partnersUp}
                </Slider>
                <Slider {...this.sliderSettings} style={{...this.sliderStyle, ...{margin: "10px -10px 10px calc(min(40vw, 275px)/2*(-1))"}}}>
                    {partnersDown}
                </Slider>
            </div>
        )
    }

}