import React from "react";
import ExpertiseItem from "./Item/ExpertiseItem";
import laptopImg from "../../res/images/laptop.png"
import styles from "./Expertise.module.css"
import {Link} from "react-router-dom";

export default class Expertise extends React.Component {

    imgStyle = {
        width: 100 + "%",
        maxWidth: 512+128+64+16
    }

    expertiseStyle = {
        backgroundColor: "#171924",
        position: "relative",
        marginTop: -250
    }

    titleStyle = {
        color: "white",
        fontWeight: 700
    }

    commonItemStyle = "col-12 col-sm-6 mt-3"

    render() {
        return (
            <div className="container-fluid px-0" style={this.expertiseStyle}>
                <div className="container-fluid container-md pb-lg-5" style={{paddingTop: "275px"}}>
                    <div className="row pb-lg-5 pt-md-5 justify-content-md-center">
                        <div className="col-0 col-0 col-lg-6 pt-lg-5"/>
                        <div className="col-9 col-sm-12 col-md-12 col-lg-6 pt-lg-5">
                            <h1 style={this.titleStyle} className={`pt-lg-5 pb-3 pl-3 ${styles.titleStyle}`}>Экспертиза в Drupal, опыт 14 лет!</h1>
                            <div className="row">
                                <div className={this.commonItemStyle}>
                                    <ExpertiseItem
                                        text="Только системный подход - контроль версий,
                                         резервирование и тестирование!"
                                    />
                                </div>
                                <div className={this.commonItemStyle}>
                                    <ExpertiseItem
                                        text="Только Drupal сайты, не берем на поддержку
                                         сайты на других CMS!"
                                    />
                                </div>
                                <div className={this.commonItemStyle}>
                                    <ExpertiseItem
                                        children={<p>Участвуем в разработке ядра Drupal и модулей на Drupal.org,
                                            разрабатываем <Link to="modules" style={{color: "#F14D34"}}>свои модули Drupal</Link></p>}
                                    />
                                </div>
                                <div className={this.commonItemStyle}>
                                    <ExpertiseItem
                                        text="Поддерживаем сайты на Drupal 5, 6, 7 и 8"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.imgBlockStyle}>
                    <img src={laptopImg} style={this.imgStyle} alt="laptop"/>
                </div>
            </div>
        )
    }

}