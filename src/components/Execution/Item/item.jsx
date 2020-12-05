import React from "react";
import BGImg from "./../../../res/images/drupal-coder-bg.png";
import styles from "./item.module.css";

export default class CompetencyItem extends React.Component {

    render() {
        return (
            <div className={styles.common}>
                <div className=''>
                    <img className={styles.icon} src={this.props.imageUrl} alt="competency-icon"/>
                    <img className={styles.bg_image} src={BGImg} alt="drupal-overlay-icon"/>
                </div>
                <div className='m-3'>
                    {this.props.text}
                </div>
            </div>
        )
    }

}