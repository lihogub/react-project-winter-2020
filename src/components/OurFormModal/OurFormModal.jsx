import React from "react";
import styles from "./OurForm.module.css";
import {Form, Modal} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

const captchaKey = () =>{
    return "6LeN2w4aAAAAABXWa4jRkIdelkgFss3Dey_lYxCJ";
}

export default class OurFormModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    onSubmit = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
    }

    render() {

        return(
            <>
                <div className='row'>
                    <button
                        type="submit"
                        className={`btn btn-outline-secondary btn-lg btn-block mx-3 justify-self-center ${styles.button}`}
                        onClick={() => this.setState({show: true})}
                    >
                        СВЯЖИТЕСЬ С НАМИ
                    </button>
                </div>

                <Modal
                    onHide={() => this.setState({show: false})}
                    backdrop={true}
                    keyboard={false}
                    show={this.state.show}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <h2 className={styles.title}>
                            Оставить заявку <br/>
                            на поддержку сайта
                        </h2>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={this.onSubmit}>

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

                            </Form.Group>

                            <Modal.Footer className='d-flex justify-content-center'>
                                <div className='m-0 mb-2 p-0 overflow-hidden'>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={captchaKey()}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`btn btn-outline-secondary btn-lg btn-block ${styles.button}`}
                                >
                                    СВЯЖИТЕСЬ С НАМИ
                                </button>
                            </Modal.Footer>

                        </Form>

                    </Modal.Body>

                </Modal>
            </>
        );

    }

}