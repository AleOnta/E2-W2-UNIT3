import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import CommentAdd from "./CommentAdd";

const CommentArea = (props) => {
  const [commentRes, setCommentRes] = useState([]);

  const retrieveComment = async (asin) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin === "" ? "nope" : asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDBlM2EyNDc4ZDAwMTNhMDU4MTkiLCJpYXQiOjE2NzU5NTIzNTUsImV4cCI6MTY3NzE2MTk1NX0.Ln3eAqehZAIVpPhaldSeEREpYr8LnYz8dldMcHR1EXg",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setCommentRes(data);
      } else {
        alert("errore nel caricamento dei contenuti");
      }
    } catch (error) {
      alert("c'è stato un errore:", error.message);
    }
  };

  useEffect(() => {
    retrieveComment(props.asin);
  }, [props]);

  return (
    <>
      <CommentList data={commentRes} load={props.load} loadSet={props.loadSet} />
      <CommentAdd asin={props.asin} />
    </>
  );
};

export default CommentArea;
