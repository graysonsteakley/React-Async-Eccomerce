import React, { Component } from 'react'
import {Heading} from '../styles/Heading'
import {ProductConsumer} from '../context'
import CartItem from './CartItem'
import styled from 'styled-components'
import CartCols from './CartCols'
import CartTotals from './CartTotals'

export default class extends Component {
    render() {
        return (
            <CartWrapper className="">
                <ProductConsumer>
                    { value =>{
                        console.log(value.cart);
                        if(value.cart.length === 0){
                            return (
                                
                                <Position>
                                    <Heading className="mx-auto text-center">Your cart is empty</Heading>
                                    <h1 className="h1 text-center my-2 py-2 cart-anim">
                                        <span ><i  className="fas fa-cart-plus "></i></span>
                                    </h1>
                                </Position>
                            );
                        }
                        else{
                            return value.cart.map((product, index)=>{
                                if(index===0){
                                    return(
                                    <React.Fragment>
                                    <CartCols/>
                                    <CartItem className = "cart-item" key={product.id} product = {product} />
                                    </React.Fragment>
                                    )
                                }
                                return(
                                    <CartItem className = "cart-item" key={product.id} product = {product} />
                                )
                             })
                           }
                        }
                    }
                </ProductConsumer>
                <ProductConsumer>
                    {
                        value =>{
                            if(value.cart.length !== 0){
                                return (
                                    
                                    <CartTotals cart={value.cart}/>
                                );
                            }
                        }
                    }
                </ProductConsumer>
             </CartWrapper>
        
        )
    }
}


const CartWrapper = styled.div`

    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 10rem;
    align-items: center;
    position: relative;


    span{
        display: inline-block;
        font-size: 15rem;
        transform:scale(2.5);
    }

    .cart-item{
        width: 100%;
    }

`;

const Position  = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: red;

`;