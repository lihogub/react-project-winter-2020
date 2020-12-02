import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Worker.module.css";

export default class Worker extends React.Component {

    styleCard = {
        width: "280px",
        padding: "10px",
        margin: "20px",
        border: "0px"
    }

    render() {
        return (
            <div style={this.styleCard}>
                <img variant="top" src={this.props.imageUrl} className="Img"/>
                <div>
                    <div>
                        <div>{this.props.name}</div>
                    </div>
                    <div>
                        {this.props.job}
                    </div>
                </div>
            </div>
        )
    }

}