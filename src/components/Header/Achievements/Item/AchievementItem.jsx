import React from "react";
import cupImg from "../../../../res/images/cup.png";

export default class AchievementItem extends React.Component {

    achievementStyle = {
        borderLeft: "#F14D34 3px solid",
        marginLeft: "0.90em"
    }

    titleLargeStyle = {
        fontSize: "48px",
        color: "white",
        fontWeight: 700
    }

    titleStyle = {
        color: "white",
        fontWeight: 600
    }

    textStyle = {
        fontSize: "13px",
        color: "rgba(255, 255, 255, 0.75)",
        fontWeight: 400
    }

    titleRowLargeClassName = "mt-n4";

    getItem() {
        return (
            <div className="col-6 col-md-4 my-3 ml-4 pr-4 mr-n4" style={this.achievementStyle}>
                <h3 className="py-0 my-0 px-0 mx-0" style={this.titleStyle}>
                    {this.props.title}
                </h3>
                <p className="py-0 pb-1 my-0 px-0 mx-0 pr-3" style={this.textStyle}>
                    {this.props.text}
                </p>
            </div>
        )
    }

    getItemLarge() {
        return (
            <div className="col-6 col-md-4 my-3 ml-4 pr-4 mr-n4" style={this.achievementStyle}>
                <div className="row pl-3 mt-n4">
                    <h3 className="py-0 my-0" style={this.titleLargeStyle}>
                        {this.props.title}
                    </h3>
                    {this.props.isLarge ? <img src={cupImg} alt="cup icon" height="60px" className="mt-n2"/> : null}
                </div>
                <p className="py-0 pb-1 my-0 px-0 mx-0 pr-2" style={this.textStyle}>
                    {this.props.text}
                </p>
            </div>
        )
    }

    render() {
        return (
            this.props.isLarge ? this.getItemLarge() : this.getItem()
        )
    }
}