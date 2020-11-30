import React from "react";
import Card from "react-bootstrap/Card";

export default class Worker extends React.Component {

    styleCard = {
        width: "280px",
        padding: "10px",
        margin: "20px",
        border: "0px"
    }

    render() {
        return (
            <Card style={this.styleCard}>
                <Card.Img variant="top" src={this.props.imageUrl} className="Img"/>
                <Card.Body>
                    <Card.Title>
                        <div>{this.props.name}</div>
                    </Card.Title>
                    <Card.Text>
                        {this.props.job}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

}