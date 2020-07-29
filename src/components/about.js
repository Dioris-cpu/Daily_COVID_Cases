import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row>
        <Col>
          {/* <h5>Social Distancing Tips</h5>
          <p>
            Before going out, know and follow the guidance from local public
            health authorities where you live. Shop by mail rather than
            in-person when possible. Disinfect mail-order retail packages with
            an alcohol-based sanitizer spray or wipe as you bring them into your
            house.
          </p> */}
        </Col>
        <Col xs={6}>
          <h5> COVID Cases Continue to Spread</h5>
          <p>
            Information from the ongoing COVID-19 pandemic suggests that this
            virus is spreading more efficiently than influenza, but not as
            efficiently as measles, which is highly contagious. In general, the
            more closely a person interacts with others and the longer that
            interaction, the higher the risk of COVID-19 spread. The graph below
            displays the number of daily cases in the US.
          </p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={5}></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default About;
