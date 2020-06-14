import React from "react";
import styles from "./LoginForm.module.css";
import { Row, Col, Button } from "reactstrap";

const LoginForm = ({
  handleLogin,
  handleChange,
  pwValue,
  pwName,
  pwType,
  emailValue,
  emailName,
  emailType,
}) => {
  return (
    <Row className={styles.formRow}>
      <Col className={styles.formCol}>
        <h2 className={styles.message}>Welcome back</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <input
            className={styles.input}
            type={emailName}
            name={emailType}
            value={emailValue}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            className={styles.input}
            type={pwType}
            name={pwName}
            value={pwValue}
            onChange={handleChange}
            placeholder="Password"
          />
          <Button
            className={styles.loginBtn}
            type="submit"
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Col>
    </Row>
  );
};

export default LoginForm;
