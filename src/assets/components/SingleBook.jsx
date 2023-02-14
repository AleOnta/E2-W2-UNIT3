import { Col, Card } from "react-bootstrap";

const SingleBook = ({ data }) => (
  <>
    <Col xs="4" lg="3" className="p-0 mb-3 d-flex justify-content-center cardContainer">
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={data.img} className="cardImage" />
        <Card.Body>
          <Card.Title className="cardTitle">{data.title}</Card.Title>
          <Card.Text className="cardCategory">
            <span>Category: </span>
            {data.category}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </>
);

export default SingleBook;
