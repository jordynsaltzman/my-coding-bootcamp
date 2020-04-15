import React, { useState } from "react";
import styles from "./LoginWindow.module.css";
import { Container, Row, Col, Button } from "reactstrap";
import classnames from "classnames";

const LoginWindow = () => {
  const [activeView, setActiveView] = useState("1");

  const toggle = (id) => {
    if (activeView !== id) {
      setActiveView(id);
    }
    console.log(activeView);
  };

  return (
    <Container className={styles.container} fluid={true}>
      <Row>
        {activeView === "1" ? (
          <Col className={styles.loginBox} sm="12" md={{ size: 4, offset: 4 }}>
            <Row>
              <Col xs="6" sm="6" md="6" className={styles.titleCol}>
                <h1 className={styles.title} onClick={() => toggle("1")}>
                  Sign In
                </h1>
              </Col>
              <Col xs="6" sm="6" md="6" className={styles.titleInactiveCol}>
                <h1 className={styles.title} onClick={() => toggle("2")}>
                  Sign Up
                </h1>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
                flex: 1,
              }}
            >
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2 className={styles.message}>Welcome back</h2>
                <form className={styles.form}>
                  <input className={styles.input} placeholder="Email" />
                  <input className={styles.input} placeholder="Password" />
                  <Button className={styles.loginBtn}>Login</Button>
                </form>
              </Col>
            </Row>
          </Col>
        ) : (
          <Col className={styles.loginBox} sm="12" md={{ size: 4, offset: 4 }}>
            <Row>
              <Col xs="6" sm="6" md="6" className={styles.titleInactiveCol}>
                <h1 className={styles.title} onClick={() => toggle("1")}>
                  Sign In
                </h1>
              </Col>
              <Col xs="6" sm="6" md="6" className={styles.titleCol}>
                <h1 className={styles.title} onClick={() => toggle("2")}>
                  Sign Up
                </h1>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
                flex: 1,
              }}
            >
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2 className={styles.message}>Get started</h2>
                <form className={styles.form}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Last Name"
                  />
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                  />
                  <Button className={styles.loginBtn}>Sign Up</Button>
                </form>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default LoginWindow;
