import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductWrapper} from '../styles/ProductWrapper'
import {ProductConsumer} from '../context'


export default class Product extends Component {


    render() {
        const {category, description, id, image, price, title} = this.props.product;

        return (
          <ProductWrapper className="col-9 test mx-auto col-md-6 col-lg-3 my-3 d-flex justify-content-space-between">
          <div className="card">
            <ProductConsumer>
                {(value)=>(
                    <div onClick={()=>value.setProductDetails(id)} className="img-container my-auto p-5" >
                        <Link to = "/details">
                            <img src={image} alt="product" style={{width:"50%", transform:"translateX(50%)"}} className="mx-auto card-img-top"/>
                        </Link>
                        <button className="cart-btn pt-neg-3" disabled={value.findInCart(id) ? true : false} 
                        onClick={()=>{
                            value.addToCart(id);
                            // value.openModal(id);
                        }}>{value.findInCart(id) ? (<p className="text-capitalize mb-0" disabled>in cart</p>) : (<i className="fas fa-cart-plus"></i>) }
                        </button>
                    </div>
                )}
                
            </ProductConsumer> 

              {/* Card footer */}
              <div className="card-footer d-flex align-items-center justify-content-between">
                  <TitleWrapper className="cardtitle align-self-start mb-0">
                      {title}
                  </TitleWrapper>
                  <h5 className="text-blue font-italic mb-0">
                      <span className="mr-1 h5">$</span>
                      {price.toFixed(2)}
                  </h5>
              </div>
          </div>
      </ProductWrapper>
        )
    }


}

const TitleWrapper = styled.p`

    width: 70%;
    height: auto;
    font-size: 1.1rem;

`;
