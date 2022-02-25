import { FaDiscord, FaWhatsapp } from "react-icons/fa";

import styled from "styled-components";
import { Lecture } from "../models/Lecture";

type LectureCardProps = {
  lecture: Lecture;
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 250px;
  border: 0;

  padding-bottom: 15px;

  box-shadow: 5px 2px 15px #383838;

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-top: 20px;

    h1 {
      color: #b8405e;
      padding: 0;
      margin: 0;
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
      justify-content: center;

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

export function LectureCard({ lecture }: LectureCardProps) {
  return (
    <Card>
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
