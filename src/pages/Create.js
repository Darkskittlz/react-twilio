import React, { useState, useRef } from "react";
import styled from 'styled-components'
import { Routes, Route, Link, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import "../Styles/App.css"
import { Modal2 } from "../components/modal2";


const GridContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`

const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  color: black;
`

const errors = {
    email: "invalid email",
    pass: "invalid password"
  };


const FormContainer = styled.div`
  width: 100%;
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 10px;
`

const Button = styled.button`
  background-color: white;
  border: 0.5px solid aliceblue;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  padding: 15px;
  width: 50%;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Create = () => {
    const form = useRef();
    const [showModal, setShowModal] = useState(false)
    const [errorMessages, setErrorMessages] = useState({});
    
    const [email, setEmail] = useState(null);
    const [accountNum, setAccountNum] = useState(null);
    const [username, setUsername] = useState(null);
    const [serviceAddress, setServiceAddress] = useState(null);

   

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const sendData2 = async () => {
      const formattedAccountNum = encodeURIComponent(accountNum)
      const formattedServiceAddress = encodeURIComponent(serviceAddress)
      const formattedEmail = encodeURIComponent(email)
      const formattedUsername = encodeURIComponent(username)
      const URL = `accountNum=${formattedAccountNum}&email=${formattedEmail}&serviceAddress=${formattedServiceAddress}&username=${formattedUsername}`;
      const results = await axios.post("./netlify/functions/graphql/?" + URL);
      console.log("results", results)
      console.log("URL", URL);
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      sendData2();
    }
    
    const openModal = () => {
      setShowModal((prev) => !prev);
    };


  return (
    <GridContainer>
        <FormContainer>
            <Link to="/" style={{textDecoration: "none"}}>
                <Title>Create Account</Title>
            </Link>
            <form ref={form} id="myForm" onSubmit={(event) => handleSubmit(event)}>
                <div className="input-container">
                    <label>Username </label>
                    <input 
                      type="text"
                      id="username"
                      onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label>Email </label>
                    <input 
                      type="text"
                      id="email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label>Account # </label>
                    <input 
                      type="text"
                      name="AccountNum"
                      id="accountNum"
                      onChange={(event) => setAccountNum(event.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label>Service Address </label>
                    <input 
                      type="text"
                      name="serviceAddress"
                      onChange={(event) => setServiceAddress(event.target.value)}
                    />
                </div>
                <ButtonContainer>
                  <Button 
                    id="btn" 
                    type="submit" 
                    value="Submit"
                    onClick={openModal}
                  >Send</Button>
                </ButtonContainer>
              </form>
          </FormContainer>
          <Modal2 showModal={showModal} setShowModal={setShowModal} />
    </GridContainer>
  )
}

export default Create