import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Worker.module.css";

export default class Worker extends React.Component {

imageStyle = {
    maxWidth: '100%',
    height: 'auto'
}

cardStyle = {
    maxWidth: '280px',
    backgroundColor: '#AAFFF3',
    textAlign: 'left',
    marginBottom: '70px'
}

titleStyle = {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '1.37',
    display: 'inline-block',
    marginBottom: '5px'
}

// textStyle = {
//     padding: '0',
//     fontWeight: '500',
//     fontSize: '12px',
//     lineHeight: '1.37',
//     marginBottom: '5px'
// }

    render() {
        return (
            <div style={this.cardStyle}>
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
                    <div /*style={this.textStyle}*/ className={styles.description}>
                        {this.props.job}
                    </div>
                </div>
            </div>
        )
    }

}