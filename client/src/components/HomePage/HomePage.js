import React from "react";
import styles from "./HomePage.module.css";
import { Container, Row, Col, Button } from "reactstrap";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  //if the user has not yet created a subject, prompt to add a new subject

  return (
    <Container className={styles.container} fluid={true}>
      <Navbar />
    </Container>
  );
};

export default HomePage;
