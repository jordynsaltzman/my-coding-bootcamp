import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Button,
} from "reactstrap";
import ResourceCard from "../ResourceCard/ResourceCard";
import styles from "./TopicTabs.module.css";
import API from "../../api/API";
import TopicForm from "../TopicForm/TopicForm";
import ResourceForm from "../ResourceForm/ResourceForm";

const TopicTabs = ({ toggleModal, modalOpen, activeTab, toggle }) => {
  //const [activeTab, setActiveTab] = useState("0");
  let [userTopics, setUserTopics] = useState([]);
  const [modal, setModal] = useState({
    value: false,
    data: null,
    message: null,
  });

  const confirmModal = (data) => {
    setModal({
      value: true,
      data: data._id,
      message: data.topicName,
    });
  };

  const closeModal = () => {
    setModal({
      value: false,
      data: null,
      message: null,
    });
  };

  useEffect(() => {
    API.getUserTopics().then((res) => {
      console.log(res.data);

      setUserTopics(res.data);
    });
  }, []);

  // const toggle = (tab) => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };

  const handleDelete = (id) => {
    //show modal that asks if user is sure they want to delete the topic
    closeModal();
    API.deleteTopic(id).then((res) => {
      console.log(res);
      API.getUserTopics().then((res) => {
        setUserTopics(res.data);
      });
    });
  };

  const handleDeleteResource = async (resource, topic) => {
    const data = {
      topic,
      resource,
    };

    let response = await API.deleteResource(data);
    if (response) {
      API.getUserTopics().then((response) => {
        setUserTopics(response.data);
      });
    }
  };

  const getTopics = () => {
    API.getUserTopics().then((response) => {
      setUserTopics(response.data);
    });
  };

  const handleCreate = (topic) => {
    API.createNewTopic(topic).then((res) => {
      API.getUserTopics().then((res) => {
        setUserTopics(res.data);
      });
    });
  };

  return (
    <Row>
      <ResourceForm
        toggle={toggleModal}
        modalOpen={modalOpen}
        topics={userTopics}
        getTopics={getTopics}
      />
      <Col>
        <Nav tabs className={styles.tabs}>
          {userTopics.map((topic, i) => {
            return (
              <NavItem key={i}>
                <NavLink
                  className={activeTab === i ? styles.active : styles.inactive}
                  active={activeTab === i}
                  onClick={() => {
                    toggle(i);
                  }}
                >
                  {topic.topicName}
                </NavLink>
              </NavItem>
            );
          })}

          <NavItem>
            <NavLink
              className={activeTab === "100" ? styles.active : styles.inactive}
              active={activeTab === "100"}
              onClick={() => {
                toggle("100");
              }}
            >
              + New Topic
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="100">
            <TopicForm handleCreate={handleCreate} />
          </TabPane>
        </TabContent>

        {userTopics.map((topic, i) => {
          return (
            <React.Fragment key={i}>
              <TabContent activeTab={activeTab}>
                <TabPane tabId={i}>
                  <Row>
                    <Col>
                      <Button
                        onClick={() => confirmModal(topic)}
                        className={styles.deleteBtn}
                      >
                        <i className="fas fa-trash-alt"> </i> Delete Topic
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    {topic.resources.map((resource, x) => {
                      return (
                        <ResourceCard
                          title={resource.title}
                          description={resource.description}
                          link={resource.url}
                          type={resource.type}
                          key={x}
                          topic={topic._id}
                          resource={resource._id}
                          handleDeleteResource={handleDeleteResource}
                        />
                      );
                    })}
                  </Row>
                </TabPane>
              </TabContent>
              <Modal
                centered={true}
                isOpen={modal.value}
                toggle={closeModal}
                backdrop="static"
              >
                <ModalHeader toggle={closeModal}>
                  <h2
                    style={{
                      fontFamily: "'Roboto Condensed', sans serif",
                      fontWeight: "bold",
                    }}
                  >
                    Are you sure?
                  </h2>
                </ModalHeader>
                <ModalBody style={{ fontFamily: "'Karla', sans serif" }}>
                  Deleting {modal.message} will remove all resources contained
                  within the topic.
                </ModalBody>
                <ModalFooter>
                  <Button
                    style={{
                      backgroundColor: "rgb(255, 0, 70)",
                      borderColor: "rgb(255, 0, 70)",
                      fontFamily: "'Karla', sans-serif",
                      boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.5)",
                    }}
                    onClick={() => {
                      handleDelete(modal.data);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    color="secondary"
                    onClick={closeModal}
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </React.Fragment>
          );
        })}
      </Col>
    </Row>
  );
};

export default TopicTabs;
