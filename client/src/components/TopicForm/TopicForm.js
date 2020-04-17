import React from "react";
import styles from "./TopicForm.module.css";
import {
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
} from "reactstrap";

const TopicForm = () => {
  return (
    <Row>
      <Col className={styles.formBox} sm="12" md={{ size: 6, offset: 3 }}>
        <form className={styles.form}>
          <label style={{ textAlign: "center" }}>
            <h3 className={styles.title}>Enter a topic to get started.</h3>
          </label>
          <InputGroup className={styles.inputGroup}>
            <Input
              className={styles.input}
              placeholder="E.g. Redux, Python, Algorithms..."
            />
            <InputGroupAddon addonType="append" classname={styles.button}>
              <Button classname={styles.button}>Create</Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </Col>
    </Row>
  );
};

export default TopicForm;
