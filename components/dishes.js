import { gql, useQuery, q } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
} from "reactstrap";


function Dishes({ restaurantID, search }) {
  

  const GET_RESTAURANT_DISHES = gql`
    query ($id: ID!) {
      restaurant(id: $id) {
        id
        name
        dishes {
          id
          name
          description
          price
          image {
            url
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restaurantID },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const { addItem } = useContext(AppContext);

  const router = useRouter();

  let restaurant = data.restaurant;
  console.log(search + ' :: ' + restaurant.dishes)
  let searchQuery =
    restaurant.dishes.filter((res) => {
      return res.name.toLowerCase().includes(search);
    }) || [];

  if (searchQuery.length > 0) {
    return (
      <>
      
          {searchQuery.map((res) => (
            <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
              <Card style={{ margin: "0 10px", height: "100%" }}>
                <Container style={{ display: "flex", paddingLeft: "0px"}}>
                <CardImg
                  top={true}
                  style={{ height: 150, width: 150 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                  <CardTitle style={{ margin: "20px 10px" }}><h5>{res.name}</h5><h5>Price: <a style={{color: "#0d6efd"}}>${res.price}</a></h5></CardTitle>
                </Container>
                

                <CardBody>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer text-end">
                  <Button outline color="primary" onClick={() => addItem(res)}>
                    + Add To Cart
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
      </>
    );
  } else {
    return <h1>No Dishes</h1>;
  }
}
export default Dishes;
