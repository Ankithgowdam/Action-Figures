import React, { Component } from 'react';
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from '../context';
import './anim.css'
import logo from '../logo.svg';
export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
               
                    <div className="container">
                    <Title name="one piece action figures"/>
                    
                    <p class="sudo"><b>Looking to shop one piece action figure? You’ve come to the right place! </b> </p>
                       <div className="row">
                         <ProductConsumer>
                             {value=>{
                               return value.products.map(product =>{
                                   return <Product key={product.id} product={product} />;
                               });
                             }}
                         </ProductConsumer>
                       </div>
                       </div> 
                    </div>
            </React.Fragment>
        );
    }
}
