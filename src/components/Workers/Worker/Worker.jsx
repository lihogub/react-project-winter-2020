import React from "react";
import styles from "./Worker.module.css";

export default class Worker extends React.Component {

imageStyle = {
    width: '100%',
    height: '100%',
    maxHeight: '280px',
    maxWidth: '280px'
}

cardStyle = {
    maxWidth: '280px',
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

    render() {
        return (
            <div style={this.cardStyle}>
                <div className='col m-0 p-0'>
                    <div className='row justify-content-center m-0 p-0' style={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'stretch'
                    }}>
                        <img
                            className='mb-3'
                            style={this.imageStyle}
                            src={this.props.imageUrl}
                            alt='worker'
                        />
                    </div>
                    <div style={this.titleStyle}>
                        {this.props.name}
                    </div>
                    <div className={styles.description}>
                        {this.props.job}
                    </div>
                    {
                        this.props.team &&
                        <div className={styles.team}>
                            {this.props.team}
                        </div>
                    }
                </div>
            </div>
        )
    }

}