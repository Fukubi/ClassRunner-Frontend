import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  
  button {
    margin-right: 10px;
  }
`;

export function Toolbar() {
  const navigate = useNavigate();

  function onClickNewLecture() {
    navigate("/new-lecture")
  }

  return (
    <Container>
      <Button text="New Lecture" handleClick={onClickNewLecture} />
    </Container>
  );
}
