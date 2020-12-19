import React from "react";
import styles from "./OurForm.module.css";
import {Button, Form} from "react-bootstrap";

export default class Competency extends React.Component {

    textBlockWrapper = {

    }

    textBlockContact = {

    }

    telephone = {
        fontWeight: "bold",
        fontSize: "36px",
        marginBottom: "12px",
        color: "white"
    }

    mail = {
        fontWeight: "bold",
        fontSize: "18px",
        marginBottom: "12px",
        color: "white"
    }

    render() {

        return(
            <div className={styles.globalStyle}>
                <div className={styles.bgImg}>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-md-6 col-xs-12 col-sm-6'>
                                <div style={this.textBlockWrapper}>

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

                                    <div className={this.textBlockContact}>
                                        <div>
                                            <div>
                                                <a style={this.telephone}
                                                    href='tel:88005553535'>8 800 555-35-35</a>
                                            </div>
                                            <div>
                                                <a style={this.mail}
                                                    href='mailto:twopeakmusic@gmail.com'>twopeakmusic@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='col-md-6 col-xs-12 col-sm-6'>
                                <Form className={styles.form}>
                                    <Form.Group controlId="exampleForm.nameInput">
                                        <Form.Control type="text" placeholder="Ваше имя" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.phoneInput">
                                        <Form.Control type="phone" placeholder="Телефон" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.emailInput">
                                        <Form.Control type="email" placeholder="E-mail" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.commentInput">
                                        <Form.Control as="textarea" rows={7} placeholder="Комментарий"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Check
                                            required
                                            label="Agree to terms and conditions"
                                            feedback="You must agree before submitting."
                                        />
                                    </Form.Group>

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