import React from "react";
import checkSvg from "../../../res/images/checkmark.svg";
import styles from "./item.module.css";

export default class Rate extends React.Component {


    render() {
        return (
            <div className={`container-fluid container-sm p-3 col-12 col-md-6 col-lg-4 d-flex d-md-block justify-content-center ${styles.top}`} style={{
                display: "inline-block",
                margin: "0"
            }}>
                <div className={`${styles.rate} py-4 py-lg-5`}>
                    <div className='mx-3 py-0 py-md-3'>

                        <div className={styles.header}>
                            <div className={styles.header_title}>
                                {this.props.title}
                            </div>
                            <br/>
                        </div>
                        <div className={styles.body}>
                            {this.props.desc.map(
                                item =>
                                    (
                                        <div className={styles.body_item}>
                                            <img src={checkSvg} className="bi bi-check" alt="check mark"/>
                                            {item}
                                        </div>
                                    )
                            )}
                        </div>
                        <br/>
                        <div className='row justify-content-center'>
                            <button
                                type="button"
                                className={`btn btn-outline-secondary btn-lg btn-block ${styles.footer_button}`}
                                data-toggle="button"
                                aria-pressed="false"
                            >
                                СВЯЖИТЕСЬ С НАМИ!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}