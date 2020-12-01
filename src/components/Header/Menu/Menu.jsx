import React from "react";
import MenuItem from "./Item/MenuItem";
import {Col, Image, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import drupalCoderImg from "../../../res/images/drupal-coder.svg";
import MenuItemDropdown from "./Item/MenuItemDropdown";
import axios from "axios";

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/menu";

export default class Menu extends React.Component {

    state = {
        linkDataJson: []
    }

    componentDidMount() {
        axios.get(endpoint).then(
            (res) => this.setState({linkDataJson: res.data}),
            (err) => alert(err)
        )
    }

    render() {
        let links = null;
        if (this.state.linkDataJson) {
            links = this.state.linkDataJson.map((item, index, _)=>{
                if (item.drop.length > 0) {
                    return <MenuItemDropdown id={item.id} key={item.id} text={item.text} href={item.ref} drop={item.drop}/>
                } else {
                    return <MenuItem id={item.id} key={item.id} text={item.text} href={item.ref}/>
                }
            })
        }
        return (
            <Navbar collapseOnSelect expand="md" variant="dark" className="container-fluid container-md justify-content-between">
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <Image src={drupalCoderImg} width="170px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Row className="justify-content-around d-none d-md-flex">
                        {links}
                    </Row>
                    <Nav className="d-flex d-md-none">
                        {links}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}