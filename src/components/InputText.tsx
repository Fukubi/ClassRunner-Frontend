import React from "react";
import styled from "styled-components";

type InputTextProps = {
  label: string;
  type: string;
  value: string;
  size?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: large;
    color: #313552;
  }

  input {
    height: 30px;
    border: 1px solid #313552;
    border-radius: 5px;
    font-size: medium;
  }
`;

export function InputText(props: InputTextProps) {
  function getVariableName(variable: string | number) {
    return Object.keys(variable)[0];
  }

  return (
    <Container style={{ width: props.size ? props.size : "100%" }}>
      <label htmlFor={getVariableName(props.value)}>{props.label}</label>
      <input
        type={props.type}
        name={getVariableName(props.value)}
        id={getVariableName(props.value)}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </Container>
  );
}
