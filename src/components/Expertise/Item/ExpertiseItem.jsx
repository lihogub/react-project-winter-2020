import React from "react";

export default class ExpertiseItem extends React.Component {

    itemStyle = {
        borderLeft: "#F14D34 3px solid",
        color: "white",
        opacity: 0.75,
        fontWeight: 500
    }

        render() {
        return (
            <div style={this.itemStyle} className="pl-3 py-1 mx-0 my-2">
                <p>{this.props.text}</p>
            </div>
        )
    }

}