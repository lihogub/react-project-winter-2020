import React from "react";
import {Container} from "react-bootstrap";
import Menu from "../Header/Menu/Menu";
import Worker from "./Worker/Worker";
import IMG_2472_0 from "../../res/images/IMG_2472_0.jpg"

export default class Workers extends React.Component {

    style = {
    }

    render() {
        return (
            <div className="d-flex row justify-content-center" style={this.style}>
                <Worker imageUrl={IMG_2472_0} name="name1"
                        job="job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1"
                        className="col-4"/>
                <Worker imageUrl={IMG_2472_0} name="name1"
                        job="job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1"
                        className="col-4"/>
                <Worker imageUrl={IMG_2472_0} name="name1"
                        job="job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1"
                        className="col-4"/>
                <Worker imageUrl={IMG_2472_0} name="name1"
                        job="job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1"
                        className="col-4"/>
                <Worker imageUrl={IMG_2472_0} name="name1"
                        job="job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1 job1"
                        className="col-4"/>
            </div>
        )
    }

}