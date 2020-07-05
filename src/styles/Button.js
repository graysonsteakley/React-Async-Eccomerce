import styled from 'styled-components'


export const Button = styled.button`

    padding: 1rem 2rem;
    
    color: var(--lightBlue);
    border: 1px solid var(--lightBlue);
    background-color: transparent;
    border-radius: 5px;
    transition: all 0.2s;
    

    i{
        font-size: 3rem;
    }
    
    span{
        font-family: 'Sigmar One', cursive;
        font-size: 2rem;
    }

    &:focus{
        outline: none;
        background-color: var(--darkGreen);
    }

    &:hover{
        background-color: var(--lightBlue);
        color: var(--darkBlue);
    }

    &:active{
        background-color: var(--mainGreen);
        color: var(--darkBlue);
    }


    .cart-btn{

    }

`;