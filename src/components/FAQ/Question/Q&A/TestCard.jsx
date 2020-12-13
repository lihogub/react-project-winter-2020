import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import React, {useContext} from "react";
import styles from "./TestCard.module.css"
import {AccordionContext, useAccordionToggle} from "react-bootstrap";

function ContextAwareToggle({children, eventKey, callback}) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <Card.Header
            type="button"
            style={
                {
                    color: isCurrentEventKey ? 'red' : 'black',
                    backgroundColor: "transparent",
                    fontWeight: "bold",
                    borderBottom: "0"
                }
            }
            onClick={decoratedOnClick}
        >
            {children}
        </Card.Header>
    );
}
function BorderedCard({children, eventKey, callback}) {
    const currentEventKey1 = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKeyy = currentEventKey1 === eventKey;

    return (
        <Card
            type="button"
            style={
                {
                    borderColor: isCurrentEventKeyy ? 'red' : 'transparent',
                }
            }
            onClick={decoratedOnClick}
        >
            {children}
        </Card>
    );
}
export default class TestCard extends React.Component {
    render() {
        //работает, если сделать не кастомную карточку
        return (
            <BorderedCard className={styles.globalCard}>
                <ContextAwareToggle eventKey={this.props.keyy} className={styles.ContextAwareToggle}>
                    <h5>{this.props.question}</h5>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey={this.props.keyy}>
                    <Card.Body>{this.props.answer}</Card.Body>
                </Accordion.Collapse>
            </BorderedCard>
        )
    }
}