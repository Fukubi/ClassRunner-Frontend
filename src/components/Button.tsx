import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  max-width: 150px;
  height: 40px;

  background-color: #313552;
  color: #FFF;
  border: 0;
  border-radius: 20px;

  padding: 10px;

  transition: 350ms;

  :hover {
    background-color: #2EB086;
    cursor: pointer;
  }
`

type ButtonProps = {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: ButtonProps) {
  return (
    <Btn onClick={props.handleClick}>{props.text}</Btn>
  )
}