import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {Button} from '../styles/Button'

export default class Nav extends Component {
    
    render() {



        return (
            <NavWrapper className="navbar-nav navbar-expand-sm navbar-dark d-flex align-items-center px-sm-5">
                <Link to="/" >
                    <img src={logo} width={50} height={50} alt="logo" className="navbar-brand"/>
                </Link>

                <ul className="navbar-nav align-items-center text-center font-weight-bold">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>

                <Link to="/cart" className = "ml-auto py-2">
                    <Button>
                        <span>Your Cart <i className="fas fa-cart-plus"></i></span>
                    </Button>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`

    background-color: var(--darkGreen);
    
    .nav-item{
        font-size: 3rem;
    }



`;

