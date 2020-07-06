import React, { useEffect, useState } from "react";
import styles from "./ResourceForm.module.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import API from "../../api/API";

const ResourceForm = ({ toggle, modalOpen, topics, getTopics }) => {
  const [topicList, setTopicList] = useState([]);
  const [resource, setResource] = useState({
    title: "",
    description: "",
    url: "",
    completed: false,
    topic: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setResource({ ...resource, [name]: value });
  };

  const createResource = (event) => {
    event.preventDefault();
    toggle();
    API.createNewResource(resource).then((res) => {
      getTopics();
    });
  };

  useEffect(() => {
    API.getUserTopics().then((res) => {
      console.log(res.data);
      setTopicList(res.data);
    });
  }, []);

  return (
    <Modal isOpen={modalOpen} toggle={toggle} backdrop="static" centered="true">
      <ModalHeader toggle={toggle}>
        <h2 className={styles.title}>New Resource</h2>
      </ModalHeader>
      <Form style={{ fontFamily: "'Karla', sans-serif" }}>
        <ModalBody>
          <FormGroup>
            <Label htmlFor="title">Title*</Label>
            <Input
              type="text"
              name="title"
              id="title"
              required="true"
              value={resource.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              name="description"
              id="description"
              value={resource.description}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="url">URL*</Label>
            <Input
              type="text"
              name="url"
              id="url"
              required="true"
              value={resource.url}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="topic">Topic*</Label>
            <Input
              type="select"
              name="topic"
              id="topic"
              required="true"
              value={resource.topic}
              onChange={handleChange}
            >
              {topics.map((topic, i) => {
                return (
                  <option key={i} value={topic._id}>
                    {topic.topicName}
                  </option>
                );
              })}
            </Input>
            <FormText color="muted">* indicates required field</FormText>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            style={{
              backgroundColor: "rgb(255, 0, 70)",
              borderColor: "rgb(255, 0, 70)",
              fontFamily: "'Karla', sans-serif",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.5)",
            }}
            onClick={createResource}
          >
            Add
          </Button>
          <Button
            color="secondary"
            onClick={toggle}
            style={{
              fontFamily: "'Karla', sans-serif",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default ResourceForm;
