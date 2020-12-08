import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Question from "./Question/Question";


export default class FAQ extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">FAQ</h2>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div>question1</div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Question question=" " answer=" " key="1"/>
                    <Question question=" " answer=" " key="2"/>
                    <Question question=" " answer=" " key="e"/>
                    <Question question=" " answer=" " key="4"/>
                    <Question question=" " answer=" " key="5"/>
                    <Question question=" " answer=" " key="6"/>
                    <Question question=" " answer=" " key="7"/>
                    <Question question=" " answer=" " key="8"/>
                    <Question question=" " answer=" " key="9"/>
                    <Question question=" " answer=" " key="10"/>
                    <Question question=" " answer=" " key="11"/>
                </Accordion>
            </div>
        )
    }
}