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


const Create = () => {
  return (
    <GridContainer>
        <Link to="/" style={{textDecoration: "none"}}>
            <Title>Create Account</Title>
        </Link>
       
    </GridContainer>
  )
}

export default Create