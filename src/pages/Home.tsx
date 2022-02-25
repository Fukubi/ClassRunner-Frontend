import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";

import homeImage from "../images/home_image.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  padding: 25px 0;

  button {
    margin-top: 50px;
  }
`;

const ImagePhraseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .text-container {
    padding: 30px;

    p {
      font-size: large;
      width: 500px;
    }
  }
`;

export function Home() {
  const navigate = useNavigate();

  function onCheckClassesClick() {
    navigate("/classes");
  }

  return (
    <Container>
      <ImagePhraseContainer>
        <img src={homeImage} alt="ClassRunner" width={340} />

        <div className="text-container">
          <p>
            ClassRunner is a opensource application used to help to spread
            knowledge to the world
          </p>
        </div>
      </ImagePhraseContainer>

      <Button handleClick={onCheckClassesClick} text="Check Classes" />
    </Container>
  );
}
