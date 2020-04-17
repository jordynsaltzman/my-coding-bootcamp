import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import ResourceCard from "../ResourceCard/ResourceCard";
import styles from "./TopicTabs.module.css";

const TopicTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Row>
      <Col>
        <Nav tabs className={styles.tabs}>
          <NavItem>
            <NavLink
              className={activeTab === "1" ? styles.active : styles.inactive}
              //   className={classnames({ active: activeTab === "1" })}
              active={activeTab === "1"}
              onClick={() => {
                toggle("1");
              }}
            >
              React
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? styles.active : styles.inactive}
              //   className={classnames({ active: activeTab === "2" })}
              active={activeTab === "2"}
              onClick={() => {
                toggle("2");
              }}
            >
              Redux
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? styles.active : styles.inactive}
              active={activeTab === "3"}
              onClick={() => {
                toggle("3");
              }}
            >
              + New Topic
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
            </Row>
          </TabPane>
        </TabContent>
      </Col>
    </Row>
  );
};

export default TopicTabs;
