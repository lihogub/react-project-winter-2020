import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";
import Competency from "./components/Competency/Competency";

export default class App extends React.Component {
    render() {
        return (
            <Container>

                <Competency/>
            </Container>
        )
    }
}
