import React from "react";

export default class PartnerItem extends React.Component {

    itemStyle = {
        backgroundColor: "white",
        width: 275,
        maxWidth: "38vw",
        height: 150,
        maxHeight: "20vw",
        borderRadius: 5,
        border: "1px rgba(0, 0, 0, 0.1) solid"

    }


    render() {
        return (
            <div style={this.itemStyle} className="d-flex justify-content-center align-items-center">
                <img src={process.env.PUBLIC_URL + `/images/logo-${this.props.id}.png`} className="d-flex"
                     style={{height: "33%"}} alt={`logo-${this.props.id}`}/>
            </div>
        )
    }

}