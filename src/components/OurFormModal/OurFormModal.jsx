import React from "react";
import styles from "./OurForm.module.css";
import {Form, Modal} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {formActionCreators} from "../../redux/actions/actions";

const recaptchaRef = React.createRef();

const captchaKey = () =>{
    return "6LeN2w4aAAAAABXWa4jRkIdelkgFss3Dey_lYxCJ";
}

class OurFormModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        //this.props.onSubmit(recaptchaValue);
        console.log(recaptchaValue);
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
                                <Form.Control type="text" placeholder="Ваше имя" className={styles.formField}
                                              value={this.props.form.name}
                                              onChange={(e) => this.props.setFormName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.phoneInput" className={styles.formFieldWrap}>
                                <Form.Control type="phone" placeholder="Телефон" className={styles.formField}
                                              value={this.props.form.phone}
                                              onChange={(e) => this.props.setFormPhone(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.emailInput" className={styles.formFieldWrap}>
                                <Form.Control type="email" placeholder="E-mail" className={styles.formField}
                                              value={this.props.form.email}
                                              onChange={(e) => this.props.setFormEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.commentInput" className={styles.formFieldWrap}>
                                <Form.Control as="textarea" rows={5} placeholder="Комментарий" className={styles.formField}
                                              value={this.props.form.comment}
                                              onChange={(e) => this.props.setFormComment(e.target.value)}
                                />
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
                                    checked={this.props.form.agree}
                                    onChange={(e) => this.props.setFormAgree(e.target.checked)}
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

const mapStateToProps = ({form}) => {
    return {form}
}

const mapDispatchToProps = (dispatch) => {
    return {...bindActionCreators(formActionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(OurFormModal)