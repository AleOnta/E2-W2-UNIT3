import { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <ListGroup variant="flush">
        <ListGroupItem className="p-0">
          <div className="d-flex justify-content-between align-items-center commentContainer">
            <span>
              <strong>COMMENT</strong>
            </span>
            <span>
              <strong>RATE</strong>
            </span>
          </div>
        </ListGroupItem>
        {this.props.data.map((comment, index) => {
          return (
            <ListGroupItem className="commentElement d-flex justify-content-start" key={index}>
              <div className="d-flex justify-content-around align-items-center commentContainer">
                <span className="textComment">{comment.comment}</span>
                <span className="textRate">{comment.rate}</span>
              </div>
              <Button variant="danger" className="deleteButton">
                Delete
              </Button>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentList;
