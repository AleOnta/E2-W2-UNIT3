import { Component } from "react";
import CommentList from "./CommentList";
import CommentAdd from "./CommentAdd";

class CommentArea extends Component {
  state = {
    commentRes: [],
  };

  retrieveComment = async (asin) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDBlM2EyNDc4ZDAwMTNhMDU4MTkiLCJpYXQiOjE2NzU5NTIzNTUsImV4cCI6MTY3NzE2MTk1NX0.Ln3eAqehZAIVpPhaldSeEREpYr8LnYz8dldMcHR1EXg",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          commentRes: data,
        });
      } else {
        alert("errore nel caricamento dei contenuti");
      }
    } catch (error) {
      alert("c'è stato un errore:", error.message);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.retrieveComment(this.props.asin);
    }
  }

  render() {
    return (
      <>
        <CommentList data={this.state.commentRes} />
        <CommentAdd elementID={this.props.asin} />
      </>
    );
  }
}

export default CommentArea;
