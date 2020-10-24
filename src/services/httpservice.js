import axios from 'axios';

export class HttpService {
    constructor(){
        this.url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
    }

    getData(){
        let response =  axios.get(this.url);
        return response; 
    }

    postData(prd){
        let response = axios.post(this.url, prd, {
            'Content-Type': 'application/json' 
        });
        return response;
    }
    putData(prd){
        let response = axios.put(`${this.url}/${prd.ProductRowId}`, prd, {
            'Content-Type': 'application/json'
        });
        return response;
    }
    deleteData(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }
} 