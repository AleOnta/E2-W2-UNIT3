import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBookAsClass from "./SingleBookAsClass";

class BookList extends Component {
  state = {
    query: "",
    currentElement: "",
  };

  filterBookList(e) {
    this.setState({
      query: e.target.value,
    });
    console.log(this.state.query);
  }

  asinRevealer = (asin) => {
    const actualAsin = asin;
    this.setState({ currentElement: actualAsin });
  };

  render() {
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
            onChange={(event) => this.filterBookList(event)}
          />
        </Row>
        <Row className="justify-content-center">
          <Col xs={8}>
            <Row>
              {this.props.props
                .filter((books) => {
                  return books.title.toLowerCase().includes(this.state.query.toLocaleLowerCase());
                })
                .map((book) => {
                  return (
                    <SingleBookAsClass
                      key={book.asin}
                      data={book}
                      status={this.asinRevealer}
                      currentElement={this.state.currentElement}
                    />
                  );
                })}
            </Row>
          </Col>
          <Col xs={4}>
            <CommentArea asin={this.state.currentElement} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
