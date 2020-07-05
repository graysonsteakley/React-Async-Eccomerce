import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class CartItem extends Component {
    render() {
        const {category, description, total, id, image, price, title, count} = this.props.product;
        return (
            <ProductConsumer>
            {value=>{
                  return(
            <CartItemWrapper className="row my-2 text-capitalize text-center">
                <div className="col-10  col-lg-2">
                    <Link to="/details" onClick={()=>value.setProductDetails(id)}>
                    <img src={image} style = {{width: '5rem', height: '5rem'}} alt="Product"
                    className="img-fluid"/>
                    </Link>
                </div>
                <div className="col-10 h5 col-lg-2">
                    <span className="d-lg-none">Product :</span>
                    {title}
                </div>
                <div className="col-10 h3 col-lg-2">
                    <span className="d-lg-none">Price :</span>
                    ${price.toFixed(2)}
                </div>

                <div className="col-10 col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <p className="btn btn-red btn-black mx-1" onClick={()=>value.decrementProduct(id)}>
                            <i className="fa fa-minus"></i>
                        </p>
                        <p className="btn count mx-1">
                            {count}
                        </p>
                        <p className="btn btn-blue mx-1" onClick={()=>value.incrementProduct(id)}>
                            <i className="fa fa-plus" ></i>
                        </p>

                </div>
            </div>
                    
           


            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>value.removeProduct(id)}>
                    <i style={{fontSize:'3rem', color:'red', cursor:''}} className="fas fa-trash"></i>
                </div>
                </div> 


            <div className="col-10 h3 col-lg-2">
                <p className="d-lg-none">Price :</p>
                ${total.toFixed(2)}
            </div>


              
            </CartItemWrapper>
                  )
                }
            }
            </ProductConsumer>

 

        )
    }
}


const CartItemWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-around;
    align-items: center;
    

    .btn-blue{
        
        padding: 0.75rem 1rem;
        border-radius: 10rem;
        background-color: var(--mainBlue);
        &:hover{

            background-color: var(--lightBlue);
        }

    }

    .btn-red{
        
        padding: 0.75rem 1rem;
        border-radius: 100rem;
        background-color: #DB7093;
        &:hover{

            background-color: pink;
        }

    }

    .count{
        font-size: 2rem;
        color: orange;
        font-weight: bold;
    }

    `;