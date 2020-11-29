import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";


export default class App extends React.Component {
    render() {
        return (
            <Container className='App'>
                <Header/>
            </Container>
        )
    }
}
