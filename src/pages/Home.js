import React from 'react'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'


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

const Title2 = styled.h2`
    text-align: center;
    font-size: 15px;
    margin-top: 5%;
    color: blue;
`

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 5%;
    align-content: center;
    justify-content: center;
    grid-gap: 20px;
`

const Button = styled.button`
    width: 200px;
    border-radius: 10px;
    border: none;
    display: flex;
    padding: 20px;
    align-content: center;
    justify-content: center;
    background-color: red;
    color: white;
    cursor: pointer;
`

const Button2 = styled.button`
    width: 200px;
    display: flex;
    border-radius: 10px;
    border: none;
    padding: 20px;
    align-content: center;
    justify-content: center;
    background-color: blue;
    color: white;
    cursor: pointer;
`

const Home = () => {
  return (
    <GridContainer>
        <Link to="/" style={{textDecoration: "none"}}>
            <Title>Breezeline Auth</Title>
        </Link>
        <ButtonContainer>
            <Link to="/Login">
                <Button>Login</Button>
            </Link>
            <Link to="/Create">
                <Button2>Create Account</Button2>
            </Link>
        </ButtonContainer>
        <Title2>Forgot Your Password?</Title2>
    </GridContainer>
  )
}

export default Home