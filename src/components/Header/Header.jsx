import React from "react";
import headerBGImg from "../../res/images/headerBG.png";
import {Container} from "react-bootstrap";
import Menu from "./Menu/Menu";


export default class Header extends React.Component {

    style = {
        backgroundImage: `url(${headerBGImg})`,
        fontSize: "13px"
    }

    render() {
        return (
            <Container fluid style={this.style} className="px-0 px-md-1">
                <Menu/>
            </Container>
        )
    }

}