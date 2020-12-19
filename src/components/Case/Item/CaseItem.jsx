import React from "react";
import styles from "./CaseItem.module.css"
import {Link} from "react-router-dom";

export default class CaseItem extends React.Component {

    filledCaseStyle = {
        margin: 0.2 + "em",
        backgroundImage: `url(${this.props.imgUrl})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

    defaultCaseStyle = {
        borderRadius: 5,
        minHeight: 300,
        cursor: "pointer"
    }

    titleColor = {
        color: this.props.isFilled ? "white" : "black"
    }

    dateStyle = {
        color: "gray",
        fontSize: 13,
    }

    imgStyle = {
        borderRadius: 5,
        backgroundImage: `url(${this.props.imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }

    render() {
        return (
            <Link to={this.props.link} className={`d-flex align-items-end container-fluid justify-content-center mt-0 mb-3 px-0 ${styles.caseStyle}`}
                     style={this.props.isFilled ? {...this.defaultCaseStyle, ...this.filledCaseStyle} : this.defaultCaseStyle}>
                    <div className="d-flex row px-0 col-12">
                        {!this.props.isFilled && <div className={`mb-4 ${styles.imgSize}`} style={this.imgStyle}/>}
                        <div className="px-3 px-md-4 pt-md-4">
                            <h5 style={this.titleColor} className={styles.titleStyle}>
                                {this.props.title}
                            </h5>
                            {this.props.date ? <p style={this.dateStyle}>{this.props.date}</p> : <br/>}
                            {!this.props.isFilled &&
                            this.props.desc ? <p className={`${styles.descStyle} pb-5`}>{this.props.desc}</p> : null}
                        </div>
                    </div>
            </Link>
        )
    }

}