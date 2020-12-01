import React from "react";
import {NavItem, NavLink} from "react-bootstrap";

export default class MenuItem extends React.Component {
    state = {
        hover: false
    }

    style = {
        transition: "all 200ms ease-in",
        color: "white"
    }

    styleHover = {
        boxShadow: "0px 4px 0px 0px #F14D34"
    }

    onMouseEnter = () => this.setState({hover: true})
    onMouseLeave = () => this.setState({hover: false})

    render() {
        return (
            <NavItem id={this.props.id} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <NavLink href={this.props.href} style={this.state.hover ? {...this.style, ...this.styleHover} : this.style}>
                    {this.props.text}
                </NavLink>
            </NavItem>
        )
    }

}