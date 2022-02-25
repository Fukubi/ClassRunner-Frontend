import styled from "styled-components";

import { useQuery } from "react-query";
import { LectureCard } from "../components/LectureCard";
import { Lecture } from "../models/Lecture";

const Container = styled.div`
  padding: 20px 0px 20px 20px;
`;

export function Classes() {
  const { isLoading, error, data } = useQuery<boolean, string, Lecture[]>(
    "lecturesList",
    () =>
      fetch("http://localhost:5000/lectures", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .catch((err) => err)
  );

  if (isLoading) return <p>Loading lectures...</p>;

  if (error) return <p>Error while trying to get the lectures: {error}</p>;

  return (
    <Container>
      {data ? (
        data.map((lecture) => (
          <LectureCard lecture={lecture} key={lecture.id} />
        ))
      ) : (
        <p>We don't have any lectures registered</p>
      )}
    </Container>
  );
}
