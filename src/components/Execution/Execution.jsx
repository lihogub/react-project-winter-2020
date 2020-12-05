import React from "react";
import CompetencyItem from "./Item/item";
import competencyImg1 from "../../res/images/competency-20.svg";
import competencyImg2 from "../../res/images/competency-21.svg";
import competencyImg3 from "../../res/images/competency-22.svg";
import styles from "./Execution.module.css";


export default class Execution extends React.Component {

    render() {
        return (
            <div className={`${'container'} ${styles.wrap}`}>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className={styles.title}>
                            Наши профессиональные разработчики выполняют быстро любые задачи
                        </h2>
                    </div>
                </div>
                <div className='row row-flex competencies-row'>
                    <div className="col-sm-4 col-xs-12">
                        <CompetencyItem
                            text='Настройка события GA в интернет-магазине'
                            imageUrl={competencyImg1}/>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <CompetencyItem
                            text='Разработка мобильной версии сайта'
                            imageUrl={competencyImg2}/>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <CompetencyItem
                            text='Интеграция модуля оплаты'
                            imageUrl={competencyImg3}/>
                    </div>
                </div>
            </div>



        )
    }

}