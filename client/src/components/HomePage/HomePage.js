import React from "react";
import styles from "./HomePage.module.css";
import { Row, Col, Container, Button } from "reactstrap";
import Navbar from "../Navbar/Navbar";
import TopicForm from "../TopicForm/TopicForm";
import TopicTabs from "../TopicTabs/TopicTabs";

const HomePage = () => {
  //if the user has not yet created a subject, show TopicForm component

  return (
    <Container className={styles.container} fluid={true}>
      <Navbar />
      {/* <TopicForm /> */}
      <Row>
        <Col
          sm="12"
          md="4"
          lg="4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "30px",
          }}
        >
          <Button className={styles.addBtn}>Add New Resource</Button>
          <Button className={styles.addBtn}>Add New Topic </Button>
          <Button className={styles.addBtn}>View Progress </Button>
        </Col>
        <Col sm="12" md="8" lg="8">
          <TopicTabs />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
