import styled from "styled-components";
import { EditLectureForm } from "../components/EditLectureForm";

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

export function EditLecture() {
  return (
    <Container>
      <FormContainer>
        <EditLectureForm />
      </FormContainer>
    </Container>
  );
}
