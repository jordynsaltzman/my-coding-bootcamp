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

const TopicForm = () => {
  const [topic, setTopic] = useState({
    topicName: "",
  });

  const createTopic = (event) => {
    event.preventDefault();
    API.createNewTopic(topic).then((res) => {
      console.log(res.data);
      window.location.reload();
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
            <h3 className={styles.title}>Enter a topic to start learning.</h3>
          </label>
          <InputGroup className={styles.inputGroup}>
            <Input
              className={styles.input}
              onChange={handleInputChange}
              placeholder="E.g. Redux, Python, Algorithms..."
            />
            <InputGroupAddon addonType="append" classname={styles.button}>
              <Button classname={styles.button} onClick={createTopic}>
                Create
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </Col>
    </Row>
  );
};

export default TopicForm;
