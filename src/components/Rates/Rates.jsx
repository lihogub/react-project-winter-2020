import React from "react";
import Rate from "./item/item";
import styles from "./Rates.module.css";
import axios from "axios";

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/rate"

export default class Rates extends React.Component {

    state = {
        rateData: [],
        activeRate: 1
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
        paddingTop: "108px",
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
            (item, index) => (
                <Rate
                    key={item.id}
                    isBig={item.id === this.state.activeRate}
                    title={item.title}
                    desc={item.features}
                    onMouseEnterCallback={() => this.setState(state=>({activeRate: item.id}))}
                />
            )
        )

        return (
            <div className={styles.backgroundImg}>
                <div id="rates" className={`container`} style={this.componentStyle} onMouseLeave={() => this.setState({activeRate: 1})}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className={`pt-md-5 pb-md-5 ${styles.title}`}>
                                Тарифы
                            </h2>
                        </div>
                    </div>
                    <div className='row d-flex flex-row justify-content-evenly mx-3' style={this.ratesStyle}>
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
            </div>
        )
    }

}