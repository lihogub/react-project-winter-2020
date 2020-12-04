import React from "react";
import MenuItem from "./Item/MenuItem";
import {Image, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import drupalCoderImg from "../../../res/images/drupal-coder.svg";
import MenuItemDropdown from "./Item/MenuItemDropdown";
import "./Menu.css";
import axios from "axios";

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/menu";
const activeLinkId = 0;

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
                                             drop={item.drop} isActive={item.id === activeLinkId}/>
                } else {
                    return <MenuItem id={item.id} key={item.id} text={item.text} href={item.ref}
                                     isActive={item.id === activeLinkId}/>
                }
            }
        )

    createLinksMobile = (state) =>
        state.linkDataJson.map(
            (item, index, _) => {
                if (item.drop.length === 0) {
                    return <Nav.Link id={item.id} key={item.id} href={item.ref} children={item.text}
                                     style={{textIndent: "20px"}} className="py-2"/>
                } else {
                    const nestedItems = item.drop.map(
                        (nestedItem, index, _) =>
                            <NavDropdown.Item children={nestedItem.text} className="text-white py-2 px-3"
                                              href={nestedItem.ref} key={index} style={{fontSize: "13px"}}/>
                    )
                    return <NavDropdown id={item.id} style={{textIndent: "20px"}} title={item.text} show={true}
                                        children={nestedItems}/>
                }
            }
        )

    render() {
        return (
            <Navbar collapseOnSelect expand="md" variant="dark"
                    className="py-0 px-0 px-md-2 container-fluid container-md justify-content-md-start">
                <div className="d-none d-md-flex container justify-content-md-start">
                    <Navbar.Brand href="#main" className="align-items-center justify-content-center">
                        <Image src={drupalCoderImg} width="170px"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <Row className="justify-content-around d-none d-md-flex">
                            {this.createLinksDesktop(this.state)}
                        </Row>
                    </Navbar.Collapse>
                </div>
                <div className="d-flex d-md-none container-fluid fixed-bottom" style={{backgroundColor: "black"}}>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center"
                                     style={{maxHeight: "80vh", overflowY: "scroll"}}>
                        <Nav className="d-block d-md-none px-0 px-md-2">
                            {this.createLinksMobile(this.state)}
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="#main" className="align-items-center justify-content-center mx-3">
                        <Image src={drupalCoderImg} width="170px"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-2"/>
                </div>
            </Navbar>
        )
    }
}

