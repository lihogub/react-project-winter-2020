import React from "react";
import headerBGImg from "../../res/images/headerBG.png";
import Menu from "./Menu/Menu";
import Achievements from "./Achievements/Achievements";
import styles from "./Header.module.css";
import {Button} from "react-bootstrap";
import headerVideo from "../../res/images/video.mp4";

export default class Header extends React.Component {

    style = {
        fontSize: "13px",
        backgroundColor: "rgba(0, 0, 0, 0.75)"
    }

    buttonStyle = {
        border: "#F14D34 2px solid",
        color: "white",
        fontSize: "13px"
    }

    videoStyle = {
        width: "100%",
        overflow: "none",
        position: "absolute",
        top: 0,
        zIndex: -500,
        filter: "blur(5px)"
    }

    render() {
        return (
            <div style={this.style} className="container-fluid px-0 px-md-0">
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
                <div className="container-fluid px-0 mx-0">
                    <video src={headerVideo} autoPlay={true} loop={true} muted={true} style={this.videoStyle}/>
                </div>
            </div>
        )
    }

}
