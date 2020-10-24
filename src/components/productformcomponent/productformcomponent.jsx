import React, { Component } from 'react'
import { Catergories, Manufacturers } from './../../models/constants';
import { Logic } from '././../../models/logic';
import DropDownComponent from './../reusablecoponents/dropdowncomponent';
import ValidationSummaryComponent from './../reusablecoponents/validationsummarycomponent';

class ProductFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductId: 0,
            ProductName: '',
            CategoryName: '',
            Manufacturer: '',
            Price: 0,
            categories: Catergories,
            manufacturers: Manufacturers,
            products: [],
            columnHeaders: [],
            IsProductIdValid: true,
            IsProductNameValid: true,
            IsCategoryNameValid: true,
            IsManufacturerValid: true,
            IsPriceValid: true,
            IsFormValid: false,
        }
        this.logic = new Logic();
    }

    // the lifecycle method of component that will be executed 
    // after the render() method is completing its 
    // execution
    componentDidMount = () => {
        let prds = this.logic.getProducts();

        // read first record from array and read its schema
        var firstRecord = prds[0];
        var recProperties = Object.keys(firstRecord);
        // iterate over the properties and add in colunHeaders

        this.setState({ columnHeaders: recProperties }, () => {

        });
        // async method will executes before
        // the product is completely excuted
        // to wait for products to update
        // add a callback to setState
        this.setState({ products: prds }, () => {
            console.log(JSON.stringify(this.state.products));
        });

    }


    handleChanges = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value }, () => { });
        this.validateForm(evt.target.name, evt.target.value);
    }

    validateForm(name, value) {
        if (name === "ProductId") {
            var isexists = this.state.products.some(p => (p.ProductId === parseInt(value)));
            if (isexists || parseInt(value) < 0) {
                this.setState({ IsProductIdValid: false });
                this.setState({ IsFormValid: false });
                this.setState({ ProductIdValidationMsg: "ProductId must be unique" });
            }
            else {
                this.setState({ IsProductIdValid: true });
                this.setState({ IsFormValid: true });
            }
        }
        if (name === "ProductName") {
            if (!/^[A-Z].*/.test(value)) {
                this.setState({ IsProductNameValid: false });
                this.setState({ IsFormValid: false });
                this.setState({ ProductNameValidationMsg: "Product Name must start from Upper Case Character" });
            } else {
                this.setState({ IsProductNameValid: true });
                this.setState({ IsFormValid: true });
            }
        }
        if (name === "CategoryName") {
            if (value === "Select Data") {
                this.setState({ IsCategoryNameValid: false });
                this.setState({ IsFormValid: false });
                this.setState({ CategoryNameValidationMsg: "The Category Name must be selected" });
            }
            else {
                this.setState({ IsCategoryNameValid: true });
                this.setState({ IsFormValid: true });
            }
        }
        if (name === "Manufacturer") {
            if (value === "Select Data") {
                this.setState({ IsManufacturerValid: false });
                this.setState({ IsFormValid: false });
                this.setState({ ManufacturerValidationMsg: "The Manufacturer Name must be selected" });
            }
            else {
                this.setState({ IsManufacturerValid: true });
                this.setState({ IsFormValid: true });
            }
        }

        if (name === "Price") {
            if (this.state.CategoryName === "Electronics") {
                if (parseInt(value) < 2000) {
                    this.setState({ IsPriceValid: false });
                    this.setState({ IsFormValid: false });
                    this.setState({ priceValidationMsg: "Electronics, should not be less than 2000" });
                }
                else {
                    this.setState({ IsPriceValid: true });
                    this.setState({ IsFormValid: true });
                }
            }
            else if (this.state.CategoryName === "Electrical") {
                if (parseInt(value) < 50) {
                    this.setState({ IsPriceValid: false });
                    this.setState({ IsFormValid: false });
                    this.setState({ priceValidationMsg: "Electrical, should not be less than 50" });
                }
                else {
                    this.setState({ IsPriceValid: true });
                    this.setState({ IsFormValid: true });
                }
            }
            else if (this.state.CategoryName === "Food") {
                if (parseInt(value) < 5) {
                    this.setState({ IsPriceValid: false });
                    this.setState({ IsFormValid: false });
                    this.setState({ priceValidationMsg: "Food, should not be less than 5" });
                }
                else {
                    this.setState({ IsPriceValid: true });
                    this.setState({ IsFormValid: true });
                }
            }
            else {
                this.setState({ IsPriceValid: true });
                this.setState({ IsFormValid: true });
            }
        }

    }

    clear = () => {
        this.setState({ ProductId: 0 });
        this.setState({ ProductName: '' });
        this.setState({ CategoryName: '' });
        this.setState({ Manufacturer: '' });
        this.setState({ BasePrice: 0 });
    }
    getSelectedCategory = (val) => {
        this.setState({ CategoryName: val }, () => { });
        this.validateForm("CategoryName", val);

    }
    getSelectedManufacturer = (val) => {
        this.setState({ Manufacturer: val }, () => { });
        this.validateForm("Manufacturer", val);
    }
    save = () => {
        // to read product values and update it in products array
        var prd = {
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            CategoryName: this.state.CategoryName,
            Manufacturer: this.state.Manufacturer,
            Price: this.state.Price
        };
        let prds = this.logic.addProduct(prd);
        this.setState({ products: prds }, () => {
            console.log(JSON.stringify(this.state.products));
        });
    }
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Product Id<span style={{ color: "red", fontSize: "30px" }}>&#42;</span></label>
                        <input type="text" value={this.state.ProductId}
                            name="ProductId"
                            className="form-control" onChange={this.handleChanges.bind(this)} />
                        <ValidationSummaryComponent data={this.state.IsProductIdValid} ValidationMsg={this.state.ProductIdValidationMsg}></ValidationSummaryComponent>
                    </div>
                    <div className="form-group">
                        <label>Product Name<span style={{ color: "red", fontSize: "30px" }}>&#42;</span></label>
                        <input type="text" value={this.state.ProductName}
                            name="ProductName"
                            className="form-control" onChange={this.handleChanges.bind(this)} />
                        <ValidationSummaryComponent data={this.state.IsProductNameValid} ValidationMsg={this.state.ProductNameValidationMsg}></ValidationSummaryComponent>
                    </div>
                    <div className="form-group">
                        <label>Category Name<span style={{ color: "red", fontSize: "30px" }}>&#42;</span></label>
                        <DropDownComponent data={this.state.CategoryName}
                            dataSource={this.state.categories}
                            selectedValue={this.getSelectedCategory.bind(this)}
                        ></DropDownComponent>
                        <ValidationSummaryComponent data={this.state.IsCategoryNameValid} ValidationMsg={this.state.CategoryNameValidationMsg}></ValidationSummaryComponent>
                    </div>
                    <div className="form-group">
                        <label>Manufacturer Name<span style={{ color: "red", fontSize: "30px" }}>&#42;</span></label>
                        <DropDownComponent data={this.state.Manufacturer}
                            dataSource={this.state.manufacturers}
                            selectedValue={this.getSelectedManufacturer.bind(this)}
                        ></DropDownComponent>
                        <ValidationSummaryComponent data={this.state.IsManufacturerValid} ValidationMsg={this.state.ManufacturerValidationMsg}></ValidationSummaryComponent>
                    </div>
                    <div className="form-group">
                        <label>Base Price<span style={{ color: "red", fontSize: "30px" }}>&#42;</span></label>
                        <input type="text" value={this.state.Price}
                            name="Price"
                            className="form-control" onChange={this.handleChanges.bind(this)} />
                        <ValidationSummaryComponent data={this.state.IsPriceValid} ValidationMsg={this.state.priceValidationMsg}></ValidationSummaryComponent>
                    </div>
                    <div className="form-group">
                        <input type="button" value="Clear" className="btn btn-warning"
                            onClick={this.clear.bind(this)} />
                        <input type="button" value="Save" className="btn btn-success"
                            disabled={!this.state.IsFormValid} onClick={this.save.bind(this)} />

                    </div>
                </form>
                <br />
                <table className="table table-bordered table-striped table-dark">
                    <thead>
                        <tr>
                            {
                                this.state.columnHeaders.map((col, idx) => (
                                    <th key={idx}>{col}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((prd, idx) => (
                                <tr key={idx}>
                                    {
                                        this.state.columnHeaders.map((col, i) => (
                                            <td key={i}>{prd[col]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {/*   <table className="table table-bordered table-striped table-dark">
                 <thead>
                   <tr>
                     <th>
                       Product Id
                     </th>
                     <th>
                     Product Name
                   </th>
                   </tr>
                 </thead>
                 <tbody>
                 {
                     this.state.products.map((prd,idx) => (
                        <tr key={idx}>
                        <td>{prd.ProductId}</td>
                        <td>{prd.ProductName}</td>
                      </tr> 
                     ))
                 }
                   
                 </tbody>
              </table>*/}
            </div>
        );
    }
}

export default ProductFormComponent;