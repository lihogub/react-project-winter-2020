import React from "react";
import BGImg from "./../../../res/images/drupal-coder-bg.png";
import styles from "./item.module.css";

export default class CompetencyItem extends React.Component {

    titleStyle = {
        color: "black",
        fontWeight: 700,
        textAlign: "center"
    }

    render() {
        return (
            <div className={styles.common}>
                <div className="row d-flex mx-0 px-0 justify-content-center justify-content-md-start">
                    <div className='col-auto'>
                        <img className={styles.icon} src={this.props.imageUrl} alt="competency-icon"/>
                        <img className={styles.bg_image} src={BGImg} alt="drupal-overlay-icon"/>
                    </div>
                </div>
                <div className={`${styles.description} my-3`} style={{maxWidth: "180px"}}>
                    {this.props.title && <h2 className={`text-md-left ${styles.description}`}>
                        {this.props.title}
                    </h2>}
                    <p className={`${styles.description}`}>
                        {this.props.text}
                    </p>
                </div>
            </div>
        )
    }

}