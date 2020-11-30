import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";
import Competency from "./components/Competency/Competency";
import Workers from "./components/Workers/Workers";

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <Competency/>
                <Workers />
            </Container>
        )
    }
}
