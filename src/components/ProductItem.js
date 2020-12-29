import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class ProductItem extends Component {
    render() {
        let productName = this.props.product.name
        const url = 'https://www.google.cl/maps/search/'+ productName +'/@-33.4601918,-70.7172101,11z/data=!3m1!4b1'
        return (
            <div className="container center-items">
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">{this.props.product.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">$ {this.props.product.price}</li>
                    <li class="list-group-item">{this.props.product.brand}</li>
                    <li class="list-group-item">{this.props.product.stock} u.</li>
                </ul>
                <a href={url} class="btn btn-success">Find Product</a>
            </div>
            </div>
        )
    }
}

// Proptypes
ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}




export default ProductItem
