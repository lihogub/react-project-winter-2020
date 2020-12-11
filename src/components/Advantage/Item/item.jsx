import React from "react";
import styles from "./item.module.css";

export default class AdvantageItem extends React.Component {

    render() {
        return (
            <div className={styles.block}>
                    <div className={styles.header}>
                        <div className={styles.id_number}>
                            {`0${this.props.id}.`}
                        </div>
                        <div className={styles.title_text}>
                            {this.props.title}
                        </div>
                    </div>
                    <div className={styles.body}>
                        {this.props.text}
                    </div>
                    <div className={styles.image}>
                        <img src={this.props.imageUrl} alt="advantage icon"/>
                    </div>
            </div>
        )
    }

}
