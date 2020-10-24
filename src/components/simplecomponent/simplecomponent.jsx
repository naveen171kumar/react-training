// import react object model

import React, {Component} from 'react';


// the name of the component MUST BE Camel Case
class SimpleComponent extends Component {
    // the constructor with props means
    // it links with parent in the component tree(?)
  constructor(props) {
    super(props);  
    this.state = {
        pname: 'Mahesh R. Sabnis'
    };
  }
  // return HTML DOM to be rendered
  render() {
    return (
        <div>
           <h1>The Simple Component</h1>
           <div>{this.props.msg}</div>
           <br/>
         <div>{this.props.data}</div>
         <br/>
         <FirstChildComponent name={this.state.pname}></FirstChildComponent>
        </div>
    );
  }
}

class FirstChildComponent extends Component {
    render(){
        return (
            <div>
              <h2>The First Child Component</h2>
              <div>{this.props.name}</div>
            </div>
        );
    }
}

// export component so that it can be imported
export default SimpleComponent;