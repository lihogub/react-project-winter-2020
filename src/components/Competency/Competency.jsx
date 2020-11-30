import React from "react";
import CompetencyItem from "./Item/item";
import testImg from "../../res/images/competency-2.svg";

export default class Competency extends React.Component {

    render() {
        return (

            <div className='row row-cols-2 row-cols-md-4 row-cols-sm-2'>
                <div className="col mb-2">
                    <CompetencyItem text='Добавление информации на сайт, создание новых разделов' imageUrl={testImg}/>
                </div>
                <div className="col mb-2">
                    <CompetencyItem text='Разработка и оптимизация модулей сайта' imageUrl={testImg}/>
                </div>
                <div className="col mb-2">
                    <CompetencyItem text='Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами' imageUrl={testImg}/>
                </div>
                <div className="col mb-2">
                    <CompetencyItem text='Любые доработки функционала и дизайна' imageUrl={testImg}/>
                </div>
                <div className="col mb-2">
                    <CompetencyItem text='Разработка и оптимизация модулей сайта' imageUrl={testImg}/>
                </div>
                <div className="col mb-2">
                    <CompetencyItem text='Разработка и оптимизация модулей сайта' imageUrl={testImg}/>
                </div>
                <div className="col mb-2">
                    <CompetencyItem text='Разработка и оптимизация модулей сайта' imageUrl={testImg}/>
                </div>
                <div className="col mb-2">
                    <CompetencyItem text='Разработка и оптимизация модулей сайта' imageUrl={testImg}/>
                </div>
            </div>

        )
    }

}