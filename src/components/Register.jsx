import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "./Register.css";
import { useState, useEffect } from "react";
import axios from 'axios'
import { BrowserRouter, redirect, Routes } from "react-router-dom";
import Login from './Login'
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { NavLink } from "react-router-dom";
const Register = () => {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [repassword,setRepassword] = useState("");
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showUsernameError,setShowUsernameError] = useState(true)
  const [showEmailError,setShowEmailError] = useState(true)
  const [showPasswordError,setShowPasswordError] = useState(true)
  const error='d-flex';
  const noErrorUsername=`d-flex margin ${showUsernameError ? 'hidden' : ''}`
  const noErrorEmail=`d-flex margin ${showEmailError ? 'hidden' : ''}`
  const noErrorPassword=`d-flex margin ${showPasswordError ? 'hidden' : ''}`


  const onRegisterHandler=()=>{

    if(password.length<8){
       setShowPasswordError(false);
    }
    else{
        setShowPasswordError(true);
        const postObj={
          "name":username,
          "email":email,
          "password":password,
          "re_password":repassword
      }
//  const headers=('Access-Control-Allow-Origin: *');
      // const headers={'Access-Control-Allow-Origin':'*'}
      console.log(postObj)
      axios.post('http://127.0.0.1:8000/auth/users/',postObj).then((res)=>console.log(res))
      .catch((error)=>{
        console.log(error)
      })


    // axios.post('http://127.0.0.1:8000/api/register/',postObj).then((res)=>{
    //  if(res.status===200) navigate("/")
    // })
    // .catch((error) => {
    //   console.log(error)
    //   if (error.response.data.username) {
    //     // setShow(true);
    //     setShowUsernameError(false);
    //   }
    //   else{
    //     setShowUsernameError(true);
    //   }
    //   if(error.response.data.email){
    //     setShowEmailError(false);
    //   }
    //   else{
    //     setShowEmailError(true);
    //   }
    // });
  }
    }
 

    return (
        <>
       

      
          <Container fluid className="register-holder">
            <Row>
              <Col md={6} className="d-grid justify-content-center align-content-center">
              <Alert show={show} variant="danger">
        <Alert.Heading>Username Already Registered</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Close me y'all!
          </Button>
        </div>
      </Alert>
                <Card style={{ width: "30rem" }}>
                  <Card.Body>
                    <Card.Title className="mb-4">Register Form</Card.Title>
                    <form>
                      {/* <!-- Username input --> */}
                      <div className="form-outline  d-grid ">
                        <label className="form-label " htmlFor="form2Example3">
                          Name
                        </label>
                        <input
                          type="username"
                          id="form2Example3"
                          className="form-control"
                          onChange={(e)=>setUsername(e.target.value)}
                        />
                         <p className={noErrorUsername} style={{color:'red'}}>Username is already taken</p>
                      </div>
    
                      {/* <!-- Email input --> */}
                      <div className="form-outline ">
                        <label className="form-label" htmlFor="form2Example1">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form2Example1"
                          className="form-control"
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                         <p className={noErrorEmail} style={{color:'red'}}>This email address is already registered</p>
                      </div>
    
                      {/* <!-- Password input --> */}
                      <div className="form-outline ">
                        <label className="form-label" htmlFor="form2Example2">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example2"
                          className="form-control"
                          onChange={(e)=>{
                            setPassword(e.target.value)
                          }}
                        />
                        <p className={noErrorPassword} style={{color:'red'}}>Password is too short! Minimum 8 alphanumeric values.</p>
                      </div>

                      {/* <!-- REPassword input --> */}
                      <div className="form-outline ">
                        <label className="form-label" htmlFor="form2Example4">
                         Confirm Password
                        </label>
                        <input
                          type="password"
                          id="form2Example4"
                          className="form-control"
                          onChange={(e)=>{
                            setRepassword(e.target.value)
                          }}
                        />
                        {/* <p className={noErrorPassword} style={{color:'red'}}>Password is too short! Minimum 8 alphanumeric values.</p> */}
                      </div>
    
                      {/* <!-- 2 column grid layout for inline styling --> */}
                      <div className="row mt-2 mb-2">
                        
    
                      <Button variant="primary" className="col-4 offset-4 my-3" onClick={onRegisterHandler}>Sign In</Button>{' '}
                        {/* <div className="col-6   "> */}
                          {/* <!-- Simple link --> */}
                          {/* <a href="#!">Forgot password?</a> */}
                        {/* </div> */}
                      </div>
    
                      {/* <!-- Submit button --> */}
    
                      {/* <!-- Register buttons --> */}
                      <div className="text-center">
                        <p>
                          Already a member? <a href="/">Login</a>
                        </p>
                       
                      </div>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            
            </Row>
          </Container>
        </>
      );
 
};

export default Register;