import React from "react";
import logo from "../../images/myCodingBootcampLogo.png";
import { Row, Col } from "reactstrap";
import styles from "./Navbar.module.css";

const Navbar = ({ loggedIn }) => {
  return (
    <Row className={styles.nav}>
      <Col
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href={loggedIn}>
          {/* if user is logged in, redirect to homepage */}
          <img className={styles.logo} src={logo} alt="logo" />
        </a>

        <p className={styles.navLink}>
          <a href="/about" className={styles.navLink}>
            How It Works
          </a>
        </p>
      </Col>
    </Row>
  );
};

export default Navbar;
