import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";
import Competency from "./components/Competency/Competency";
import Workers from "./components/Workers/Workers";
import Advantage from "./components/Advantage/Advantage";

export default class App extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Header/>
                <Advantage/>
                <Workers/>
                <Competency/>
            </Container>
        )
    }
}
