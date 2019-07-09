import React from 'react'
import { Form, Col, Button, Alert } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        this.registerUser(
            this.state.email,
            this.state.username,
            this.state.password,
            this.state.address
        );
        event.preventDefault();
    }


    componentDidMount() {
        document.title = 'Sign up';
    }

    registerUser(email, username, password, address) {
        const fetch = require('node-fetch');
        fetch('http://127.0.0.1/signup.php?username=' + username + '&email=' + email + '&password=' + password + '&address=' + address)
            .then(res => res.text())
            .then(body => {
                this.setState({ alreadySigned: true })
            });
    }


    render() {
        return (
            <>
                <div className="row m-0">
                    <div className="col-md-4 pt-5 pl-5 pb-5">
                        <img src="signup.png"></img>
                    </div>
                    <div className="col-md-6 p-5">
                        {this.state.alreadySigned && <Alert key={'danger'} variant={'danger'}>
                            Username already exists!
                        </Alert>}
                        
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control placeholder="Choose a username" name="username" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" name="address" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control name="city" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" name="state" onChange={this.handleChange}>
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control name="zip" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Link to="/error"><Button variant="primary" type="dark" block>
                                Sign me up
                            </Button></Link>
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}