import React, {useState} from 'react'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'
import "../App.css"


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

const Create = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        var { email, pass } = document.forms[0];

        // const userData = database.find((user) => user.username === email.value);
        //     // Compare user info

        };

  return (
    <GridContainer>
        <FormContainer>
            <Link to="/" style={{textDecoration: "none"}}>
                <Title>Create Account</Title>
            </Link>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="email" required />
                    {renderErrorMessage("email")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </FormContainer>
    
    </GridContainer>
  )
}

export default Create