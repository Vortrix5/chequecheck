import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Form, FormControl, Button, Jumbotron } from 'react-bootstrap'

export default class Main extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <LinkContainer to="/">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            {' uSocial'}
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                        <FormControl type="text" placeholder="Password" className="mr-sm-2" />
                        <LinkContainer to="/error"><Button variant="outline-primary">Login</Button></LinkContainer>
                    </Form>
                </Navbar>
            </>
        )
    }
}