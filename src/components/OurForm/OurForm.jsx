import React from "react";
import styles from "./Form.module.css";

export default class Competency extends React.Component {

    textBlockWrapper = {

    }

    textBlockTitle = {

    }

    textBlockDesc = {

    }

    textBlockContact = {

    }

    render() {

        return(

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-xs-12 col-sm-6'>
                        <div className={this.textBlockWrapper}>

                            <div className={this.textBlockTitle}>
                                Оставить заявку на <br/>
                                поддержку сайта
                            </div>

                            <div className={this.textBlockDesc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                                Suspendisse justo justo, finibus a dolor sit amet, <br/>
                                pharetra condimentum neque. Pellentesque mi nisi, fringilla <br/>
                                eu tellus in, semper rhoncus neque. Maecenas.
                            </div>

                            <div className={this.textBlockContact}>
                                <ul>
                                    <li>
                                        8 800 555 35 35
                                    </li>
                                    <li>
                                        twopeakmusic@gmail.com
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className='col-md-6 col-xs-12 col-sm-6'>
                        
                    </div>

                </div>
            </div>

        );

    }

}