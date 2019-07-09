import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Login extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>Welcome to uSocial</h1>
                <p>
                    A simple website made in a 12 hours hackathon.
                    Please login if you already have an account, or press sign up to join.
  </p>
                <p>
                    <LinkContainer to="/signup">
                        <Button variant="primary">Sign up</Button>
                    </LinkContainer>
                    
                </p>
            </Jumbotron>
        )
    }
}