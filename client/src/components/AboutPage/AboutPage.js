import React from "react";
import styles from "./AboutPage.module.css";
import { Row, Col, Container, Button } from "reactstrap";
import Navbar from "../Navbar/Navbar";

const AboutPage = (props) => {
  const getStartedBtn = () => {
    props.history.push("/login");
  };

  return (
    <Container className={styles.container} fluid={true}>
      <Navbar />
      <Row className={styles.row}>
        <Col
          sm="12"
          md="4"
          lg="4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <i
            className="fas fa-laptop-code"
            style={{
              color: "rgb(255, 0, 70)",
              padding: "20px",
              fontSize: "150px",
            }}
          ></i>
          <h2 className={styles.header}>Find Coding Resourses</h2>
          <p className={styles.description}>
            From documentaion, to Stack Overflow threads, to helpful Youtube
            videos, you turn to an abundance of online resources as you learn to
            code.
          </p>
        </Col>
        <Col
          sm="12"
          md="4"
          lg="4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <i
            className="far fa-save"
            style={{
              color: "#66c7c5",
              padding: "20px",
              fontSize: "150px",
            }}
          ></i>
          <h2 className={styles.header}>Save Your Favorites</h2>
          <p className={styles.description}>
            Group your most frequented and useful sites into topics of your
            choice. There is no limit to how many you can add!
          </p>
        </Col>
        <Col
          sm="12"
          md="4"
          lg="4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <i
            className="far fa-folder-open"
            style={{ color: "white", padding: "20px", fontSize: "150px" }}
          ></i>
          <h2 className={styles.header}>Access Anytime, Anywhere</h2>
          <p className={styles.description}>
            Our simple and organized interface allows you to access your
            resources from anywhere. Easily add and remove topics and resources,
            and keep track of your progress along the way.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            className={styles.getStartedBtn}
            type="submit"
            onClick={getStartedBtn}
          >
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
