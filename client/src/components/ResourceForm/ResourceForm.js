import React, { useEffect, useState } from "react";
import styles from "./ResourceForm.module.css";
import {
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import API from "../../api/API";

const ResourceForm = ({ toggle, modalOpen }) => {
  const [resource, setResource] = useState({
    title: "",
    description: "",
    url: "",
    completed: false,
    topic: "",
  });

  const createResource = (event) => {
    event.preventDefault();
    API.createNewResource(resource).then((res) => {
      console.log(res.data);
      //   window.location.reload();
    });
  };

  return (
    <Modal isOpen={modalOpen} toggle={toggle} backdrop="static">
      <ModalHeader toggle={toggle}>
        <h2 className={styles.title}>New Resource</h2>
      </ModalHeader>
      <ModalBody>
        <form>
          <label></label>
        </form>
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
    </Modal>
  );
};

export default ResourceForm;
