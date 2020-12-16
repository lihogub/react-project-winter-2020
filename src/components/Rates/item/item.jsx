import React from "react";
import styles from "./item.module.css";

export default class Rate extends React.Component {


    render() {
        return (
            <div className={`${'col-lg-4 col-sm-4'} ${styles.top}`} style={{
                display: "inline-block",
                padding: "15px",
                margin: "0"
            }}>
                <div className={styles.rate}>
                    <div className='mx-3'>

                        <div className={styles.header}>
                            <div className={styles.header_title}>
                                {this.props.title}
                            </div>
                            <br/>
                        </div>

                        <div className={styles.body}>
                            {this.props.desc.map(item =>
                                <div className={styles.body_item}>

                                    <svg opacity="0.4"
                                         width="1.4em"
                                         height="1.4em"
                                         viewBox="0 0 16 16"
                                         className="bi bi-check"
                                         fill="red"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                    </svg>

                                    {item}

                                </div>
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