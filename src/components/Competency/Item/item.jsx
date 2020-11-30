import React from "react";

export default class CompetencyItem extends React.Component {

    imgStyle = {
        backgroundColor: 'red',
        maxHeight: 81,
        maxWidth: 81
    }

    backgroundImgStyle = {
        backgroundColor: 'blue',
        opacity: 0.3,
        maxHeight: 81,
        maxWidth: 81
    }

    render() {
        return (
            <div className=''>
                <div style = {this.imgStyle}>
                    <img src={this.props.imageUrl}/>
                </div>

                <div style = {this.backgroundImgStyle}>
                    <img src={this.props.imageUrl}/>
                </div>

                <div>
                    {this.props.text}
                </div>
            </div>
        )
    }

}