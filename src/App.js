import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'
import shop from './shopicon.png'
import shopper from './shopericon.png'
import blog from './blogicon.png'
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";


export class App extends Component {

  state = {
    products: [
      {
        id: 1,
        name: 'rice',
        price: 200,
        brand: 'lider',
        stock: 10,
      },
      {
        id: 2,
        name: 'olive oil',
        price: 300,
        brand: 'belmont',
        stock: 10
      },
      {
        id: 3,
        name: 'lemon juice',
        price: 50,
        brand: 'traverso',
        stock: 10
      }
    ]
  }

  // ADD PRODUCTS
  addProduct = (product) => {

    const newProduct = {
        id: this.state.products.length+1,
        name: product.name,
        price: product.price,
        brand: product.brand,
        stock: product.stock
    }
    
    this.setState({ products: [...this.state.products, newProduct] });
  }

  render() {
    return (
      <body>  
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark container">
          <a class="navbar-brand" href="#">
            <img src={logo} class="d-inline-block align-top logo" alt=""/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="https://site.localshop.cl/inscribetutienda">
                  <img src={shop} class="d-inline-block align-top" alt=""/>
                    Soy Tienda</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="https://site.localshop.cl/shopper">
                  <img src={shopper} class="d-inline-block align-top" alt=""/>
                    Soy Shopper</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="https://localshop.cl/blog">
                  <img src={blog} class="d-inline-block align-top" alt=""/>
                    Blog</a>
                </li>
              </ul>
          </div>
          </nav>
        </header>
        <AddProduct addProduct={this.addProduct} products={this.state.products}/>
        <Products products={this.state.products}/>
      </body>
    )
  }
}

export default App
