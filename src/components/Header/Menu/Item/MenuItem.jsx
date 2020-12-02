import React from "react";
import {NavItem, NavLink} from "react-bootstrap";


export default class MenuItem extends React.Component {
    state = {
        hover: false
    }

    style = {
        transition: "200ms ease-in",
        color: "white"
    }

    styleHover = {
        boxShadow: "0px 4px 0px 0px #F14D34"
    }

    onMouseEnter = () => this.state.hover ? null : this.setState({hover: true})
    onMouseLeave = () => this.state.hover ? this.setState({hover: false}) : null

    render() {
        const styleButton = (this.state.hover || (this.props.id === 0)) ? {...this.style, ...this.styleHover} : this.style
        return (
            <NavItem id={this.props.id} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <NavLink href={this.props.href} style={styleButton}>
                    {this.props.text}
                </NavLink>
            </NavItem>
        )
    }

}