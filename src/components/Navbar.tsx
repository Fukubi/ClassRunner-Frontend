import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #1C1C1C;
`;

export function Navbar() {
  return (
    <Container>
      <h1>ClassRunner</h1>

      <div>
        <p>Home</p>
      </div>
    </Container>
  );
}
