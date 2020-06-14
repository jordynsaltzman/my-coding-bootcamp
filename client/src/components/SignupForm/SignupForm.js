import React from "react";
import styles from "./SignupForm.module.css";
import { Row, Col, Button } from "reactstrap";

const SignupForm = ({
  handleChange,
  handleRegister,
  firstNameName,
  firstNameType,
  firstNameValue,
  lastNameName,
  lastNameValue,
  lastNameType,
  pwName,
  pwType,
  pwValue,
  emailName,
  emailType,
  emailValue,
}) => {
  return (
    <Row className={styles.formRow}>
      <Col className={styles.formCol}>
        <h2 className={styles.message}>Get started</h2>
        <form className={styles.form}>
          <input
            className={styles.input}
            type={firstNameType}
            name={firstNameName}
            value={firstNameValue}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            className={styles.input}
            type={lastNameType}
            name={lastNameName}
            value={lastNameValue}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            className={styles.input}
            type={emailType}
            name={emailName}
            value={emailValue}
            onChange={handleChange}
            type="email"
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
          <Button className={styles.loginBtn} onClick={handleRegister}>
            Sign Up
          </Button>
        </form>
      </Col>
    </Row>
  );
};

export default SignupForm;
