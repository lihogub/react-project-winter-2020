import React from "react";
import CaseItem from "./Item/CaseItem";
import styles from "./Case.module.css"
import {Link} from "react-router-dom";

export default class Case extends React.Component {

    commonClasses = "col-12 col-sm-12 col-md-12 d-flex px-2"

    getImgUrl = id => process.env.PUBLIC_URL + `/images/case-${id}.png`

    render() {
        return (
            <div className="container py-3">
                <h5 className={`text-center pt-5 pt-md-3 pb-2 py-md-5 ${styles.titleStyle}`}>
                    Последние кейсы
                </h5>
                <div className="row mx-1">
                    <div className={this.commonClasses + " col-lg-4"}>
                        <CaseItem
                            imgUrl={this.getImgUrl(0)}
                            title={"Настройка кэширования данных. Апгрейд сервера. Ускорение работы сайта в 30 раз!"}
                            isFilled={false}
                            desc={"Влияние скорости загрузки страниц сайта на отказы и коверсии. Кейс ускорения..."}
                            date={"04.05.2020"}
                            link={"article-1"}
                        />
                    </div>
                    <div className={this.commonClasses + " col-lg-8"}>
                        <CaseItem
                            imgUrl={this.getImgUrl(1)}
                            title={"Использование отчетов Ecommerce в Яндекс.Метрике"}
                            isFilled={true}
                            link={"article-2"}
                        />
                    </div>
                    <div className={this.commonClasses + " col-lg-4"}>
                        <CaseItem
                            imgUrl={this.getImgUrl(2)}
                            title={"Повышение конверсии страницы с формой заявки с применением AB-тестирования"}
                            isFilled={true}
                            date={"24.01.2020"}
                            link={"article-3"}
                        />
                    </div>
                    <div className={this.commonClasses + " col-lg-4"}>
                        <CaseItem
                            imgUrl={this.getImgUrl(3)}
                            title={"Drupal 7: ускорение времени генерации страниц интернет-магазина на 32%"}
                            date={"23.09.2019"}
                            isFilled={true}
                            link={"article-4"}
                        />
                    </div>
                    <div className={this.commonClasses + " col-lg-4"}>
                        <CaseItem
                            imgUrl={this.getImgUrl(4)}
                            title={"Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1С: Предприятие, Мойсклад, Класс365"}
                            isFilled={false}
                            children={<p>Опубликован <Link to="module">релиз модуля...</Link></p>}
                            date={"22.08.2019"}
                            link={"article-5"}
                        />
                    </div>
                </div>

            </div>
        )
    }

}