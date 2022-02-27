import React from "react";
import { FaDiscord, FaWhatsapp, FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Lecture } from "../models/Lecture";
import { Button } from "./Button";

type LectureCardProps = {
  lecture: Lecture;
  onDeletedHandle: (lecture?: Lecture) => void;
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  border: 0;

  padding-bottom: 15px;

  box-shadow: 5px 2px 15px #383838;

  margin-right: 40px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-top: 20px;

    h1 {
      color: #b8405e;
      padding: 0;
      margin: 0;
      max-width: 200px;
    }
  }

  .actions-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  
    width: 100%;

    button {
      display: flex;
      justify-content: start;
      align-items: flex-start;
      border: 0;
      background-color: #fff;

      margin: 0;
    }

    button:hover {
      cursor: pointer;
      background-color: #fff;
    }
  }

  .details-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 0px 0 20px;

    margin-top: 15px;

    .links {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      a {
        color: #383838;
        transition: 300ms;

        :first-child {
          margin-right: 20px;
        }

        :hover {
          color: #b8405e;
        }
      }
    }
  }
`;

export function LectureCard({ lecture, onDeletedHandle }: LectureCardProps) {
  const navigate = useNavigate();

  function onDeleteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    fetch(`http://localhost:5000/lectures/${lecture.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => onDeletedHandle())
      .catch((err) => console.log(err));
  }

  return (
    <Card>
      <div className="actions-container">
        <Button handleClick={onDeleteClick}>
          <FaTrashAlt color="red" size={30} />
        </Button>

        <Button handleClick={() => navigate("/edit-lecture", { state: { lecture } })}>
          <FaPencilAlt color="yellow" size={30} />
        </Button>
      </div>

      <div className="title">
        <h1>{lecture.class_name}</h1>
        <span>By {lecture.creator_name}</span>
      </div>

      <div className="details-container">
        <p>{lecture.description}</p>

        <div className="links">
          {lecture.dc_server_link && (
            <a
              href={lecture.dc_server_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={40} />
            </a>
          )}

          {lecture.wa_group_link && (
            <a
              href={lecture.wa_group_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={40} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
