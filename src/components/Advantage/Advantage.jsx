import React from "react";
import AdvantageItem from "./Item/item";
import styles from "./Advantage.module.css";
import axios from "axios";

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/advantage"

export default class Advantage extends React.Component {

    state = {
        advData: []
    }

    componentDidMount() {
        axios.get(endpoint)
            .then(
                (res) => {
                    this.setState({advData: res.data})
                }
            )
            .catch(
                (err) => alert("Network error " + err)
            )
    }

    render() {
        const advantages = this.state.advData.map(
            (item) => (
                <div className='col-sm-6 col-lg-3 col-xs-12' key={item.id}>
                    <AdvantageItem
                        key={item.id}
                        id={item.id + 1}
                        title={item.title}
                        text={item.desc}
                        imageUrl={`${process.env.PUBLIC_URL}/images/support${item.id+1}.svg`}
                    />
                </div>
            )
        )
        return (
            <div className='container'>
                <div className='row mx-3'>
                    <div className='col-md-12'>
                        <h2 className={styles.title}>
                            Поддержка от Drupal-coder
                        </h2>
                    </div>
                </div>
                <div className='row row-flex p-2'>
                    {advantages}
                </div>
            </div>
        )
    }

}