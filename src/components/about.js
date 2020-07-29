import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container>
        <Row>
          <Col></Col>
          <Col xs={6}> (wider)</Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={5}>(wider)</Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
  export default About;
