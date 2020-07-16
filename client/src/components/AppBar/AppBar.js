import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import logo from "../../images/myCodingBootcampLogo.png";
import { Row, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import styles from "./AppBar.module.css";

const AppBar = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  const handleAbout = () => {
    props.history.push("/about");
  };

  const token = localStorage.getItem("token");

  return (
    <Row className={styles.nav}>
      <NavbarBrand
        href={
          token
            ? "https://mycodingbootcamp.herokuapp.com/home"
            : "https://mycodingbootcamp.herokuapp.com/login"
        }
        className="mr-auto"
      >
        <img className={styles.logo} src={logo} alt="logo" />
      </NavbarBrand>

      {token ? (
        <Nav pullright="true">
          <NavItem>
            <NavLink
              className={styles.navLink}
              href="https://mycodingbootcamp.herokuapp.com/about"
            >
              How It Works
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={styles.navLink}
              onClick={handleLogout}
              href="#!"
            >
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav pullright="true">
          <NavItem>
            <NavLink className={styles.navLink} onClick={handleAbout} href="#!">
              How It Works
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Row>
  );
};

export default withRouter(AppBar);
