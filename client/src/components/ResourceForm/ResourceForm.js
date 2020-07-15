import React, { useState } from "react";
import styles from "./ResourceForm.module.css";
import {
  Button,
  Col,
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
  const [resource, setResource] = useState({
    title: "",
    description: "",
    url: "",
    type: "",
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
      setResource({
        title: "",
        description: "",
        url: "",
        type: "",
        completed: false,
        topic: "",
      });
    });
  };

  return (
    <Modal isOpen={modalOpen} toggle={toggle} backdrop="static" centered={true}>
      <ModalHeader toggle={toggle}>
        <h2 className={styles.title}>New Resource</h2>
      </ModalHeader>
      <Form style={{ fontFamily: "'Karla', sans-serif", fontSize: "16px" }}>
        <ModalBody>
          <FormGroup row>
            <Label htmlFor="title" sm={3}>
              Title*
            </Label>
            <Col sm={9}>
              <Input
                className={styles.input}
                type="text"
                name="title"
                id="title"
                required="true"
                value={resource.title}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="description" sm={3}>
              Description
            </Label>
            <Col sm={9}>
              <Input
                className={styles.input}
                type="text"
                name="description"
                id="description"
                value={resource.description}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="url" sm={3}>
              URL*
            </Label>
            <Col sm={9}>
              <Input
                className={styles.input}
                type="text"
                name="url"
                id="url"
                required="true"
                value={resource.url}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="type" sm={3}>
              Type
            </Label>
            <Col sm={9}>
              <Input
                className={styles.input}
                type="select"
                name="type"
                id="type"
                required="false"
                value={resource.type}
                onChange={handleChange}
              >
                <option disabled> </option>
                <option value="Stack Overflow">Stack Overflow</option>
                <option value="Documentation">Documentation</option>
                <option value="Video">Video</option>
                <option value="Blog">Blog</option>
                <option value="E-Course">E-Course</option>
                <option value="Game">Game</option>
                <option value="Podcast">Podcast</option>
                <option value="Meetup">Meetup</option>
                <option value="Meetup">Misc.</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="topic" sm={3}>
              Topic*
            </Label>
            <Col sm={9}>
              <Input
                className={styles.input}
                type="select"
                name="topic"
                id="topic"
                required="true"
                value={resource.topic}
                onChange={handleChange}
              >
                <option disabled></option>
                {topics.map((topic, i) => {
                  return (
                    <option key={i} value={topic._id}>
                      {topic.topicName}
                    </option>
                  );
                })}
              </Input>

              <FormText color="muted">* indicates required field</FormText>
            </Col>
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
            type="submit"
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
