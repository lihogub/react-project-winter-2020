import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";
import Competency from "./components/Competency/Competency";
import Workers from "./components/Workers/Workers";
import Advantage from "./components/Advantage/Advantage";
import Execution from "./components/Execution/Execution";
import Foottter from "./components/Foottter/Foottter";

export default class App extends React.Component {
    render() {
        return (
            <Container fluid={true} className="px-0">
                <Header/>
                <Competency/>
                <Advantage/>
                <Execution/>
                <Workers/>
                <Foottter/>
            </Container>
        )
    }
}
