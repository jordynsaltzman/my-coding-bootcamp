import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import logo from "../../images/myCodingBootcampLogo.png";
import {
  Row,
  Col,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import styles from "./AppBar.module.css";

const AppBar = (props) => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const token = localStorage.getItem("token");

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Row className={styles.nav}>
      <NavbarBrand href={token ? "/home" : "/login"} className="mr-auto">
        <img className={styles.logo} src={logo} alt="logo" />
      </NavbarBrand>

      {token ? (
        <Nav pullRight>
          <NavItem>
            <NavLink className={styles.navLink} href="/about">
              How It Works
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={styles.navLink}
              onClick={handleLogout}
              style={{ color: "rgb(255, 0, 70)" }}
            >
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav pullRight>
          <NavItem>
            <NavLink className={styles.navLink} href="/about">
              How It Works
            </NavLink>
          </NavItem>
        </Nav>
      )}

      {/* <Col
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href={props.loggedIn}>
          <img className={styles.logo} src={logo} alt="logo" />
        </a>
        <p className={styles.navLink}>
          <a href="/about" className={styles.navLink}>
            How It Works
          </a>
        </p>
        {token ? <Button onClick={handleLogout}>Logout</Button> : null}
      </Col> */}
    </Row>

    // <Navbar color="faded" light>

    //   <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    //   <Collapse isOpen={!collapsed} navbar>
    //     <Nav navbar>
    //       <NavItem>
    //         <NavLink href="/components/">Components</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink
    //           className={styles.navLink}
    //           href="https://github.com/reactstrap/reactstrap"
    //         >
    //           How It Works
    //         </NavLink>
    //       </NavItem>
    //     </Nav>
    //   </Collapse>
    // </Navbar>
  );
};

export default withRouter(AppBar);
