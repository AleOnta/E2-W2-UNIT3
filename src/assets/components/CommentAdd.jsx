import { Component } from "react";
import { Form } from "react-bootstrap";

class CommentAdd extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: this.props.elementID,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDBlM2EyNDc4ZDAwMTNhMDU4MTkiLCJpYXQiOjE2NzU5NTIzNTUsImV4cCI6MTY3NzE2MTk1NX0.Ln3eAqehZAIVpPhaldSeEREpYr8LnYz8dldMcHR1EXg",
        },
      });

      if (response.ok) {
        const parsedBody = await response.json();
        alert("La tua richiesta è andata a buon fine, la risorsa è stata creata con id " + parsedBody._id);
      } else {
        console.log(response, this.state);
        alert("qualcosa è andato storto con la richiesta");
      }
    } catch (err) {
      alert("ERRORE FATALE", err);
    }
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="comment here"
            value={this.state.comment}
            onChange={(e) => {
              this.setState({
                comment: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="value">
          <Form.Label>Comment rate</Form.Label>
          <input
            type="number"
            className="form-control"
            value={this.state.rate}
            onChange={(e) => {
              this.setState({
                rate: e.target.value,
              });
            }}
          />
        </Form.Group>
        <button
          className="commentButton"
          onClick={(e) => {
            this.handleSubmit(e);
          }}
        >
          Aggiungi
        </button>
      </Form>
    );
  }
}
export default CommentAdd;
