import React from "react";

export default class TestimonialItem extends React.Component {

    textStyle = {
        fontSize: 14,
        lineHeight: 1.15,
        fontWeight: "bold"
    }

    signStyle = {
        color: "gray",
        fontSize: "14px",
        fontWeight: 500
    }

    linkStyle = {
        textDecoration: "underline",
        color: "black",
        fontWeight: 400
    }

    render() {
        const imgUrl = `${process.env.PUBLIC_URL}/images/logo-${this.props.id}.png`
        return (
            <div className="px-2 py-2">
                <img src={imgUrl} className="py-3"/>
                <p style={this.textStyle} className="pt-3 pb-1">
                    {this.props.text}
                </p>
                <p style={this.signStyle}>
                    {this.props.sign}
                    {this.props.link && <a href={this.props.link} style={this.linkStyle}> {this.props.link}</a>}
                </p>
            </div>
        )
    }
}