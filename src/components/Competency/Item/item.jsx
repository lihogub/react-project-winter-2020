import React from "react";
import BackgoundImg from "./../../../res/images/drupal-coder.svg";

export default class CompetencyItem extends React.Component {

    commonStyle = {
        backgroundColor: 'grey',
    }

    imgStyle = {
        backgroundColor: 'red',
        maxHeight: 81,
        maxWidth: 81
    }

    backgroundImgStyle = {
        background: BackgoundImg,
        opacity: 0.3,
    }

    render() {
        return (
            <div className='flex-wrap' style={this.commonStyle}>
                <div className='p-2 bd-highlight'>
                    <div style={this.backgroundImgStyle}>

                    </div>
                    <img style={this.imgStyle} src={this.props.imageUrl}/>
                </div>
                <div className='p-2 bd-highlight' style={this.textStyle}>
                    {this.props.text}
                </div>

            </div>
        )
    }

}