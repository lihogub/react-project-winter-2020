import React from "react";
import styles from "./OurForm.module.css";
import {Form} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import {connect} from "react-redux";
import {formActionCreators} from "../../redux/actions/actions";
import {bindActionCreators} from "redux";

const recaptchaRef = React.createRef();

const captchaKey = () => {
    return "6LeN2w4aAAAAABXWa4jRkIdelkgFss3Dey_lYxCJ";
}

class OurForm extends React.Component {

    onSubmit = (event) => {
        event.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
    }

    render() {

        return (
            <div className={styles.globalStyle}>
                <div className={styles.bgImg}>
                    <div className='container p-0'>
                        <div className={`row`}>

                            <div className={`col-md-6 col-12`}>

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
                                            <a className={styles.mailto}
                                               href='mailto:twopeakmusic@gmail.com'>twopeakmusic@gmail.com</a>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <div className={`col-md-6 col-12`}>

                                <div className={`${styles.formWrapper}`}>

                                    <Form className={`${styles.form}`} onSubmit={this.onSubmit}>

                                        <Form.Group controlId="exampleForm.nameInput" className={styles.formFieldWrap}>
                                            <Form.Control type="text" placeholder="Ваше имя"
                                                          className={styles.formField}
                                                          value={this.props.form.name}
                                                          onChange={(e) => this.props.setFormName(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.phoneInput" className={styles.formFieldWrap}>
                                            <Form.Control type="phone" placeholder="Телефон"
                                                          className={styles.formField}
                                                          value={this.props.form.phone}
                                                          onChange={(e) => this.props.setFormPhone(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.emailInput" className={styles.formFieldWrap}>
                                            <Form.Control type="email" placeholder="E-mail"
                                                          className={styles.formField}
                                                          value={this.props.form.email}
                                                          onChange={(e) => this.props.setFormEmail(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.commentInput"
                                                    className={styles.formFieldWrap}>
                                            <Form.Control as="textarea" rows={5} placeholder="Комментарий"
                                                          className={styles.formField}
                                                          value={this.props.form.comment}
                                                          onChange={(e) => this.props.setFormComment(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className={`${styles.checkBox}`}>

                                            <div className={`${styles.text}`}>
                                                Отправляя заявку, я даю согласие на
                                                <a href="/" className={`${styles.link}`}> обработку своих персональных
                                                    данных</a>
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
                                                id="agree"
                                                checked={this.props.form.agree}
                                                onChange={(e) => this.props.setFormAgree(e.target.checked)}
                                            />

                                        </Form.Group>

                                        <div className='mb-2'>
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={captchaKey()}
                                                onChange={(e)=>console.log(e)}
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

const mapStateToProps = ({form}) => {
    return {form}
}

const mapDispatchToProps = (dispatch) => {
    return {...bindActionCreators(formActionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(OurForm)