export class Logic {
    constructor(){
        this.products = [
            {ProductId:1, ProductName: 'Laptop', 
CategoryName: 'Electroics', Manufacturer: 'HP', 
Price:200000},
            {ProductId:2, ProductName: 'Iron',
 CategoryName: 'Electrical', Manufacturer: 'Bajaj',
 Price:2000},
            {ProductId:3, ProductName: 'Biscuts',
 CategoryName: 'Food', 
Manufacturer: 'Parle', Price:20},
            {ProductId:4, ProductName: 'Router', 
CategoryName: 'Electroics', Manufacturer: 'IBM', 
Price:5000},
            {ProductId:5, ProductName: 'Mixer', 
CategoryName: 'Electrical', Manufacturer: 'TATA',
 Price:2000},
            {ProductId:6, ProductName: 'Lays', 
CategoryName: 'Food', Manufacturer: 'Parle', 
Price:1000}
        ];
    }

    getProducts(){
        return this.products;
    }
    addProduct(prd) {
        this.products.push(prd);
        return this.products;
    }
}