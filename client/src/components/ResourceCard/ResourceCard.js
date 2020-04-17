import React from "react";
import styles from "./ResourceCard.module.css";
import { Button, Col, Row, Card, CardTitle, CardText } from "reactstrap";

const ResourceCard = () => {
  return (
    <Col sm="6">
      <Card body className={styles.card}>
        <CardTitle className={styles.cardTitle}>Resource Title</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Row>
          <Col xs="6" sm="6" md="6" lg="6">
            <Button
              style={{
                width: "100%",
                backgroundColor: "rgb(255, 0, 70)",
                borderColor: "rgb(255, 0, 70)",
              }}
            >
              <i class="fas fa-door-open"> </i> Open
            </Button>
          </Col>
          <Col xs="6" sm="6" md="6" lg="6">
            <Button style={{ width: "100%" }}>
              <i class="fas fa-trash-alt"> </i> Remove
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ResourceCard;
