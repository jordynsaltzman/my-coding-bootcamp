import React from "react";
import styles from "./LoginWindow.module.css";
import { Container, Row, Col, Button } from "reactstrap";

const LoginWindow = () => {
  return (
    <Container className={styles.container} fluid={true}>
      <Row>
        <Col className={styles.loginBox} sm="12" md={{ size: 6, offset: 3 }}>
          <h1 className={styles.title}>Welcome back.</h1>
          <form className={styles.form}>
            <input className={styles.input} placeholder="Email" />
            <input className={styles.input} placeholder="Password" />
            <Button className={styles.loginBtn} outline color="success">
              Login
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginWindow;
