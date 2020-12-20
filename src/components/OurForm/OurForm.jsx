import React from "react";
import styles from "./OurForm.module.css";
import {Form} from "react-bootstrap";
import captchaPlug from "../../res/images/recaptcha.png";

export default class Competency extends React.Component {

    render() {

        return(
            <div className={styles.globalStyle}>
                <div className={styles.bgImg}>
                    <div className='container'>
                        <div className='row'>

                            <div className={`col-xs-12 col-sm-6 ${styles.block}`}>
                                <div className={styles.title}>
                                    Оставить заявку на <br/>
                                    поддержку сайта
                                </div>

                                <div className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                                    Suspendisse justo justo, finibus a dolor sit amet, <br/>
                                    pharetra condimentum neque. Pellentesque mi nisi, fringilla <br/>
                                    eu tellus in, semper rhoncus neque. Maecenas.
                                </div>

                                <ul className={styles.contacts}>
                                    <li className={styles.tel}>
                                        <a className={styles.telephone} href='tel:88005553535'>8 800 555-35-35</a>
                                    </li>
                                    <li className={styles.mail}>
                                        <a className={styles.mailto} href='mailto:twopeakmusic@gmail.com'>twopeakmusic@gmail.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className={`col-xs-12 col-sm-6 ${styles.block}`}>
                                <Form className={`${styles.form}`}>

                                    <Form.Group controlId="exampleForm.nameInput" className={styles.formFieldWrap}>
                                        <Form.Control type="text" placeholder="Ваше имя" className={styles.formField}/>
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.phoneInput" className={styles.formFieldWrap}>
                                        <Form.Control type="phone" placeholder="Телефон" className={styles.formField}/>
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.emailInput" className={styles.formFieldWrap}>
                                        <Form.Control type="email" placeholder="E-mail" className={styles.formField}/>
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.commentInput" className={styles.formFieldWrap}>
                                        <Form.Control as="textarea" rows={7} placeholder="Комментарий" className={styles.formField}/>
                                    </Form.Group>

                                    <Form.Group className={`${styles.checkBox}`}>

                                        <div className={`${styles.text}`}>
                                            Отправляя заявку, я даю согласие на
                                            <a href="/" className={`${styles.link}`}> обработку своих персональных данных</a>
                                            .
                                        </div>


                                        <Form.Check
                                            className={styles.checkBoxCheck}
                                            required
                                            type='checkbox'
                                            label=""
                                            feedback="You must agree before submitting."
                                        />

                                        {/*<img src={checkboxBorder} className={styles.checkboxBorder}/>*/}

                                    </Form.Group>

                                    <img alt='captcha-plug' src={captchaPlug} className={styles.captchaPlug}/>

                                    <button
                                        type="submit"
                                        className={`btn btn-outline-secondary btn-lg btn-block ${styles.button}`}
                                    >
                                        СВЯЖИТЕСЬ С НАМИ
                                    </button>

                                </Form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );

    }

}