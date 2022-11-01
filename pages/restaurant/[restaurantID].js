import { useQuery } from "@apollo/client";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Dishes from "../../components/dishes";
import { Container, Row } from "reactstrap";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { InputGroup, InputGroupText, Input } from "reactstrap";
import AppContext from "../../components/context";

function Restaurant() {
  const router = useRouter();
  const restaurantID = router.query.restaurantID;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(`URL: ${API_URL}`);
  const [query, setQuery] = useState("");
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });
  const {restaurant, setRestaurant} = useContext(AppContext);

  // useEffect(() => {
  //   window.localStorage.setItem('RESTAURANT', JSON.stringify(restaurant));
  // }, [restaurant])
  useEffect(() => {
    console.log(":::::: Restaurant ::::::")
    console.log(restaurant)
    // const data = window.localStorage.getItem('RESTAURANT');
    // console.log("Data ::::::::" + data)
    // if ( data !== null ) setRestaurant(JSON.parse(data));
  }, [])

  const renderDishes = () => {
    return <Dishes restaurantID={restaurantID} search={query}></Dishes>
  };

  return (
    <ApolloProvider client={client}>
      <Container style={{ display: "flex", marginTop: "20px" }}>
        <a style={{ alignSelf: "center" }} href="javascript:void(0)" onClick={() => {setRestaurant({}), router.push("/")}}>
          <ion-icon
            size="large"
            name="arrow-back-outline"
            style={{
              color: "rgba(0,0,0,.8)",
              fontSize: "26px",
              marginRight: "15px",
              marginTop: "4px",
              paddingTop: "3px",
            }}
          ></ion-icon>
        </a>
        <h3 style={{ marginTop: "10px", marginLeft: 0, color: "rgba(0,0,0,.8)" }}>{restaurant.name}</h3>
      </Container>
      <Container>
        <h3></h3>
      </Container>
      <Container className="mt-5">
      <div className="search my-5">
        <h6 className="text-center">Search for dishes from {restaurant.name}</h6>
        <InputGroup className="mx-auto" style={{ maxWidth: "600px" }}>
          <InputGroupText addontype="append"> Search </InputGroupText>
          <Input
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup>
      </div>
      {/* <Row xs="3">{renderDishes()}</Row> */}

      </Container>
    </ApolloProvider>
  );
}

export default Restaurant;
