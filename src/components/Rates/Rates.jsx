import React from "react";
import Rate from "./item/item";
import styles from "./Rates.module.css";
import axios from "axios";

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/rate"

export default class Rates extends React.Component {

    state = {
        rateData: []
    }

    componentDidMount() {
        axios.get(endpoint)
            .then(
                (res) => {
                    this.setState({rateData: res.data})
                }
            )
            .catch(
                (err) => alert("Network error " + err)
            )
    }


    componentStyle = {
        maxWidth: "1170px",
        paddingTop: "118px",
    }

    ratesStyle = {
        marginBottom: "70px",
        display: "relative",
        zIndex: "0"
    }

    additionalContainerStyle = {
        width: 500,
        maxWidth: "100%"
    }

    additionalTextStyle = {
    fontSize: "12pt",
    color: "#828a9b",
    }

    additionalLinkStyle = {
        textDecoration: "underline",
        fontSize: "9pt",
        lineHeight: "1.3",
        color: "black"
    }

    render() {
        const rates = this.state.rateData.map(
            (item) => (
                <Rate
                    key={item.id}
                    title={item.title}
                    desc={item.features}
                    isActive={item.id === 1}
                />
            )
        )

        return (
        <div className='container' style={this.componentStyle}>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className={styles.title}>
                        Тарифы
                    </h2>
                </div>
            </div>
            <div className='row d-flex flex-row justify-content-evenly' style={this.ratesStyle}>
                {rates}
            </div>
            <div className="container" style={this.additionalContainerStyle}>
                <div className='text-center' style={this.additionalTextStyle}>
                    Вам не подходят наши тарифы?
                    Оставьте заявку и мы предложим вам индивидуальные условия!
                </div>
                <br/>
                <div className='text-center'>
                    <a href='/' style={this.additionalLinkStyle}>
                        ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ
                    </a>
                </div>
            </div>
        </div>
        )
    }

}