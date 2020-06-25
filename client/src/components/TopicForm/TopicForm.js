import React, { useEffect, useState } from "react";
import styles from "./TopicForm.module.css";
import {
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
} from "reactstrap";
import API from "../../api/API";

const TopicForm = ({ handleCreate }) => {
  const [topic, setTopic] = useState({
    topicName: "",
  });

  const createTopic = (event) => {
    event.preventDefault();
    handleCreate(topic);
    setTopic({
      topicName: "",
    });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTopic({ ...topic, topicName: value });
  };

  return (
    <Row>
      <Col className={styles.formBox} sm="12" md={{ size: 8, offset: 2 }}>
        <form className={styles.form}>
          <label style={{ textAlign: "center" }}>
            <h3 className={styles.title}>What would you like to learn?</h3>
          </label>
          <InputGroup className={styles.inputGroup}>
            <Input
              className={styles.input}
              onChange={handleInputChange}
              placeholder="E.g. Redux, Python, Algorithms..."
            />
            <InputGroupAddon addonType="append" classname={styles.button}>
              <Button
                classname={styles.button}
                onClick={createTopic}
                style={{
                  backgroundColor: "rgb(255, 0, 70)",
                  borderColor: "rgb(255, 0, 70)",
                }}
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </Col>
    </Row>
  );
};

export default TopicForm;
