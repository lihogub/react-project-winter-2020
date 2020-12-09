import React from "react";
import axios from "axios";
import AchievementItem from "./Item/AchievementItem";
const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/achievement";

export default class Achievements extends React.Component {

    state = {
        jsonData: []
    }

    componentDidMount() {
        axios.get(endpoint).then(
            (res) => this.setState({jsonData: res.data}),
            (err) => alert(err)
        )
    }

    render() {
        return (
            <div className="container-fluid d-flex px-0 py-4">
                <div className="row px-0">
                    {
                        this.state.jsonData.map(
                            (item) => <AchievementItem title={item.title} text={item.desc} key={item.id} isLarge={item.id === 0}/>
                        )
                    }
                </div>
            </div>
        )
    }

}