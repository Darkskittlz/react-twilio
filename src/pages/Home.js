import React, {useState} from 'react'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'
import { Modal } from "../components/modal";


const GridContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`

const HomeContainer = styled.div`
    backdrop-filter: blur(20px);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    text-decoration: none;
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
    text-decoration: none;
    color: white;
    cursor: pointer;
`

const Button3 = styled.h2`
    color: blue;
    margin-top: 20px;
    font-size: 19px;
    cursor: pointer;
`

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal((prev) => !prev);
    };
  return (
    <GridContainer>
        <HomeContainer>
            <Link to="/" style={{textDecoration: "none"}}>
                <Title>Breezeline Auth</Title>
            </Link>
            <ButtonContainer>
                <Link to="/Login" style={{textDecoration: "none"}}>
                    <Button>Login</Button>
                </Link>
                <Link to="/Create" style={{textDecoration: "none"}}>
                    <Button2>Create Account</Button2>
                </Link>
            </ButtonContainer>
            <Button3 onClick={openModal}>Forgot Password?</Button3>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </HomeContainer>
    </GridContainer>
  )
}

export default Home