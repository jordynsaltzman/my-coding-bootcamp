import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { userLogin, userLogout } from "../../actions/userActions";
import { connect } from "react-redux";
import styles from "./LoginWindow.module.css";
import { Container, Row, Col, Button } from "reactstrap";
import SignupForm from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const LoginWindow = (props) => {
  const [activeView, setActiveView] = useState("1");
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [userRegisterInfo, setUserRegisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //toggle between sign up and sign in windows
  const toggle = (id) => {
    if (activeView !== id) {
      setActiveView(id);
    }
    console.log(activeView);
  };

  const handleChange = (e) => {
    setUserLoginInfo({
      ...userLoginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterChange = (e) => {
    setUserRegisterInfo({
      ...userRegisterInfo,
      [e.target.name]: e.target.value,
    });
  };

  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userLoginInfo);
    axios
      .post("http://localhost:5000/login", userLoginInfo)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
      });

    // reset local state
    setUserLoginInfo({
      email: "",
      password: "",
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userRegisterInfo);
    axios
      .post("http://localhost:5000/register", userRegisterInfo)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          props.history.push("/");
        }
      });
  };

  return (
    <Container className={styles.container} fluid={true}>
      <Navbar />
      <Row>
        <Col className={styles.loginBox} sm="12" md={{ size: 4, offset: 4 }}>
          <Row>
            <Col
              xs="6"
              sm="6"
              md="6"
              className={
                activeView === "1" ? styles.titleCol : styles.titleInactiveCol
              }
              onClick={() => toggle("1")}
            >
              <h1 className={styles.title}>Sign In</h1>
            </Col>
            <Col
              xs="6"
              sm="6"
              md="6"
              className={
                activeView === "1" ? styles.titleInactiveCol : styles.titleCol
              }
              onClick={() => toggle("2")}
            >
              <h1 className={styles.title}>Sign Up</h1>
            </Col>
          </Row>
          {activeView === "1" ? (
            <LoginForm
              handleLogin={handleLogin}
              handleChange={handleChange}
              pwValue={userLoginInfo.password}
              pwName="password"
              pwType="password"
              emailValue={userLoginInfo.email}
              emailName="email"
              emailType="email"
            />
          ) : (
            <SignupForm
              handleRegister={handleRegister}
              handleChange={handleRegisterChange}
              pwValue={userRegisterInfo.password}
              pwName="password"
              pwType="password"
              emailValue={userRegisterInfo.email}
              emailName="email"
              emailType="email"
              firstNameName="firstName"
              firstNameType="text"
              firstNameValue={userRegisterInfo.firstName}
              lastNameName="lastName"
              lastNameType="text"
              lastNameValue={userRegisterInfo.lastName}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = {
  userLogin,
  userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWindow);

// export default LoginWindow;
