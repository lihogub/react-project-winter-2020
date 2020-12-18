import React from "react";
import styles from "./OurForm.module.css";
import {Form} from "react-bootstrap";

export default class Competency extends React.Component {

    textBlockWrapper = {

    }

    textBlockTitle = {

    }

    textBlockDesc = {

    }

    textBlockContact = {

    }

    render() {

        return(

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-xs-12 col-sm-6'>
                        <div className={this.textBlockWrapper}>

                            <div className={this.textBlockTitle}>
                                Оставить заявку на <br/>
                                поддержку сайта
                            </div>

                            <div className={this.textBlockDesc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                                Suspendisse justo justo, finibus a dolor sit amet, <br/>
                                pharetra condimentum neque. Pellentesque mi nisi, fringilla <br/>
                                eu tellus in, semper rhoncus neque. Maecenas.
                            </div>

                            <div className={this.textBlockContact}>
                                <ul>
                                    <li>
                                        8 800 555 35 35
                                    </li>
                                    <li>
                                        twopeakmusic@gmail.com
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className='col-md-6 col-xs-12 col-sm-6'>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Example multiple select</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </div>

                </div>
            </div>

        );

    }

}