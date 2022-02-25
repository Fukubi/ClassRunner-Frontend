import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 150px;
  height: 40px;

  background-color: #313552;
  color: #fff;
  border: 0;
  border-radius: 20px;

  padding: 10px;

  transition: 350ms;

  :hover {
    background-color: #2eb086;
    cursor: pointer;
  }
`;

type ButtonProps = {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button(props: ButtonProps) {
  return <Btn onClick={props.handleClick}>{props.text}</Btn>;
}
