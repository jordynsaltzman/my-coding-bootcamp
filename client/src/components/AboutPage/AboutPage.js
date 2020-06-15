import React from "react";
import styles from "./AboutPage.module.css";
import { Row, Col, Container } from "reactstrap";
import Navbar from "../Navbar/Navbar";

const AboutPage = () => {
  return (
    <Container className={styles.container} fluid={true}>
      <Navbar />
    </Container>
  );
};

export default AboutPage;
