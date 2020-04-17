import React from "react";
import logo from "../../images/myCodingBootcampLogo.png";
import { Row, Col } from "reactstrap";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Row className={styles.nav}>
      <Col>
        <img className={styles.logo} src={logo} alt="logo" />
      </Col>
    </Row>
  );
};

export default Navbar;
