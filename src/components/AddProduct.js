import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddProduct extends Component {

    state = {
        id: 0,
        name: '',
        price: 0,
        brand: '',
        stock: 0,
    }

    onChange = (w) => this.setState({[w.target.name]: w.target.value});

    onSubmit = (w) => {
        w.preventDefault();

        this.props.addProduct(this.state);

        this.setState({id: 0,
            name: '',
            price: 0,
            brand: '',
            stock: 0,})
    }

    render() {
        return (
            <div class="container">
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input class="form-control" id="exampleFormControlInput1" type="text" 
                        name="name" 
                        value={this.state.name}
                        onChange={this.onChange}/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Brand</label>
                    <input class="form-control" id="exampleFormControlInput1" type="text" 
                        name="brand" 
                        value={this.state.brand}
                        onChange={this.onChange}/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Price</label>
                    <input onKeyDown="return false" class="form-control" id="exampleFormControlInput1" type="number" 
                        name="price"    
                        min="1" max="9999"
                        onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() }
                        value={this.state.price}
                        onChange={this.onChange}/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Stock</label>
                    <input onKeyDown="return false" class="form-control" id="exampleFormControlInput1" type="number" 
                        name="stock"    
                        min="1" max="9999"
                        onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() }
                        value={this.state.stock}
                        onChange={this.onChange}/>
                </div>
                <div class="form-group">
                    <button type="submit" value="submit" className="btn btn-success">Add</button>
                </div>
                </form>
            </div>
        )
    }
}

// Proptypes
AddProduct.propTypes = {
    addProduct: PropTypes.object.isRequired
}

export default AddProduct
