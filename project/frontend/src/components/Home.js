import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">New Order Component</Col>
                    <Col xs="auto">Best 10 Companies Component</Col>
                </Row>
            </Container>
        );
    }
}