import React, { useState } from "react";
import styles from "./LoginWindow.module.css";
import { Container, Row, Col } from "reactstrap";
import SignupForm from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";
import AppBar from "../AppBar/AppBar";
import axios from "axios";

const LoginWindow = (props) => {
  const [activeView, setActiveView] = useState("1");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState("none");
  const [loginError, setLoginError] = useState("none");
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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userLoginInfo);
    axios
      .post("/login", userLoginInfo)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        props.history.push("/home");
        axios.defaults.headers.common[
          "authorization"
        ] = `Bearer ${response.data.token}`;
      })
      .catch((error) => {
        console.log(error);
        setLoginError("block");
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
      .post("/register", userRegisterInfo)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setRegisterSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setRegisterError("block");
      });
  };

  return (
    <Container className={styles.container} fluid={true}>
      <AppBar />
      <Row>
        <Col
          className={styles.loginBox}
          sm="12"
          md={{ size: 4, offset: 4 }}
          lg={{ size: 4, offset: 4 }}
        >
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
              loginError={loginError}
              pwValue={userLoginInfo.password}
              pwName="password"
              pwType="password"
              emailValue={userLoginInfo.email}
              emailName="email"
              emailType="email"
            />
          ) : !registerSuccess ? (
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
              registerError={registerError}
            />
          ) : (
            <Row className={styles.formRow}>
              <Col className={styles.formCol}>
                <h2 className={styles.message}>
                  You have successfully registered!
                </h2>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default LoginWindow;

// export default LoginWindow;
