import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";
import CompetencyItem from "./components/Competency/Item/item";

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <CompetencyItem text='megakektest123qwerty'/>
            </Container>
        )
    }
}
