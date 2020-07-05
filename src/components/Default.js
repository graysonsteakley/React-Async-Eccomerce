import React, { Component } from 'react'
import {Heading} from '../styles/Heading'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10">
                        <Heading className="text-center mx-auto text-uppercase
                        text-header py-2 text-dark-green">
                            Error <span className="text-danger h1">404&nbsp;</span>
                            Page URL Not Found :(
                        </Heading>
                    </div>
                </div>
            </div>
        )
    }
}
