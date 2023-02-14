import { Col, Card } from "react-bootstrap";

const SingleBookAsClass = (props) => {
  return (
    <>
      <Col
        xs="4"
        lg="3"
        className="p-2 d-flex justify-content-center cardContainer"
        onClick={() => {
          props.status(props.data.asin);
        }}
      >
        <Card className={props.data.asin === props.currentElement ? "active" : "inactive"}>
          <Card.Img variant="top" src={props.data.img} className="cardImage" />
          <Card.Body>
            <Card.Title className="cardTitle">{props.data.title}</Card.Title>
            <Card.Text className="cardCategory">
              <span>Category: </span>
              {props.data.category}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleBookAsClass;
