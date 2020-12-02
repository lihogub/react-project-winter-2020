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

    createLinksDesktop = (state) =>
        state.linkDataJson.map(
            (item, index, _) => {
                if (item.drop.length) {
                    return <MenuItemDropdown id={item.id} key={item.id} text={item.text} href={item.ref}
                                             drop={item.drop}/>
                } else {
                    return <MenuItem id={item.id} key={item.id} text={item.text} href={item.ref}/>
                }
            }
        )

    createLinksMobile = (state) =>
        state.linkDataJson.map(
            (item, index, _) => {
                if (item.drop.length === 0) {
                    return <Nav.Link id={item.id} key={item.id} href={item.ref} children={item.text} style={{textIndent: "20px"}}/>
                } else {
                    const nestedItems = item.drop.map(
                        (nestedItem, index, _) =>
                            <NavDropdown.Item children={nestedItem.text} className="text-white py-2 px-3"
                                              href={nestedItem.ref} key={index} style={{fontSize: "13px"}}/>
                    )
                    return <NavDropdown id={item.id} style={{textIndent: "20px"}} title={item.text} show={true} children={nestedItems}/>
                }
            }
        )

    render() {
        return (
            <Navbar collapseOnSelect expand="md" variant="dark"
                    className="px-0 px-md-2 container-fluid container-md justify-content-md-start">
                <Navbar.Brand href="#main" className="d-none d-md-flex align-items-center justify-content-center">
                    <Image src={drupalCoderImg} width="170px"/>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Row className="justify-content-around d-none d-md-flex">
                        {this.createLinksDesktop(this.state)}
                    </Row>
                    <Nav className="d-block d-md-none px-0 px-md-2" style={{backgroundColor: "black"}}>
                        {this.createLinksMobile(this.state)}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#main" className="d-flex d-md-none align-items-center justify-content-center">
                    <Image src={drupalCoderImg} width="170px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            </Navbar>
        )
    }
}