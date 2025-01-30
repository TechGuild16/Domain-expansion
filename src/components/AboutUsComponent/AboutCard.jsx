// import { Lightbulb, MessageSquare, Trophy, User } from "lucide-react";
import {
  faCommentDots,
  faLightbulb,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const contactData = [
  {
    icon: faLightbulb,
    title: "Proven Track Record",
  },
  {
    icon: faCommentDots,
    title: "Client-Centric Approach",
  },
  {
    icon: faTrophy,
    title: "Transparent Communication",
  },
  {
    icon: faUser,
    title: "Forward-Thinking Creativity",
  },
];

const ContactInfo = () => {
  return (
    <Container className="py-5">
      <Row className="g-4 justify-content-center">
        {contactData.map((contact, index) => (
          <Col key={index} md={3}>
            <Card className="text-center mycarder border-0 shadow-sm">
              <Card.Body>
                <div
                  className="rounded-circle bg-light mx-auto  d-flex align-items-center justify-content-center"
                  style={{ width: "70px", height: "70px" }}
                >
                  <FontAwesomeIcon icon={contact.icon} size="2x" />
                </div>
                <Card.Title className="mt-3">{contact.title}</Card.Title>
                <Card.Text>{contact.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ContactInfo;
