import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const CommentList = (props) => {
  return (
    <ListGroup variant="flush">
      <ListGroupItem className="p-0">
        <div className="d-flex justify-content-between align-items-center commentContainer one">
          <span>
            <strong className="d-flex align-self-start">COMMENT</strong>
          </span>
          <span>
            <strong>RATE</strong>
          </span>
        </div>
      </ListGroupItem>
      {props.data.map((comment, index) => {
        return (
          <ListGroupItem className="commentElement d-flex justify-content-start" key={index}>
            <div className="d-flex justify-content-around align-items-center commentContainer">
              <span className="textComment">{comment.comment}</span>
              <span className="textRate">{comment.rate}</span>
            </div>
            <Button variant="danger" className="deleteButton align-self-end">
              Delete
            </Button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default CommentList;
