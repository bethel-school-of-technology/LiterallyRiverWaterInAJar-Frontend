import React from 'react';
import { Jumbotron as Jumbo, Container } from "react-bootstrap"
import "./Jumbotron.css"

const Jumbotron = () => (
  <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    <Container>
      <h1 className="h1White">Products</h1>
      <p>Choose That River</p>
    </Container>
  </Jumbo>
)

export default Jumbotron;