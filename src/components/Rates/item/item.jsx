import React from "react";
import checkSvg from "../../../res/images/checkmark.svg";
import styles from "./item.module.css";
import {Link} from "react-router-dom";

export default class Rate extends React.Component {

    render() {

        return (

            <div
                className={`container-fluid container-sm px-0 py-3 col-12 col-md-6 col-lg-4 d-flex d-md-block justify-content-center ${styles.top}`}
                 style={{display: "inline-block", margin: "0"}}
                 onMouseEnter={this.props.onMouseEnterCallback}>
                <div className={`${this.props.isBig ? styles.rateIsBig : styles.rate} py-4 py-lg-5 mx-0 mx-md-3 px-4 py-0 py-md-3`}>

                    <div className={styles.header}>
                        <div className={styles.header_title}>
                            {this.props.title}
                        </div>
                        <br/>
                    </div>
                    <div className={styles.body}>
                        {this.props.desc.map(
                            (item, index) =>
                                (
                                    <div key={index} className={`${styles.body_item} row px-3`}>
                                        <div className="col-auto px-0">
                                            <img src={checkSvg} className="bi bi-check p-0 m-0" alt="check mark"/>
                                        </div>
                                        <div className="col pr-0">
                                            {item}
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                    <br/>
                    <div className='row justify-content-center px-2'>
                        <Link to="form" className="w-100 px-2">
                            <button type="button"
                                className={`btn btn-outline-secondary btn-lg btn-block py-3 ${styles.footer_button}`}
                                data-toggle="button"
                                aria-pressed="false"
                            >
                                СВЯЖИТЕСЬ С НАМИ!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )

    }

}