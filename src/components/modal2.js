import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  top: 50%;
  display: flex;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  justify-items: flex-start;
  border-radius: 10px;
`;



const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(30px);
  line-height: 1.2;
  position: fixed;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;

  h1 {
    display: flex;
    color: #ffffff;
    font-size: 22px;
    background-color: #000000;
    box-shadow: 0 0 20px #000000;
    padding: 10px;
    border-radius: 10px;
  }

  h2 {
    color: black;
    font-size: 12px;
  }



  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: black;
  top: -160px;
  left: 190px;
  height: 20px;
  padding: 0;
  z-index: 10;
`;

const Button = styled.button`
  background-color: #ffffff;
`

export const Modal2 = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );


  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>Aux Auth</h1>
                <div className="input-container">
                    <label>Account # </label>
                    <input 
                      type="text"
                      name="AccountNum"
                      id="accountNum"
                      required 
                      onChange={(event) => setAccountNum(event.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label>Address</label>
                    <input 
                      type="text"
                      name="AccountNum"
                      id="accountNum"
                      required 
                      onChange={(event) => setAccountNum(event.target.value)}
                    />
                </div>
                <Button>Submit</Button>
              </ModalContent>
              {/* <CloseModalButton
                aria-lable="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              /> */}
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};