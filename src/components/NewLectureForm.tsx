import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Lecture } from "../models/Lecture";

import { Button } from "./Button";
import { InputArea } from "./InputArea";
import { InputText } from "./InputText";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 15px;
  }

  .group {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
    width: 100%;

    input {
      margin-bottom: 0;
    }
  }

  button {
    width: 100%;
  }
`;

export function NewLectureForm() {
  const [className, setClassName] = useState<string>("");
  const [creatorName, setCreatorName] = useState<string>("");
  const [dcServerLink, setDcServerLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [waGroupLink, setWaGroupLink] = useState<string>("");

  const navigate = useNavigate();

  function onSaveLecture(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    let lecture: Lecture = {
      class_name: className,
      creator_name: creatorName,
      dc_server_link: dcServerLink,
      description: description,
      phone_number: phoneNumber,
      wa_group_link: waGroupLink,
    };

    fetch("http://localhost:5000/lectures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lecture),
    })
      .then(() => {
        navigate("/classes");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <InputText
        label="Lecture name"
        onChange={(e) => setClassName(e.target.value)}
        type="text"
        value={className}
        required={true}
      />

      <InputText
        label="Lecture creator name"
        onChange={(e) => setCreatorName(e.target.value)}
        type="text"
        value={creatorName}
        required={true}
      />

      <InputArea
        label="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required={true}
      />

      <InputText
        label="Phone number"
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="tel"
        value={phoneNumber}
        required={true}
      />

      <div className="group">
        <InputText
          label="Discord"
          onChange={(e) => setDcServerLink(e.target.value)}
          type="url"
          size="45%"
          value={dcServerLink}
        />

        <InputText
          label="Whatsapp"
          onChange={(e) => setWaGroupLink(e.target.value)}
          type="url"
          size="45%"
          value={waGroupLink}
        />
      </div>

      <Button text="Save Lecture" handleClick={onSaveLecture} />
    </Container>
  );
}
