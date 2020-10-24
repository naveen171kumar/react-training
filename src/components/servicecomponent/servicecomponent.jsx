import React, { Component } from 'react';
import {HttpService} from './../../services/httpservice'
class ServiceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products:[],
            errorMessage: ''    
        };

        this.serv =  new HttpService();
    }


    componentDidMount =()=>{
        this.loadData();
    }

    // call the method from the HttpService class 
    loadData=()=> {
        // subscribe to the promise
        this.serv.getData().then((response)=> {
              this.setState({products: response.data});  
        }).catch((error) => {
            this.setState({errorMessage: error});
        });
    }


    save=()=> {
        let prd = {
            ProductRowId:0,
            ProductId: 'Prd003',
            ProductName: 'Mobile',
            CategoryName: 'Electronics',
            Manufacturer: 'Nokia',
            Description: '100GB',
            BasePrice: 20000
        };
        this.serv.postData(prd)
        .then((response)=> {
            console.log(`Received Data ${JSON.stringify(response.data)}`);
        })
        .catch((error)=> {
            this.setState({errorMessage: error});
        });
    }

    render() { 
        return (
            <div className="container">
                <input type="button" value="Post Data"
                   onClick={this.save.bind(this)} 
                className="btn btn-success"/>
                <br/>
                <input type="button" value="Get Data"
                 onClick={this.loadData.bind(this)}
                className="btn btn-warning"/>
                <hr/>
                <div>
                  ${JSON.stringify(this.state.products)} 
                </div>
                <hr/>
                <div>
                ${this.state.errorMessage} 
              </div>
            </div>
        );
    }
}
 
export default ServiceComponent;