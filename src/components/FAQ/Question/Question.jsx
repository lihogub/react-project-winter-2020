import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import React from "react";

export default class Question extends React.Component {
    render() {
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.props.key}>
                    <div>{this.props.question}</div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>{this.props.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}