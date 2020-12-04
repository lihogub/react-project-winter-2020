import React from "react";
import styles from "./Foottter.module.css"
import drupalCoderImg from "../../res/images/drupal-coder-bg.png"

export default class Foottter extends React.Component {


    render() {
        return (
            <footer className={styles.footerGlobal}>
                <div className="">
                    <div className={styles.links}>
                        <a href="https://facebook.com">
                            <img className={styles.socialNetworkImg}
                                 src="https://cdn.worldvectorlogo.com/logos/facebook-icon-1.svg"
                                 alt="t"/>
                        </a>
                        <a href="https://vk.com">
                            <img className={styles.socialNetworkImg}
                                 src="https://lh3.googleusercontent.com/proxy/HyryrN46dNlqJ8jjh90JyG_URRiUdgjBwHVK57G7UjtGoFe1Qc8w2gzHHXi3ORR0FhhndBHQJA54VkY9su050l5i9yuj1GK8l9bAgvCc_5P0kSGdVdvEMLpmNYgwiMExapQ"
                                 alt="t"/>
                        </a>
                        <a href="https://tlgrm.ru/">
                            <img className={styles.socialNetworkImg}
                                 src="https://i.pinimg.com/originals/1c/39/c8/1c39c81fccba10c48869ce903c533845.png"
                                 alt="t"/>
                        </a>
                        <a href="https://facebook.com">
                            <img className={styles.socialNetworkImg}
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/YouTube_social_dark_squircle_%282017%29.svg/1024px-YouTube_social_dark_squircle_%282017%29.svg.png"
                                 alt="t"/>
                        </a>
                    </div>
                    <div>
                        <p className={styles.copyRight}>
                            Проект ООО «Инитлаб», Краснодар, Россия.<br/>
                            Drupal является зарегистрированной торговой маркой Dries Buytaert.
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}