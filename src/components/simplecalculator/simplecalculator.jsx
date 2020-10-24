import React, { Component } from 'react';

class SimpleCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            num1:0,
            num2:0,
            result:0
        }
    }
    // evt is event that is occured on HTML element
    // num1Change=(evt)=> {
    //     this.setState({num1: evt.target.value});
    // }
    // num2Change(evt) {
    //     this.setState({num2: evt.target.value});
    // }

    handleInputChange=(evt)=> {
       // update all state properties based on 
       // 'name' received from HTML elements
       // [evt.target.name]: return the array of elements 
       // based on 'name' attribute
       // setState() method will update the state property
       // by matching its name with 'name' of element
       this.setState({[evt.target.name]:evt.target.value}); 
       
       // change for num1
       // this.setState({num1: this.target.value})
          // change for num2
       // this.setState({num2: this.target.value})
    }



    // ES 6 function expression
    add=()=> {
        let result = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState({result:result});
    }
    subst=()=> {
        let result = parseInt(this.state.num1) - parseInt(this.state.num2);
        this.setState({result:result});
    }
    render() { 
        return (
            <div className="container">
              <h2>Simple Calculator</h2>
              <div className="form-group">
                <label htmlFor="">Num 1</label>
                <input type="text" className="form-control"
                  value={this.state.num1}
                  name ="num1"
                  onChange={this.handleInputChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Num 2</label>
                <input type="text" className="form-control"
                  value={this.state.num2}
                  name="num2"
                  onChange={this.handleInputChange.bind(this)}
                />
              </div>
              <div className="form-group">
              <label htmlFor="">Result</label>
              <input type="text" className="form-control"
                value={this.state.result} readOnly
              />
            </div>
              <div className="form-group">
                <input type="button" value="Add" className="btn btn-success"
                  onClick={this.add.bind(this)}/>
                <input type="button" value="Substract" className="btn btn-danger"
                onClick={this.subst.bind(this)}/>
              </div>
            </div>
        );
    }
}
 
export default SimpleCalculator;