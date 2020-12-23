import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import React, {useContext} from "react";
import styles from "./AccordionCard.module.css"
import {AccordionContext, useAccordionToggle} from "react-bootstrap";

function CustomHeader({children, eventKey, callback}) {
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
                    color: isCurrentEventKey ? '#F14C36' : 'black',
                    fontWeight: "bold",
                    backgroundColor: "white",
                    borderLeft: isCurrentEventKey ? '3px solid #F14C36' : '3px solid transparent',
                    borderRight: isCurrentEventKey ? '3px solid #F14C36' : '3px solid transparent',
                    borderTop: isCurrentEventKey ? '3px solid #F14C36' : '3px solid transparent',
                    borderBottom: 'none',
                    padding: '10px 20px',
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
                <CustomHeader eventKey={this.props.keyy}>
                    <h5 className={styles.question}>
                        <span style={{color: "black", fontSize: 12, opacity: 0.5}}>{this.props.keyy}. </span>
                        {this.props.question}
                    </h5>
                </CustomHeader>
                <Accordion.Collapse eventKey={this.props.keyy}>
                    <Card.Body className={styles.cardBody}>{this.props.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}