import React from "react";
import CompetencyItem from "./Item/item";
import styles from "./Competency.module.css";
import axios from "axios";

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/competency"

export default class Competency extends React.Component {

    state = {
        compData: []
    }

    componentDidMount() {
        axios.get(endpoint)
            .then(
                (res) => {
                    this.setState({compData: res.data})
                }
            )
            .catch(
                (err) => alert("Network error " + err)
            )
    }

    render() {

        const competencies = this.state.compData.map(
            (item) => (
                <div className="d-inline-flex col mb-2 px-0" key={item.id}>
                    <CompetencyItem
                        text={item.text}
                        imageUrl={`${process.env.PUBLIC_URL}/images/competency-${item.id + 1}.svg`}/>
                </div>
            )
        )

        return (
                <div className='container' style={{padding: "118px 0"}}>
                    <div className='row mx-3'>
                        <div className='col-md-6 px-0'>
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
                    <div className='row row-cols-2 row-cols-md-4 row-cols-sm-2 mx-3'>
                        {competencies}
                    </div>
                </div>
            )
    }

}