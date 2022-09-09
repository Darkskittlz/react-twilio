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
  left: -50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  align-items: center;
  justify-items: flex-start;
  border-radius: 10px;
`;



  const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  line-height: 1.8;
  position: fixed;

  h1 {
    display: flex;
    color: black;
    font-size: 12px;
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
  top: -50px;
  color: black;
  right: 0;
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
                <input type="email" placeholder="test@breezeline.com" style={{textAlign: "center"}}/>
                <Button>Submit</Button>
              </ModalContent>
              <CloseModalButton
                aria-lable="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};