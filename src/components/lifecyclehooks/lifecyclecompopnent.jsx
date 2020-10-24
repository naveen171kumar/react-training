import React, { Component } from 'react';
class LifeCycleParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            pValue:0
        };
    }
    componentDidMount=()=> {
        console.log(`Parent component is mounted`);
         
    }
    componentWillMount=()=>{
        console.log(`Parent component will mounted`);
    }
    componentDidUpdate=()=> {
        console.log(`Parent component is updated`);
    }
    render() { 
        if(this.state.pValue % 2 === 0) {
            return(
                <div className="container">
                   <h1>The Paret Component</h1>
                   <input type="text" value={this.state.pValue}
                    onChange={(evt)=> this.setState({pValue: evt.target.value})}/>
                    <MyFirstChildComponent data={this.state.pValue}></MyFirstChildComponent>
                </div>
            );    
        } else {
            return(
                <div className="container">
                   <h1>The Paret Component</h1>
                   <input type="text" value={this.state.pValue}
                    onChange={(evt)=> this.setState({pValue: evt.target.value})}/>
                    <MySecondChildComponent data={this.state.pValue}></MySecondChildComponent>
                </div>
            );   

        }
    }
}

class MyFirstChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            x1:0,
            y1:0
        };
    }
    grabMousePosition=(event)=>{
        this.setState({x1: event.clientX});
        this.setState({y1: event.clientY});
        console.log(`x = ${this.state.x1}  y = ${this.state.y1}`);
    }
    componentDidMount=()=> {
        console.log(`My First Child component is mounted`);
        //attach a mousemove event to the window object
        window.addEventListener('mousemove', this.grabMousePosition); 
    }
    componentWillMount=()=>{
        console.log(`My First Child component will mounted`);
    }
    componentDidUpdate=()=> {
        console.log(`My First Child component is updated`);
    }
    // cleanup code here events, Ajax calls, any other resources
    componentWillUnmount=()=> {
        console.log(`My First Child component is unmounted`);
        window.removeEventListener('mousemove', this.grabMousePosition);
    }

    render() { 
        return (
            <div className="container">
                <h2>The First Child Component</h2>
                <div>Value Received from Parent {this.props.data}</div>
                <br/>
                <div>
                   X Position -- {this.state.x1} &&& Y Position -- {this.state.y1}
                </div>
            </div> 
        );
    }
}
 
class MySecondChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            x:10
        };
    }
    componentDidMount=()=> {
        console.log(`My Second Child component is mounted`);
         
    }
    componentWillMount=()=>{
        console.log(`My Second Child component will mounted`);
    }
    componentDidUpdate=()=> {
        console.log(`My Second Child component is updated`);
    }
    componentWillUnmount=()=> {
        console.log(`My Second Child component is unmounted`);
    }
    render() { 
        return (  
             <div className="container">
               <h2>The My Second Child Component</h2>
               <div>
                  {this.props.data}
               </div>
             </div>   
        );
    }
}
 
  
export default LifeCycleParentComponent;