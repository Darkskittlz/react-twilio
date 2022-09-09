import React, {useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import "../Styles/App.css"
import { Modal } from "../components/modal";


// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
// .create({
//     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//     from: '+15017122661',
//     to: '+15558675310'
// })
// .then(message => console.log(message.sid));


const GridContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-top: -10px;
  color: black;
`

const FormContainer = styled.div`
    display: flex;
    margin-top: 10px;
    width: 100%;
    justify-content: center;
`

const Button3 = styled.h2`
    color: blue;
    margin-top: 20px;
    font-size: 19px;
    cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;
    width: 50%;
    position: absolute;
    margin-top: 5%;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    grid-gap: 20px;
`

  const errors = {
    email: "invalid email",
    pass: "invalid password"
  };

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal((prev) => !prev);
    };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        var { email, pass } = document.forms[0];

        const userData = database.find((user) => user.username === email.value);
            // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
              // Invalid password
              setErrorMessages({ name: "pass", message: errors.pass });
            } else {
              setIsSubmitted(true);
            }
          } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
          }
        };


        const renderForm = (
            <div className="form">
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
                  <Button3 onClick={openModal}>Forgot Password?</Button3>
                  <Modal showModal={showModal} setShowModal={setShowModal} />
                </div>
              </form>
            </div>
          );
  
  return (
    <GridContainer>
        <FormContainer>
            <div className="login-form">
                <Link to="/" style={{textDecoration: "none"}}>
                    <Title>Login</Title>
                </Link>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>

        </FormContainer>
    </GridContainer>
  )
}

export default Login






