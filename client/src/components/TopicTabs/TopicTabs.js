import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Button,
} from "reactstrap";
import ResourceCard from "../ResourceCard/ResourceCard";
import styles from "./TopicTabs.module.css";
import API from "../../api/API";
import TopicForm from "../TopicForm/TopicForm";

const TopicTabs = () => {
  const [activeTab, setActiveTab] = useState("0");
  let [userTopics, setUserTopics] = useState([]);

  useEffect(() => {
    API.getUserTopics().then((res) => {
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        setUserTopics((userTopics) => [...userTopics, res.data[i]]);
      }
    });
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleDelete = (id) => {
    //show modal that asks if user is sure they want to delete the topic
    API.deleteTopic(id).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  return (
    <Row>
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
            <TopicForm />
          </TabPane>
        </TabContent>

        {userTopics.map((topic, i) => {
          return (
            <TabContent activeTab={activeTab} key={i}>
              <TabPane tabId={i}>
                <Row>
                  <Col>
                    <Button
                      onClick={() => {
                        handleDelete(topic._id);
                      }}
                      className={styles.deleteBtn}
                    >
                      Delete Topic
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
                        key={x}
                      />
                    );
                  })}
                </Row>
              </TabPane>
            </TabContent>
          );
        })}
      </Col>
    </Row>
  );
};

export default TopicTabs;
