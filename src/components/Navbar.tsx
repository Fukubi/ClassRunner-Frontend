import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #1c1c1c;
  padding: 0 20px;

  h1 {
    color: #2eb086;
  }

  .link-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .link-container a {
    color: #fff;
    text-decoration: none;

    margin-right: 15px;

    transition: 350ms;
  }

  .link-container a:last-child {
    margin-right: 0;
  }

  .link-container a:hover {
    color: #2eb086;
  }
`;

export function Navbar() {
  return (
    <Container>
      <h1>ClassRunner</h1>

      <div className="link-container">
        <Link to="/">Home</Link>

        <Link to="/classes">Classes</Link>

        <Link to="/about">About</Link>

        <a
          href="https://github.com/Fukubi/ClassRunner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub size={30} />
        </a>
      </div>
    </Container>
  );
}
