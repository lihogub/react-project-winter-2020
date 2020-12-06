import React from "react";
import headerBGImg from "../../res/images/headerBG.png";
import Menu from "./Menu/Menu";
import Achievements from "./Achievements/Achievements";
import styles from "./Header.module.css";
import {Button} from "react-bootstrap";


export default class Header extends React.Component {

    style = {
        backgroundImage: `url(${headerBGImg})`,
        fontSize: "13px"
    }

    buttonStyle = {
        border: "#F14D34 2px solid",
        color: "white",
        fontSize: "13px"
    }

    render() {
        return (
            <div style={this.style} className="container-fluid px-0 px-md-1">
                <Menu/>
                <div className="container pt-5 pb-4">
                    <div className="row d-flex">
                        <div className="col-12 col-lg-6 pb-4">
                            <div className="d-flex row">
                                <div className="col-12 d-flex justify-content-center justify-content-md-start">
                                    <h1 className={`text-center text-md-left ${styles.headerTitle}`}>
                                        Поддержка <br/>сайтов на Drupal
                                    </h1>
                                </div>
                                <div className="col-12 pt-2 pb-3 d-flex justify-content-center justify-content-md-start">
                                    <h5 className={`text-center text-md-left ${styles.headerText}`}>
                                        Сопровождение и поддержка сайтов <br/>на CMS Drupal любых версий и запущенности
                                    </h5>
                                </div>
                                <div className="col-12 d-flex justify-content-center justify-content-md-start">
                                    <Button variant="outline-primary" className="col-8 col-md-5 mt-4 mx-0 py-3" style={this.buttonStyle}>
                                        ТАРИФЫ
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 py-3 d-flex align-items-center">
                            <Achievements/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

        /*
    <div className="row col-12 col-lg-6 d-flex pt-2 pb-5 mb-3">
    <div className="col-12 mx-0 px-0 justify-content-center justify-content-sm-start ">
    <h1 className={`d-flex col-12 text-center text-md-left ${styles.headerTitle}`}>
    Поддержка <br/>сайтов на Drupal
    </h1>
    <h5 className={`d-flex col-12 py-3 mt-2 mb-3 px-0 mx-0 text-center text-md-left ${styles.headerText}`}>
    Сопровождение и поддержка сайтов <br/>на CMS Drupal любых версий и запущенности
    </h5>
    <Button variant="outline-primary" className="col-9 col-md-5 my-3 mx-3 py-3" style={this.buttonStyle}>
    ТАРИФЫ
    </Button>
    </div>
        */