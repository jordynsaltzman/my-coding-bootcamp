import React from "react";
import styles from "./SignupForm.module.css";
import { Row, Col, Button } from "reactstrap";

const SignupForm = () => {
  return (
    <Row className={styles.formRow}>
      <Col className={styles.formCol}>
        <h2 className={styles.message}>Get started</h2>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="First Name"
          />
          <input className={styles.input} type="text" placeholder="Last Name" />
          <input className={styles.input} type="email" placeholder="Email" />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <Button className={styles.loginBtn}>Sign Up</Button>
        </form>
      </Col>
    </Row>
  );
};

export default SignupForm;
