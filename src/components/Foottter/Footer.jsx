import React from "react";
import styles from "./Footer.module.css"
import Form from "../OurForm/OurForm";

export default class Footer extends React.Component {


    render() {
        return (
            <footer>
                <Form/>
                <div className={styles.footerGlobal}>
                    <div className={styles.bgImg}>
                        <div className="container">
                            <div className={styles.links}>
                                <a href="https://facebook.com" className={styles.socialNetwork}>
                                    <img
                                        src="https://cdn.worldvectorlogo.com/logos/facebook-icon-1.svg"
                                        alt="facebook"/>
                                </a>
                                <a href="https://vk.com" className={styles.socialNetwork}>
                                    <img
                                        src="https://s3.amazonaws.com/appforest_uf/f1536532970956x622455846052616800/vk-logo-black-transparent.png"
                                        alt="vk"/>
                                </a>
                                <a href="https://tlgrm.ru/" className={styles.socialNetwork}>
                                    <img
                                        src="https://i.pinimg.com/originals/1c/39/c8/1c39c81fccba10c48869ce903c533845.png"
                                        alt="telegram"/>
                                </a>
                                <a href="https://youtube.com" className={styles.socialNetwork}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/YouTube_social_dark_squircle_%282017%29.svg/1024px-YouTube_social_dark_squircle_%282017%29.svg.png"
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