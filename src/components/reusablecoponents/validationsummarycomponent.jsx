import React, { Component } from 'react';


export default class ValidationSummaryComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="alert alert-danger"
                hidden={this.props.data}>
                {this.props.ValidationMsg}
            </div>
        );
    }
}