import { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

class JumbotronComponent extends Component {
  render() {
    return (
      <Jumbotron className="my-3 p-2">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default JumbotronComponent;
