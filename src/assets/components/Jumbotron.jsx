import { Jumbotron, Button } from "react-bootstrap";

const JumbotronComponent = (props) => {
  return (
    <Jumbotron className="my-3 p-2">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default JumbotronComponent;
