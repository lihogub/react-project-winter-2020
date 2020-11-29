import React, {useState} from "react";
import axios from 'axios/index'
import styles from "./Header.module.css";
import headerBGImg from "../../res/images/headerBG.png";
import drupalCoderImg from "../../res/images/drupal-coder.svg";
import {
    Container,
    Row,
    Col,
    NavbarBrand,
    Navbar,
    Image,
    NavItem,
    NavLink,
    NavDropdown,
    Dropdown
} from "react-bootstrap";

const endpoint = "https://react-warriors-rest-api.herokuapp.com/api/menu";

export default class Header extends React.Component {

    state = {
        linkDataJson: []
    }

    style = {
        backgroundImage: `url(${headerBGImg})`
    }

    componentDidMount() {
        axios.get(endpoint).then((res) => {
                this.setState({linkDataJson: res.data})
            },
            (err) => alert(err)
        )
    }

    createUsualLink(linkData) {
        return (
            <NavLink className={styles.linkStyle} href={linkData.ref}>
                {linkData.text}
            </NavLink>
        )
    }

    createDropdownLink(linkData) {
        const [show, setShow] = useState(false);
        const showDropdown = (e)=>{
            setShow(!show);
        }
        const hideDropdown = e => {
            setShow(false);
        }
        return (
            <NavDropdown onMouseEnter={showDropdown} onMouseLeave={hideDropdown} className={styles.linkStyle} title={linkData.text}>
                {linkData.drop.map((item, index, _) => (
                    <Dropdown.Item key={index} className={styles.linkStyle} href={item.ref}>
                        {item.text}
                    </Dropdown.Item>
                ))}
            </NavDropdown>
        )
    }

    createLinksFromJson(linkData) {
        if (!linkData) return null;
        return linkData.map((item, index, _) => {
                return (
                    <NavItem key={index} className={styles.navItem}>
                        {item.drop.length ? this.createDropdownLink(item) : this.createUsualLink(item)}
                    </NavItem>
                )
            }
        )
    }

    render() {
        return (
            <Container style={this.style}>
                <Navbar className={"d-flex container-fluid"}>
                        <Col xs={2} className={"justify-content-start"}>
                            <Image fluid={true} src={drupalCoderImg} width={"165px"}/>
                        </Col>
                        <Col>
                        <Row className={"justify-content-end"}>
                            {this.createLinksFromJson(this.state.linkDataJson)}
                        </Row>
                    </Col>
                </Navbar>
            </Container>
        )
    }
}