import React from "react";
import styles from "./Header.module.css";
import headerBGImg from "../../res/images/headerBG.png";
import {Container} from "react-bootstrap";
import Menu from "./Menu/Menu";


export default class Header extends React.Component {

    style = {
        backgroundImage: `url(${headerBGImg})`
    }

    render() {
        return (
            <Container style={this.style}>
                <Menu/>
            </Container>
        )
    }

}