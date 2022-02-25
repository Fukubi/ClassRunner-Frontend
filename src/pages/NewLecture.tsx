import styled from "styled-components";

import { NewLectureForm } from "../components/NewLectureForm";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 20px;
`;

const FormContainer = styled.div`
  width: 40%;
`;

export function NewLecture() {
  return (
    <Container>
      <FormContainer>
        <NewLectureForm />
      </FormContainer>
    </Container>
  );
}
