import React, { Component } from 'react'
import {Heading} from '../styles/Heading'
import {ProductConsumer} from '../context'
import LoadingPage from './LoadingPage'
import Product from './Product'


export default class ProductList extends Component {

    render() {

        const headingString = "Our Products";
        const ar = headingString.split('');

        const animatedHeading = ar.map((letter,index)=>{
            if(index!==2){
            return(
            <span key={index} className={`ourproducts-anim-${index+1}`}>{letter}</span>);}
            else{
                return(
                    <span key={index} className={`ourproducts-anim-${index+1}`}>{letter}&nbsp;</span> 
                );
            }
        });

        return (
            <React.Fragment>
            
                <div className="py-5">

                <div className="container">
                    {/*THE PRODUCTS ROW  */}
                    <Heading className="text-center">
                        {animatedHeading}
                    </Heading>
                    <div className="row">
                        <ProductConsumer>
                            {(value)=>{
                                if(value.products.length === 0){
                                    return <LoadingPage/>
                                }
                                else{
                                return value.products.map(product=>{
                                    return <Product product={product} key={product.id}></Product>
                                })}
                            }}
                        </ProductConsumer>
                    </div>
                </div>

                </div>

                {/* // <Product /> */}
            </React.Fragment>
        )
    }
}
