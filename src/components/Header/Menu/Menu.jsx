import React from "react";
import MenuItem from "./Item/MenuItem";
import {Col, Container, Image, Navbar, Row} from "react-bootstrap";
import drupalCoderImg from "../../../res/images/drupal-coder.svg";
import MenuItemDropdown from "./Item/MenuItemDropdown";
import axios from "axios";

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/menu";

export default class Menu extends React.Component {

    state = {linkDataJson: []}

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
                    return <MenuItemDropdown id={item.id} key={item.id} text={item.text} ref={item.ref} drop={item.drop}/>
                } else {
                    return <MenuItem id={item.id} key={item.id} text={item.text} ref={item.ref}/>
                }
            })
        }
        return (
            <Navbar>
                <Row>
                    <Col>
                        <Image fluid={true} src={drupalCoderImg} width={"165px"}/>
                    </Col>
                    <Row>
                        {links}
                    </Row>
                </Row>
            </Navbar>
        )
    }

}