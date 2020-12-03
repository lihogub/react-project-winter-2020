import React from "react";
import {Container} from "react-bootstrap";
import Menu from "../Header/Menu/Menu";
import Worker from "./Worker/Worker";
import IMG_2472_0 from "../../res/images/IMG_2472_0.jpg";
import IMG_2539_0 from "../../res/images/IMG_2539_0.jpg";
import IMG_2474_1 from "../../res/images/IMG_2474_1.jpg";
import IMG_2522_0 from "../../res/images/IMG_2522_0.jpg";
import IMG_9971_16 from "../../res/images/IMG_9971_16.jpg";
import style from "./Workers.module.css";

export default class Workers extends React.Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <h2 style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "42px",
                        color: "#050c33",
                        marginBottom: "80px",
                        marginTop: "130px"
                    }}>
                        Команда
                    </h2>
                    <div className={style.wrapper}>
                        <div className='row row-cols-2 row-cols-md-3 row-cols-sm-2'>
                            <div className='col-xs-6 col-sm-6 col-md-4'>
                                <Worker imageUrl={IMG_2472_0}
                                        name='Сергей Синица'
                                        job='Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора'
                                />
                            </div>

                            <div className='col-xs-6 col-sm-6 col-md-4'>
                                <Worker imageUrl={IMG_2539_0}
                                        name='Роман Агабеков'
                                        job='Руководитель отдела DevOPS, директор'
                                />
                            </div>

                            <div className='col-xs-6 col-sm-6 col-md-4'>
                                <Worker imageUrl={IMG_2474_1}
                                        name='Алексей Синица'
                                        job='Руководитель отдела поддержки сайтов'
                                />
                            </div>

                            <div className='col-xs-6 col-sm-6 col-md-4'>
                                <Worker imageUrl={IMG_2522_0}
                                        name='Дарья Бочкарёва'
                                        job='Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов'
                                />
                            </div>

                            <div className='col-xs-6 col-sm-6 col-md-4'>
                                <Worker imageUrl={IMG_9971_16}
                                        name='Ирина Торкунова'
                                        job='Менеджер по работе с клиентами'
                                />
                            </div>

                        </div>
                    </div>
                    <div className='form-group'>
                        <a href='/team'>
                            Вся команда
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}