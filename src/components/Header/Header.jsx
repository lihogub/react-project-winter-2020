import React from "react";
import headerBGImg from "../../res/images/headerBG.png";
import Menu from "./Menu/Menu";
import Achievements from "./Achievements/Achievements";
import styles from "./Header.module.css";


export default class Header extends React.Component {

    style = {
        backgroundImage: `url(${headerBGImg})`,
        fontSize: "13px"
    }

    render() {
        return (
            <div style={this.style} className="container-fluid px-0 px-md-1">
                <Menu/>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h1 className={styles.headerTitle}>
                                Поддержка <br/>сайтов на Drupal
                            </h1>
                            <h5 className={styles.headerText}>
                                Сопровождение и поддержка сайтов <br/>на CMS Drupal любых версий и запущенности
                            </h5>
                        </div>
                        <div className="col-12 col-lg-6">
                            <Achievements/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}