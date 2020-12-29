import React, { Component } from 'react'
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

export class Products extends Component {
    render() {
        return this.props.products.map((product) => (
            <ProductItem key={product.id} product={product}/>
        ));
    }
}

// Proptypes
Products.propTypes = {
    products: PropTypes.array.isRequired
}

export default Products
