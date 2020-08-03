import React, { useState, useEffect } from "react";
import Product from "./Product";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Jumbotron from "../components/JumboProduct";
import { Container } from "react-bootstrap";

const Products = ({ match }) => {
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/inventory/products")
      .then((data) => data.json())
      .then((data) => {
        setInventoryList(data.inventory);
        // console.log(data);
      });
  }, []);

  let displayInventory = inventoryList.map((inventory, index) => {
    return (
      <li key={index}>
        <Link to={`${match.url}/${inventory.id}`}>{inventory.name}</Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      <Jumbotron />
    <Container>
    <div>
      <h2>Our Different Kinds Of River Water That You Can Get</h2>
      <ul>{displayInventory}</ul>
      <Route path={`${match.url}/:productId`} component={Product} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select some river water.</h3>}
      />
    </div>
      </Container>
    </React.Fragment>
  );
};

export default Products;
