import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Worker.module.css";

export default class Worker extends React.Component {

imageStyle = {
    maxWidth: '100%',
    height: 'auto'
}

cardStyle = {
    backgroundColor: '#AAFFF3',
    textAlign: 'left',
    marginBottom: '70px'
}

titleStyle = {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '1.37',
    color: '#050c33',
    display: 'inline-block',
    marginBottom: '5px'
}

textStyle = {
    padding: '0',
    color: '#505570',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.37',
    marginBottom: '5px'
}

    render() {
        return (
            <div className='p-3 padding-left-0 padding-right-0' style={this.cardStyle}>
                <div className='col m-0 p-0'>
                    <div className='row justify-content-center m-0 p-0'>
                        <img
                            className='mb-3'
                            style={this.imageStyle}
                            src={this.props.imageUrl}
                            alt='photo'
                        />
                    </div>
                        <div style={this.titleStyle}>
                            {this.props.name}
                        </div>
                        <div style={this.textStyle}>
                            {this.props.job}
                        </div>
                    {/*<div className='row m-0 p-0'>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }

}