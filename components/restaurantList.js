import { gql, useQuery } from "@apollo/client";
// import Dishes from "./dishes";
import { useContext, useEffect, useState } from "react";
import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import router, { useRouter } from "next/router";

function RestaurantList(props) {
  const { restaurant, setRestaurant, dishes } = useContext(AppContext);
  console.log(dishes);
  const [restaurantID, setRestaurantID] = useState(-1);

  useEffect(() => {
    if (Object.keys(restaurant).length > 0) {
      window.localStorage.setItem("RESTAURANT", JSON.stringify(restaurant));
      router.push("/restaurant/" + restaurant.id);
    }
  }, [restaurant]);

  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        data {
          id
          attributes {
            name
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

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

  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error fetching data</p>;
  }
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`);

  let searchQuery =
    data.restaurants.filter((res) => {
      return res.name.toLowerCase().includes(props.search);
    }) || [];

  const handleRestaurant = (res) => {
    // setRestaurantID(resID)
    setRestaurant(res);
    // router.push(restaurantID)
  };

  // define renderer for Dishes
  // const renderDishes = () => {
  //   const { loadingDishes, errorDishes, dataDishes } = useQuery(GET_RESTAURANT_DISHES, {
  //     variables: { id: restaurantID},
  //   });
  //   if (loadingDishes) return <p>Loading...</p>;
  //   if (errorDishes) return <p>ERROR</p>;
  //   if (!dataDishes) return <p>Not found dishes</p>;

  //   console.log(`Dishes: ${dataDishes}`);
  // };

  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col style={{ textAlign: "center" }} xs="12" sm="6" lg="4" key={res.id}>
        <Button
          onClick={() => {
            handleRestaurant(res);
            // setRestaurantID(res.id)
          }}
          className="p-0 border-0"
        >
          <Card
            color="light"
            style={{
              minWidth: "245px",
              maxWidth: "275px",
            }}
          >
            <CardImg
              top={true}
              style={{ height: 200 }}
              src={`http://localhost:1337` + res.image.url}
            />

            {/* <div className="card-footer text-center">
              <Button
                color="primary"
                className="w-75"
                onClick={() => {
                  setRestaurantID(res.id), toggle();
                }}
              >
                {res.name}
              </Button> */}

            {/* <Modal isOpen={dishesModal} toggle={() => handleShowModal(false)}>
                <ModalHeader toggle={() => handleShowModal(false)} close={closeBtn}>
                  {rest.length != 0 ? rest[0].name : ""}
                </ModalHeader>
                <ModalBody>
                  <span style={{ color: "rgba(0,0,0,.6)" }}>
                    {rest.length != 0 ? rest[0].description : ""}
                  </span>
                  <br />
                  <br />
                  <Row xs="3">{renderDishes(restaurantID)}</Row>
                </ModalBody>
              </Modal> */}
            {/* </div> */}
          </Card>
        </Button>
      </Col>
    ));

    return (
      <Container>
        <Row xs="3">{restList}</Row>
        <br />
        <br />
        <br />
        {/* <Row xs="3">{renderDishes(restaurantID)}</Row> */}
      </Container>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}
export default RestaurantList;
