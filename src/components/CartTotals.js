import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'

export default class CartTotals extends Component {
    render() {
        // const CartArr = [...this.props.cart];
        return (
            <React.Fragment>
                <ProductConsumer>
                    {
                        value =>{
                            const tax = value.tax;
                            const SubTotal = value.subtotal;
                            const FinalTotal = value.finaltotal;

                            return(
                                <CartBottomWrapper>
                                    <CartTotalWrapper>
                                        <h1 className= "sectionDownAnim-1 subtotal">
                                            Subtotal: ${SubTotal.toFixed(2)} <br/>
                                        </h1>
                                        <h1 className= "sectionDownAnim-2 tax">
                                            Tax: ${tax.toFixed(2)} <br/>
                                        </h1>
                                        <h1 className= "sectionDownAnim-3 finaltotal">
                                            Total: ${FinalTotal.toFixed(2)} <br/>
                                        </h1>
                                    </CartTotalWrapper>
                                </CartBottomWrapper>
                            )
                        }
                    }
                </ProductConsumer>
            </React.Fragment>

        )
    }
}

const CartBottomWrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 0 2rem;
    margin-bottom: 3rem;

`;


const CartTotalWrapper = styled.div`

    width: 100%;
    height: auto;
    margin-top: 2rem;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;


    .subtotal{
        font-family: 'Roboto-Condensed', sans-serif;
        font-size: 4rem;
        letter-spacing: 1.5;
        line-height: 1.5;
        color: lightgray;

    }

    .tax{
        font-family: 'Quicksand', sans-serif;
        font-size: 4rem;
        letter-spacing: 1.5;
        line-height: 1.5;
        color: #999;

    }

    .finaltotal{
        font-family: 'Sigmar One', cursive;
        font-size: 4rem;
        letter-spacing: 1.5;
        line-height: 1.5;
        color: limegreen;

    }

`;