import React from "react";
import styles from "./Footer.module.css";
import Form from "../OurForm/OurForm";
import Facebook from "../../res/images/024-facebook.svg";
import Vk from "../../res/images/105-VK.svg";
import Telegram from "../../res/images/089-telegram.svg";
import Youtube from "../../res/images/116-youtube.svg";

export default class Footer extends React.Component {


    render() {
        return (
            <footer>
                <div className={styles.footerGlobal}>
                <Form/>
                    <div className={styles.bgImg}>
                        <div className="container">
                            <div className={styles.links}>
                                <a href="https://facebook.com" className={styles.socialNetwork}>
                                    <img
                                        src={Facebook}
                                        alt="facebook"/>
                                </a>
                                <a href="https://vk.com" className={styles.socialNetwork}>
                                    <img
                                        src={Vk}
                                        alt="vk"/>
                                </a>
                                <a href="https://tlgrm.ru/" className={styles.socialNetwork}>
                                    <img
                                        src={Telegram}
                                        alt="telegram"/>
                                </a>
                                <a href="https://youtube.com" className={styles.socialNetwork}>
                                    <img
                                        src={Youtube}
                                        alt="youtube"/>
                                </a>
                            </div>
                            <div>
                                <p className={styles.copyRight}>
                                    Проект ООО «Инитлаб», Краснодар, Россия.<br/>
                                    Drupal является зарегистрированной торговой маркой Dries Buytaert.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}