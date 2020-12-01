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

export default class Advantage extends React.Component {

    render() {
        return (
            <div className='row row-flex advantages-row'>
                <div className='col-sm-6 col-md-3 col-xs-12 advantage-col'>
                    <AdvantageItem
                        id='01.'
                        title='Постановка задачи по Email'
                        text='Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.'
                        imageUrl={supportImage1}
                    />
                </div>
                <div className='col-sm-6 col-md-3 col-xs-12 advantage-col'>
                    <AdvantageItem
                        id='02.'
                        title='Постановка задачи по Email'
                        text='Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.'
                        imageUrl={supportImage1}
                    />
                </div>
                <div className='col-sm-6 col-md-3 col-xs-12 advantage-col'>
                    <AdvantageItem
                        id='03.'
                        title='Постановка задачи по Email'
                        text='Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.'
                        imageUrl={supportImage1}
                    />
                </div>
                <div className='col-sm-6 col-md-3 col-xs-12 advantage-col'>
                    <AdvantageItem
                        id='04.'
                        title='Постановка задачи по Email'
                        text='Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.'
                        imageUrl={supportImage1}
                    />
                </div>
                <div className='col-sm-6 col-md-3 col-xs-12 advantage-col'>
                    <AdvantageItem/>
                </div>
                <div className='col-sm-6 col-md-3 col-xs-12 advantage-col'>
                    <AdvantageItem/>
                </div>
                <div className='col-sm-6 col-md-3 col-xs-12 advantage-col'>
                    <AdvantageItem/>
                </div>
                <div className='col-sm-6 col-md-3 col-xs-12 advantage-col'>
                    <AdvantageItem/>
                </div>
            </div>
        )
    }

}