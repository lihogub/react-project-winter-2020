import React from "react";
import Rate from "./item/item";
import styles from "./Rates.module.css";

export default class Rates extends React.Component {

    render() {
        return (
        <div className='container' style={{
            maxWidth: "1170px",
            paddingTop: "118px",
        }}>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className={styles.title}>
                        Тарифы
                    </h2>
                </div>
            </div>
            <div className='row d-flex flex-row justify-content-evenly' style={{
                marginBottom: "70px",
                display: "relative",
                zIndex: "0"
            }}>
                <Rate
                    title='Стартовый'
                    desc={[
                        "Консультации и работы по SEO",
                        "Услуги дизайнера",
                        "Неиспользованные оплаченные часы не переносятся",
                        "Предоплата от 6 000 рублей в месяц"
                    ]}
                    isActive='false'
                />

                <Rate
                    title='Бизнес'
                    desc={[
                        "Консультации и работы по SEO",
                        "Услуги дизайнера",
                        "Высокое время реакции - до 2 рабочих дней",
                        "Неиспользованные оплаченные часы не переносятся",
                        "Предоплата от 30 000 рублей в месяц"
                    ]}
                    isActive='true'
                />

                <Rate
                    title='VIP'
                    desc={[
                        "Консультации и работы по SEO",
                        "Услуги дизайнера",
                        "Максимальное время реакции - в день обращения",
                        "Неиспользованные оплаченные часы не переносятся",
                        "Предоплата от 270 000 рублей в месяц"
                    ]}
                    isActive='false'
                />
            </div>
            <div className=''>

                <div className='text-center' style={{
                    fontSize: "12pt",
                    color: "#828a9b"
                }}>
                    Вам не подходят наши тарифы?
                    Оставьте заявку и мы <br/> предложим вам индивидуальные условия!
                </div>

                <br/>

                <div className='text-center'>
                    <a href='/' style={{
                        textDecoration: "underline",
                        fontSize: "9pt",
                        lineHeight: "1.3",
                        color: "black"
                    }}>
                        ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ
                    </a>
                </div>

            </div>
        </div>
        )
    }

}