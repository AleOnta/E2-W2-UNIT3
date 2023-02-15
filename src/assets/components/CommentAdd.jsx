import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const CommentAdd = (props) => {
  const [toPost, setToPost] = useState({
    comment: "",
    rate: "",
    elementId: "",
  });

  const toPostModify = (property, value) => {
    setToPost({ ...toPost, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(toPost),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDBlM2EyNDc4ZDAwMTNhMDU4MTkiLCJpYXQiOjE2NzU5NTIzNTUsImV4cCI6MTY3NzE2MTk1NX0.Ln3eAqehZAIVpPhaldSeEREpYr8LnYz8dldMcHR1EXg",
        },
      });

      if (response.ok) {
        const parsedBody = await response.json();
        alert("La richiesta è andata a buon fine, il commento è stato aggiunto con id " + parsedBody._id);
      } else {
        alert("qualcosa è andato storto con la richiesta");
      }
    } catch (err) {
      alert("ERRORE FATALE", err);
    }
  };

  useEffect(() => {
    toPostModify("elementId", props.asin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your comment</Form.Label>
        <Form.Control
          type="text"
          className="comment"
          placeholder="comment here"
          value={toPost.comment}
          onChange={(e) => {
            toPostModify("comment", e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="value">
        <Form.Label>Comment rate</Form.Label>
        <input
          type="number"
          className="form-control comment"
          value={toPost.rate}
          onChange={(e) => {
            toPostModify("rate", e.target.value);
          }}
        />
      </Form.Group>
      <button
        className="commentButton"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Aggiungi
      </button>
    </Form>
  );
};

export default CommentAdd;
