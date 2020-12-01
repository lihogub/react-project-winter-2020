import React from "react";
import styles from "./item.module.css";

export default class AdvantageItem extends React.Component {

    render() {
        return (
            <div className={styles.block}>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <div>
                            {this.props.id}
                        </div>
                        <div>
                            {this.props.title}
                        </div>
                    </div>
                    <div className={styles.body}>
                        {this.props.text}
                    </div>
                    <div className={styles.image}>
                        <img src={this.props.imageUrl}/>
                    </div>
                </div>
            </div>
        )
    }

}
