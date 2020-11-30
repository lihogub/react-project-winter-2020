import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";
import Workers from "./components/Workers/Workers";


export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <Workers />
            </Container>
        )
    }
}
