import React from "react";
import CompetencyItem from "./Item/item";
import competencyImg1 from "../../res/images/competency-1.svg";
import competencyImg2 from "../../res/images/competency-2.svg";
import competencyImg3 from "../../res/images/competency-3.svg";
import competencyImg4 from "../../res/images/competency-4.svg";
import competencyImg5 from "../../res/images/competency-5.svg";
import competencyImg6 from "../../res/images/competency-6.svg";
import competencyImg7 from "../../res/images/competency-7.svg";
import competencyImg8 from "../../res/images/competency-8.svg";
import styles from "./Competency.module.css";


export default class Competency extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className={styles.title}>
                            13 лет совершенствуем
                            компетенции в Друпал
                            поддержке!
                        </h2>
                        <div className={styles.description}>
                            Разрабатываем и оптимизируем модули, расширяем
                            функциональность сайтов, обновляем дизайн
                        </div>

                    </div>
                </div>
                <div className='row row-cols-2 row-cols-md-4 row-cols-sm-2'>
                    <div className="d-inline-flex col mb-2">
                        <CompetencyItem
                            text='Добавление информации на сайт, создание новых разделов'
                            imageUrl={competencyImg1}/>
                    </div>
                    <div className="d-inline-flex col mb-2">
                        <CompetencyItem
                            text='Разработка и оптимизация модулей сайта'
                            imageUrl={competencyImg2}/>
                    </div>
                    <div className="d-inline-flex col mb-2">
                        <CompetencyItem
                            text='Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами'
                            imageUrl={competencyImg3}/>
                    </div>
                    <div className="d-inline-flex col mb-2">
                        <CompetencyItem
                            text='Любые доработки функционала и дизайна'
                            imageUrl={competencyImg4}/>
                    </div>
                    <div className="d-inline-flex col mb-2">
                        <CompetencyItem
                            text='Аудит и мониторинг безопасности Drupal сайтов'
                            imageUrl={competencyImg5}/>
                    </div>
                    <div className="d-inline-flex col mb-2">
                        <CompetencyItem
                            text='Миграция, импорт контента и апгрейд Drupal'
                            imageUrl={competencyImg6}/>
                    </div>
                    <div className="d-inline-flex col mb-2">
                        <CompetencyItem
                            text='Оптимизация и ускорение Drupal-сайтов'
                            imageUrl={competencyImg7}/>
                    </div>
                    <div className="d-inline-flex col mb-2">
                        <CompetencyItem
                            text='Веб-маркетинг, консультации и работы по SEO'
                            imageUrl={competencyImg8}/>
                    </div>
                </div>
            </div>



        )
    }

}