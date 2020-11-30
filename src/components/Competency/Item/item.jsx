import React from "react";

export default class CompetencyItem extends React.Component {

    styleObj = {
        backgroundColor: 'red'
    }

    render() {
        return (
            <div className=''>
                <div style = {this.styleObj}>
                    <img src={this.props.imageUrl}/>
                </div>
                <div>
                    {this.props.text}
                </div>
            </div>
        )
    }

}