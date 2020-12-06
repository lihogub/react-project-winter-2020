import React from "react";
import AdvantageItem from "./Item/item";
import supportImage1 from "./../../res/images/support1.svg"
import supportImage2 from "./../../res/images/support2.svg"
import supportImage3 from "./../../res/images/support3.svg"
import supportImage4 from "./../../res/images/support4.svg"
import supportImage5 from "./../../res/images/support5.svg"
import supportImage6 from "./../../res/images/support6.svg"
import supportImage7 from "./../../res/images/support7.svg"
import supportImage8 from "./../../res/images/support8.svg"
import styles from "./Advantage.module.css";

export default class Advantage extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className={styles.title}>
                            Поддержка от Drupal-coder
                        </h2>
                        {/*<h2 style={{*/}
                        {/*    textAlign: "center",*/}
                        {/*    fontWeight: "bold",*/}
                        {/*    fontSize: "42px",*/}
                        {/*    color: "#050c33",*/}
                        {/*    marginBottom: "80px",*/}
                        {/*    // marginTop: "130px"*/}
                        {/*}}>*/}
                        {/*    Поддержка от Drupal-coder*/}
                        {/*</h2>*/}
                    </div>
                </div>
                <div className='row row-flex p-2'>
                    <div className='col-sm-6 col-md-3 col-xs-12'>
                        <AdvantageItem
                            id='01.'
                            title='Постановка задачи по Email'
                            text='Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.'
                            imageUrl={supportImage1}
                        />
                    </div>
                    <div className='col-sm-6 col-md-3 col-xs-12'>
                        <AdvantageItem
                            id='02.'
                            title='Система Helpdesk – отчетность, прозрачность'
                            text='Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.'
                            imageUrl={supportImage2}
                        />
                    </div>
                    <div className='col-sm-6 col-md-3 col-xs-12'>
                        <AdvantageItem
                            id='03.'
                            title='Расширенная техническая поддержка'
                            text='Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.'
                            imageUrl={supportImage3}
                        />
                    </div>
                    <div className='col-sm-6 col-md-3 col-xs-12'>
                        <AdvantageItem
                            id='04.'
                            title='Персональный менеджер проекта'
                            text='Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.'
                            imageUrl={supportImage4}
                        />
                    </div>
                    <div className='col-sm-6 col-md-3 col-xs-12'>
                        <AdvantageItem
                            id='05.'
                            title='Удобные способы оплаты'
                            text='Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.'
                            imageUrl={supportImage5}
                        />
                    </div>
                    <div className='col-sm-6 col-md-3 col-xs-12'>
                        <AdvantageItem
                            id='06.'
                            title='Работаем с SLA и NDA'
                            text='Работа в рамках соглашений о конфиденциальности и об уровне качества работ.'
                            imageUrl={supportImage6}
                        />
                    </div>
                    <div className='col-sm-6 col-md-3 col-xs-12'>
                        <AdvantageItem
                            id='07.'
                            title='Штатные специалисты'
                            text='Надежные штатные специалисты, никаких фрилансеров.'
                            imageUrl={supportImage7}
                        />
                    </div>
                    <div className='col-sm-6 col-md-3 col-xs-12'>
                        <AdvantageItem
                            id='08.'
                            title='Удобные каналы связи'
                            text='Консультации по телефону, скайпу, в месенджерах.'
                            imageUrl={supportImage8}
                        />
                    </div>
                </div>
            </div>
        )
    }

}