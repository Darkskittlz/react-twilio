import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  font-size: 25px;
  color: black;
`
const Login = () => {
  return (
    <GridContainer>
        <Link to="/" style={{textDecoration: "none"}}>
            <Title>Login</Title>
        </Link>

       
    </GridContainer>
  )
}

export default Login