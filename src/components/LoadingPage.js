import React, { Component } from 'react'
import {FullPage} from '../styles/FullPage'
import {Heading} from '../styles/Heading'

export default class LoadingPage extends Component {
    render() {
        const headingString = "Loading...";
        const ar = headingString.split('');

        const animatedHeading = ar.map((letter,index)=>{
            return(
            <span className={`ourproducts-anim-${index+1}`}>{letter}</span>);
        });

        return (
            <FullPage className="pt-neg-5 my-neg-5">

                <Heading className="my-neg-5">
                    {animatedHeading}
                </Heading>

                <br/>

                <h1 className="h1 text-center my-2 py-2 cart-anim">
                    <span ><i  className="fas fa-cart-plus "></i></span>
                </h1>

            </FullPage>
        )
    }
}



