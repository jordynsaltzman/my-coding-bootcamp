import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Row, Col, Container, Button } from "reactstrap";
import AppBar from "../AppBar/AppBar";
import ResourceForm from "../ResourceForm/ResourceForm";
import TopicTabs from "../TopicTabs/TopicTabs";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [activeTabs, setActiveTabs] = useState("0");
  const toggle = () => setModal(!modal);

  const toggleTabs = (val) => setActiveTabs(val);

  return (
    <Container className={styles.container} fluid={true}>
      <AppBar />
      <Row>
        <Col sm="12" md="3" lg="3" className={styles.btnCol}>
          <Button className={styles.addBtn} onClick={toggle}>
            <i className="fa fa-plus" aria-hidden="true"></i>
            {`  New Resource`}
          </Button>
          <Button className={styles.addBtn} onClick={() => toggleTabs("100")}>
            <i className="fa fa-plus" aria-hidden="true"></i>
            {`  New Topic`}
          </Button>
          <Button className={styles.addBtn}>
            <i className="fa fa-tasks" aria-hidden="true"></i>
            {`  My Progress`}
          </Button>
        </Col>
        <Col sm="12" md="9" lg="9">
          <TopicTabs
            toggleModal={toggle}
            modalOpen={modal}
            activeTab={activeTabs}
            toggle={toggleTabs}
          />
        </Col>
      </Row>
      {/* <ResourceForm toggle={toggle} modalOpen={modal} /> */}
    </Container>
  );
};

export default HomePage;
