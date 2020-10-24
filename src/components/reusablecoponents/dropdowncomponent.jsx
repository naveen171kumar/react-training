import React, { Component } from 'react';
class DropDownComponent extends Component {
    constructor(props) {
        super(props);

    }
    handleChange = (evt) => {
        // selectedValue is a props object
        // that will be used to pass the 'value'
        // of the selected <option>
        // to the parent component
        // provided the parent component
        // subscribe to the selectedValue prop type
        this.props.selectedValue(evt.target.value);
    }
    // value attribute of <select> represnt the value of the selected 
    // options
    render() {
        return (
            <select className="form-control" value={this.props.data}
                onChange={this.handleChange.bind(this)}>
                <option>Select Data</option>
                {
                    this.props.dataSource.map((value, idx) => (
                        <option key={idx} value={value}>{value}</option>
                    ))
                }
            </select>
        );
    }
}

export default DropDownComponent;