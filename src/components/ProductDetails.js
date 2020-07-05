import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import {Heading, HeadingSmall, HeadingSmallest} from '../styles/Heading'
import {Button} from '../styles/Button'
import {Link} from 'react-router-dom'

const OrangeButton = styled(Button)`

border-color: orange;
color: orange;

    &:hover{
        background-color: orange;
    }

`;



export default class ProductDetails extends Component {
    render() {
        
        return (
            <ProductConsumer>
                { (value)=>{
                    
                const {category, description, id, image, price, title} = value.productDetail;
                if(typeof price !== 'undefined'){
                return(
                    <DetailsWrapper className="my-neg-5">
                        <div className=" d-flex justify-content-center img-wrapper">
                            <img src={image} style={{width:"40%"}} alt="Product" className="origImg card-img-top rounded image-fluid"/>
                            <img src={image} alt="product shadow" style={{width:"50%"}} className="shadow"/>
                        </div>
                        <div className="right-side-text pr-3">
                            <HeadingSmall className="text-center py-2 my-2 small-text">
                                {title}
                            </HeadingSmall>
                            <HeadingSmallest className="text-center text-muted lead py-2 my-2 smaller-text">
                                {description}
                            </HeadingSmallest>
                            <HeadingSmall style={{fontFamily: "'Quicksand', sans-serif"}}className="text-center py-2 my-2 small-text">
                                Price: $<strong style={{fontSize: '3rem'}}>{price.toFixed(2)}</strong>
                            </HeadingSmall>
                            <ButtonWrapper>
                                <Button className="cart-btn" disabled={value.findInCart(id) ? true : false} 
                                    onClick={()=>{
                                        value.addToCart(id);
                                        // value.openModal(id);
                                    }}>{value.findInCart(id) ? (<span className="text-capitalize mb-0" disabled>in cart</span>) : (<span>Add to cart <i className="fas fa-cart-plus"></i></span>) }
                                </Button>
                                <Link to="/">
                                    <OrangeButton className="cart-btn">
                                        <span className="text-capitalize mb-0 pt-2">Store</span>
                                    </OrangeButton>
                                </Link>
                            </ButtonWrapper>
                        </div>
                    </DetailsWrapper>
                                
                    )
                }
                else{
                    return(
                        <DeadEndWrapper>
                            <Heading className="sectionDownAnim-1">
                                You've reached a dead end.
                            </Heading>
                            <Link to="/">
                                <Heading className="h1 text-center my-2 py-2 sectionDownAnim-2">
                                   Back to the store!<i style = {{fontSize:'20rem'}} className="fas fa-cart-plus "></i>
                                </Heading> 
                            </Link>
                        </DeadEndWrapper>
                    )
                }
                
                
                
                }}
            </ProductConsumer>
        )
    }
}

const DeadEndWrapper= styled.div`


    display: flex;
    width: 100%;
    min-height: 70vh;
    margin-top: 3rem;
    padding: 1rem 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    .big-btn{
        text-decoration: none;

    }


`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    margin-top: 3rem;
    padding: 1rem 2rem;
    justify-content: space-around;
    align-items: center;
`;

const DetailsWrapper = styled.div`
    
    width: 100%;
    min-height: 80vh;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .right-side-text{
        width: 50%;
        margin-right: 4rem;
    }

    .img-wrapper{
        padding: 1rem 0;
        /* box-shadow: 0px 0.5rem 2rem rgba(68, 68, 68, 0.2); */
        position: relative;
    }

    .origImg{
        display: block;
        position: relative;
        z-index: 2;
    }

    .shadow{
        opacity: .6;
        bottom: -10rem;/* amount shadow should extend below main image */
        filter: blur(1.5rem);/* this is the magic part */
        height: 100%;
        left: 2rem;
        position: absolute;
        transform: translateX(50%) scaleX(1.3) scaleY(0.95);/* optional */
        width: 120%;
        z-index: 1;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

`;