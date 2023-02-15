import { ListGroup, ListGroupItem, Button, Spinner } from "react-bootstrap";

const CommentList = (props) => {
  const commentDelete = async (toDelete) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${toDelete}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDBlM2EyNDc4ZDAwMTNhMDU4MTkiLCJpYXQiOjE2NzU5NTIzNTUsImV4cCI6MTY3NzE2MTk1NX0.Ln3eAqehZAIVpPhaldSeEREpYr8LnYz8dldMcHR1EXg",
        },
      });

      if (response.ok) {
        alert(`Il commento con ID: ${toDelete}, è stato eliminato con successo.`);
        props.loadSet(false);
      } else {
        console.log("qualche altro errore");
      }
    } catch (error) {
      alert("errore fatale", error);
    }
  };

  return (
    <ListGroup variant="flush">
      <ListGroupItem className="p-0">
        <div className="d-flex justify-content-between align-items-center commentContainer one">
          <span>
            <strong>COMMENT</strong>
          </span>
          <span>
            <strong>RATE</strong>
          </span>
        </div>
      </ListGroupItem>
      {/* {props.load === true ? (
        <div className="d-flex justify-content-around align-items-center my-4">
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </div>
      ) : (
        <></>
      )} */}

      {props.data.map((comment, index) => {
        return (
          <ListGroupItem className="commentElement d-flex justify-content-between" key={index}>
            <div className="d-flex justify-content-start align-items-center commentContainer">
              <span className="textComment">{comment.comment}</span>
              <span className="textRate">{comment.rate}</span>
            </div>
            <Button
              variant="danger"
              className="deleteButton "
              onClick={() => {
                commentDelete(comment._id);
              }}
            >
              Delete
            </Button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default CommentList;
