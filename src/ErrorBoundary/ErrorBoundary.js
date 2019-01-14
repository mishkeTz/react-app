import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render() {
        return (
            <div>
                { 
                    this.state.hasError ? 
                        <h1>{this.state.errorMessage}</h1>
                    : 
                        <div>{this.props.children}</div>
                }
            </div>
        )
    } 
}
