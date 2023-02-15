import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBookAsClass from "./SingleBookAsClass";

const BookList = (props) => {
  const [query, setQuery] = useState("");
  const [currentElement, setCurrentElement] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // const switchLoad = () => {
  //   setIsLoading(false)
  // }

  const filterBookList = (e) => {
    setQuery(e.target.value);
  };

  const asinRevealer = (asin) => {
    const actualAsin = asin;
    setCurrentElement(actualAsin);
    console.log(currentElement);
  };

  return (
    <>
      <Row className="align-items-center justify-content-center mb-3">
        <label style={{ fontSize: 1 + "em", backgroundColor: "inherit" }} className="m-0">
          Cerca i tuoi libri:
        </label>
        <input
          type="text"
          className="m-0"
          placeholder="The witcher, Eragon..."
          onChange={(event) => filterBookList(event)}
        />
      </Row>
      <Row className="justify-content-center">
        <Col xs={8}>
          <Row>
            {props.props
              .filter((books) => {
                return books.title.toLowerCase().includes(query.toLocaleLowerCase());
              })
              .map((book) => {
                return (
                  <SingleBookAsClass
                    key={book.asin}
                    data={book}
                    status={asinRevealer}
                    currentElement={currentElement}
                  />
                );
              })}
          </Row>
        </Col>
        <Col xs={4}>
          <CommentArea asin={currentElement} load={isLoading} loadSet={setIsLoading} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
