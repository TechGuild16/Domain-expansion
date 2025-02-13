import {
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ContactInfo = () => {
  return (
    <Container className="py-5">
      <Row className="g-4 justify-content-center">
        <Col md={4}>
          <Card className="text-center mycarder border-0 shadow-sm">
            <Card.Body>
              <div
                className="rounded-circle bg-light mx-auto d-flex align-items-center justify-content-center"
                style={{ width: "70px", height: "70px" }}
              >
                <FontAwesomeIcon icon={faClock} size="2x" />
              </div>
              <Card.Title className="mt-3">Office Hours</Card.Title>
              <Card.Text>
                Monday – Friday: 9:00 AM – 6:00 PM <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center mycarder border-0 shadow-sm">
            <Card.Body>
              <div
                className="rounded-circle bg-light mx-auto d-flex align-items-center justify-content-center"
                style={{ width: "70px", height: "70px" }}
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </div>
              <Card.Title className="mt-3">Email Us</Card.Title>
              <Card.Text>
                <a
                  href="mailto:letstalk@domainexpansion.in"
                  className="text-decoration-none"
                >
                  letstalk@domainexpansion.in
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}> 
          <Card className="text-center mycarder border-0 shadow-sm">
            <Card.Body>
              <div
                className="rounded-circle bg-light mx-auto d-flex align-items-center justify-content-center"
                style={{ width: "70px", height: "70px" }}
              >
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </div>
              <Card.Title className="mt-3">Call Now</Card.Title>
              <Card.Text>Coming Soon</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
