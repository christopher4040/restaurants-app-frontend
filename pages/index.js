import React, { useState } from "react";
// import Cart from "../components/cart";
// import Dishes from "../components/dishes";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import RestaurantList from "../components/restaurantList";
import { InputGroup, InputGroupText, Input, Container } from "reactstrap";

function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(`URI: ${API_URL}/graphql`);
  const [query, setQuery] = useState("");
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });

  return (
    <ApolloProvider client={client}>
      <Container style={{ display: "flex", marginTop: "20px" }}>
        
        <h3 style={{ marginTop: "10px", marginLeft: 0, color: "rgba(0,0,0,.8)" }}>Restaurants</h3>
      </Container>
      <div className="search my-5">
        <h6 className="text-center">Search for restaurants</h6>
        <InputGroup className="mx-auto" style={{ maxWidth: "600px" }}>
          <InputGroupText addontype="append"> Search </InputGroupText>
          <Input
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup>
      </div>
      <RestaurantList className="my-5" style={{textAlign: "center"}} search={query}/>
      
    </ApolloProvider>
  );
}
export default Home;
