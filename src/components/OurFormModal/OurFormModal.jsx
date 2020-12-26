import React from "react";
import styles from "./OurForm.module.css";
import {Form, Modal} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {formActionCreators} from "../../redux/actions/actions";
import {withRouter} from "react-router-dom"

const recaptchaRef = React.createRef();

class OurFormModal extends React.Component {

    onSubmit = (event) => {
        event.preventDefault()
        this.props.sendForm()
    }

    render() {
        return (
            <Modal
                onHide={() => this.props.history.push("/")}
                backdrop={true}
                keyboard={false}
                show={!(this.props.form.success || this.props.form.error || this.props.form.loading)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton closeLabel='close'>
                    <h2 className={styles.title}>
                        Оставить заявку <br/>
                        на поддержку сайта
                    </h2>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="modalForm.nameInput" className={styles.formFieldWrap}>
                            <Form.Control type="text"
                                          placeholder="Ваше имя"
                                          className={styles.formField}
                                          value={this.props.form.name}
                                          onChange={(e) => this.props.setFormName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="modalForm.phoneInput" className={styles.formFieldWrap}>
                            <Form.Control type="phone" placeholder="Телефон" className={styles.formField}
                                          value={this.props.form.phone}
                                          onChange={(e) => this.props.setFormPhone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="modalForm.emailInput" className={styles.formFieldWrap}>
                            <Form.Control type="email" placeholder="E-mail" className={styles.formField}
                                          value={this.props.form.email}
                                          onChange={(e) => this.props.setFormEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="modalForm.commentInput" className={styles.formFieldWrap}>
                            <Form.Control as="textarea" rows={3} placeholder="Комментарий" className={styles.formField}
                                          value={this.props.form.comment}
                                          onChange={(e) => this.props.setFormComment(e.target.value)}
                            />
                        </Form.Group>
                        <div className={`${styles.text}`}>
                            Отправляя заявку, я даю согласие на
                            <a href="/" className={`${styles.link}`}> обработку своих персональных данных</a>
                            <a href="/" className={`${styles.dot}`}>
                                .
                            </a>
                        </div>
                        <label className={`${styles.checkBoxGroup}`}>
                            <input
                                required
                                className={styles.checkBox}
                                type='checkbox'
                                checked={this.props.form.agree}
                                onChange={(e) => this.props.setFormAgree(e.target.checked)}
                            />
                            <span className={styles.customCheckbox}/>
                        </label>
                        <Modal.Footer className='d-flex justify-content-center'>
                            <div className='m-0 mb-2 p-0 overflow-hidden'>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={this.props.form.captchaSiteKey}
                                />
                            </div>
                            <button
                                type="submit"
                                className={`btn btn-outline-secondary btn-lg btn-block ${styles.button}`}
                                disabled={this.props.form.loading}
                                onClick={e => this.props.setFormCaptcha(recaptchaRef.current.getValue())}
                            >
                                СВЯЖИТЕСЬ С НАМИ
                            </button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }

}

const mapStateToProps = ({form}) => {
    return {form}
}

const mapDispatchToProps = (dispatch) => {
    return {...bindActionCreators(formActionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OurFormModal))