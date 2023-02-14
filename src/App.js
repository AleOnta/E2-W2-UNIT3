import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavComponent from "./assets/components/NavComponent";
import JumbotronComponent from "./assets/components/Jumbotron";
import BookList from "./assets/components/BookList";
import FooterComponent from "./assets/components/FooterComponent";
import { Container } from "react-bootstrap";
import fantasy from "./assets/data/fantasy.json";

function App() {
  return (
    <>
      <NavComponent />
      <Container>
        <JumbotronComponent
          title="Welcome to my library"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam sint maiores debitis suscipit reprehenderit distinctio!"
        />

        <BookList props={fantasy} />
      </Container>
      <FooterComponent placeholder="email address" />
    </>
  );
}

export default App;
