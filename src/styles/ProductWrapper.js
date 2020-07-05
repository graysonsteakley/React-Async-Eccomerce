import styled from 'styled-components'

export const ProductWrapper = styled.div`




.card{
    border-color: transparent;
    transition: all 0.5s linear;
    position: relative;

    overflow: hidden;
    
}

.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
}

&:hover{

    .card{
        border: 0.04rem solid rgba(0,0,128,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,128,0.2);
    }

    .card-footer{
        background: rgba(247,247,247);
    }

}


.img-container{
    
  
}

.card-img-top{
    
    transition: all 0.5s;
}


.card:hover .card-img-top{
    transform: scale(1.2);
}

.card
:hover .cart-btn{
    transform: translate(-5%,-14%);
}

.cart-btn{
    transition: all 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.2rem 2rem 0 2rem;
    background: var(--lightBlue);
    border:none;
    color: var(--mainWhite);
    font-size: 5rem;
    border-radius: 0 0 0.5rem 0;
    transform: translate(-100%,-100%);
}

.cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}

`;