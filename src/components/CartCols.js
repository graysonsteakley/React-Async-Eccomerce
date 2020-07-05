import React, { Component } from 'react'
import styled from 'styled-components'
import {HeadingSmallest} from '../styles/Heading'

export default class CartCols extends Component {
    render() {
       
        return (

                <CartItemWrapper className="row my-2 text-capitalize ">
                    
                                <div className=" ">
                                    <HeadingSmallest className="text-uppercase">products</HeadingSmallest>
                                </div>
                                <div className=" ">
                                    <HeadingSmallest className="text-uppercase">Item Name</HeadingSmallest>
                                </div>
                                <div className=" ">
                                    <HeadingSmallest className="text-uppercase">price</HeadingSmallest>
                                </div>
                                <div className=" ">
                                    <HeadingSmallest className="text-uppercase">quantity</HeadingSmallest>
                                </div>
                                <div className=" ">
                                    <HeadingSmallest className="text-uppercase">remove</HeadingSmallest>
                                </div>
                                <div className=" ">
                                    <HeadingSmallest className="text-uppercase">total</HeadingSmallest>
                                </div>
                      
                </CartItemWrapper>
  
    
      
        )
    }
}


const CartItemWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-around;
    align-items: center;
    flex-direction:row;

`;