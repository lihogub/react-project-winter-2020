import React from "react";
import Worker from "./Worker/Worker";
import style from "./Workers.module.css";
import axios from "axios";

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/worker"

export default class Workers extends React.Component {

    state = {
        workerData: []
    }

    componentDidMount() {
        axios.get(endpoint)
            .then(
                (res) => {
                    this.setState({workerData: res.data})
                }
            )
            .catch(
                (err) => alert("Network error " + err)
            )
    }

    titleStyle = {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "42px",
        color: "#050c33",
        marginBottom: "80px",
        marginTop: "130px"
    }

    buttonStyle = {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        color: "#050c33",
        padding: "24px 75px",
        marginBottom: "120px"
    }

    render() {

        const workers = this.state.workerData.map(
            (item) => (
                <div className='col-xs-6 col-sm-6 col-md-4' key={item.id}>
                    <Worker imageUrl={`${process.env.PUBLIC_URL}/images/worker-${item.id}.jpg`}
                            name={item.name}
                            job={item.job}
                    />
                </div>
            )
        )

        return (
            <div>
                <div className='container'>
                    <h2 style={this.titleStyle}>
                        Команда
                    </h2>
                    <div className={style.wrapper}>
                        <div className='row row-cols-2 row-cols-md-3 row-cols-sm-2'>
                            {workers}
                        </div>
                    </div>
                    <div className='row justify-content-center m-0 p-0'>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-toggle="button"
                            aria-pressed="false"
                            style={this.buttonStyle}
                        >
                            Вся команда
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}