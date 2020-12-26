import React from "react";
import {Route} from "react-router-dom"
import './App.css';
import Header from "./components/Header/Header";
import {Container} from "react-bootstrap";
import Competency from "./components/Competency/Competency";
import Workers from "./components/Workers/Workers";
import Advantage from "./components/Advantage/Advantage";
import Execution from "./components/Execution/Execution";
import Footer from "./components/Foottter/Footer";
import FAQ from "./components/FAQ/FAQ";
import Rates from "./components/Rates/Rates";
import Testimonial from "./components/Testimonial/Testimonial";
import Partner from "./components/Partner/Partner"
import Case from "./components/Case/Case";
import Expertise from "./components/Expertise/Expertise";
import OurFormModal from "./components/OurFormModal/OurFormModal";
import Loader from "./components/Loader/Loader";


export default class App extends React.Component {

    style = {
        backgroundColor: "white",
        zIndex: 0
    }

    render() {
        return (
            <Container fluid={true} className="px-0 overflow-hidden">
                <Header/>
                <div style={this.style} className="px-0">
                    <Loader/>
                    <Competency/>
                    <Advantage/>
                    <Expertise/>
                    <Rates/>
                    <Execution/>
                    <Workers/>
                    <Case/>
                    <Testimonial/>
                    <Partner/>
                    <FAQ/>
                </div>
                <Route path={"/form"} component={OurFormModal}/>
                <Footer/>
            </Container>
        )
    }
}
