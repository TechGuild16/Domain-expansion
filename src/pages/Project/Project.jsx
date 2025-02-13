import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";
import blogImg1 from "../../Assets/blog-img-1.png";
import blogImg2 from "../../Assets/blog-img-2.png";
import blogImg3 from "../../Assets/blog-img-3.png";

const projects = [
  { id: 1, title: "Project One", description: "A great project description", img: "https://via.placeholder.com/400" },
  { id: 2, title: "Project Two", description: "Another amazing project", img: "https://via.placeholder.com/400" },
  { id: 3, title: "Project Three", description: "Yet another project", img: "https://via.placeholder.com/400" },
];

const blogs = [
  { id: 1, title: "Blog One", description: "A great blog post", img: blogImg1 },
  { id: 2, title: "Blog Two", description: "Another insightful blog", img: blogImg2 },
  { id: 3, title: "Blog Three", description: "Yet another blog post", img: blogImg3 },
];

const Project = () => {
  return (
    <div className="projectsectioner">
      <Container className="project-section2 py-5">
        <motion.h2 className="text-center mb-4 text-light" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          Our Featured Projects
        </motion.h2>
        <motion.p className="text-center mb-5 text-secondary" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.5 }}>
          Explore some of our best projects that showcase innovation, creativity, and excellence in technology and design.
        </motion.p>
        <div className="projectsh1">
          <h1>Completed Projects</h1>
        </div>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={4} className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Card className="project-carderr bg-dark text-light">
                  <Card.Img variant="top" src={project.img} className="project-imger" />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-outline-primary">
                      Learn More
                    </motion.button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn btn-primary btn-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
            View All Projects
          </motion.button>
        </div>
        <div className="projectsh1second">
          <h1>Blog Projects</h1>
        </div>
        <Row>
          {blogs.map((blog) => (
            <Col key={blog.id} md={4} className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Card className="project-carderr bg-dark text-light">
                  <Card.Img variant="top" src={blog.img} className="project-imger" />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.description}</Card.Text>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-outline-primary">
                      Read More
                    </motion.button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Project;
