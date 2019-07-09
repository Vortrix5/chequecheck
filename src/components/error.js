import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Error extends React.Component {
    render() {
        return (
            <Jumbotron>
                <center>
                <h1>
                    Bad Gateaway: Server is expressing some errors
  </h1>
  <br />
  <h1>
                    Please check later.
  </h1>
  </center>
            </Jumbotron>
        )
    }
}