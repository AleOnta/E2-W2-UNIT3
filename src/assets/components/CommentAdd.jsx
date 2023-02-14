import { useState } from "react";
import { Form } from "react-bootstrap";

const CommentAdd = (props) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("");
  const [elementId, setElementId] = useState(props.asin);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify({ comment: comment, rate: rate, elementId: props.asin }),
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

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="comment here"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="value">
        <Form.Label>Comment rate</Form.Label>
        <input
          type="number"
          className="form-control"
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
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
