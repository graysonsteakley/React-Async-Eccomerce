import styled from 'styled-components'


export const FullPage = styled.div`

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80vh;
    background-color: var(--mainWhite);

    span{
        font-size: 4rem;
    }

    .cart-anim{
        animation: cartAnim 3s infinite linear;
    }

    i {
        font-size: 10rem;
        /* color: 
         */
        color: cyan;
    }
`;