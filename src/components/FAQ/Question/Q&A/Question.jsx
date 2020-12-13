import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import React from "react";
import styles from "./Question.module.css"

export default class Question extends React.Component {

    render() {
        return (
            <Card className={styles.globalCard}>
                <Accordion.Toggle as={Card.Header} eventKey={this.props.keyy} className={styles.cardHeader}>
                    <h5>{this.props.question}</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.props.keyy}>
                    <Card.Body>{this.props.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }

}