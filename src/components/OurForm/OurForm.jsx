import React from "react";
import styles from "./OurForm.module.css";
import {Form} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

const captchaKey = () =>{
    return "6LeN2w4aAAAAABXWa4jRkIdelkgFss3Dey_lYxCJ";
}

export default class Competency extends React.Component {

    onSubmit = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
    }

    render() {

        return(
            <div className={styles.globalStyle}>
                <div className={styles.bgImg}>
                    <div className='container p-0'>
                        <div className={`row`}>

                            <div className={`col-md-6 col-xs-12 col-sm-6`}>

                                <div className={`${styles.textWrapper}`}>

                                    <div className={styles.title}>
                                        Оставить заявку на <br/>
                                        поддержку сайта
                                    </div>

                                    <div className={`${styles.description}`}>
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

                            </div>

                            <div className={`col-md-6 col-xs-12 col-sm-6`}>

                                <div className={`${styles.formWrapper}`}>

                                    <Form className={`${styles.form}`} onSubmit={this.onSubmit} >

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
                                            <Form.Control as="textarea" rows={5} placeholder="Комментарий" className={styles.formField}/>
                                        </Form.Group>

                                        <Form.Group className={`${styles.checkBox}`}>

                                            <div className={`${styles.text}`}>
                                                Отправляя заявку, я даю согласие на
                                                <a href="/" className={`${styles.link}`}> обработку своих персональных данных</a>
                                                <a href="/" className={`${styles.dot}`}>
                                                .
                                                </a>
                                            </div>

                                            <Form.Check
                                                className={styles.checkBoxCheck}
                                                required
                                                type='checkbox'
                                                label=""
                                                feedback="You must agree before submitting."
                                            />
                                            <div className={styles.tick}>

                                            </div>

                                        </Form.Group>

                                        <div className='mb-2'>
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={captchaKey()}
                                                onChange={this.onChange}
                                                theme='dark'
                                            />
                                        </div>

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
            </div>

        );

    }

}