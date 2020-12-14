import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import React, {useContext} from "react";
import styles from "./AccordionCard.module.css"
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
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    borderLeft: isCurrentEventKey ? '3px solid red' : '3px solid transparent',
                    borderRight: isCurrentEventKey ? '3px solid red' : '3px solid transparent',
                    borderTop: isCurrentEventKey ? '3px solid red' : '3px solid transparent',
                    borderBottom: 'transparent'
                }
            }
            onClick={decoratedOnClick}
        >
            {children}
        </Card.Header>
    );
}

export default class AccordionCard extends React.Component {
    render() {
        return (
            <Card className={styles.globalCard}>
                <ContextAwareToggle eventKey={this.props.keyy}>
                    <h6>
                        {this.props.keyy}.  {this.props.question}
                    </h6>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey={this.props.keyy}>
                    <Card.Body className={styles.cardBody}>{this.props.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}