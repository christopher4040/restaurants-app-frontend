import { useContext, useState, useEffect } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Home from "./index";
import Layout from "../components/layout";
import Cookie from "js-cookie";

function MyApp(props) {
  var { cart, addItem, removeItem } = useContext(AppContext);
  const [state, setState] = useState({ cart: cart });
  const [dishes, setDishes] = useState([]);
  const { Component, pageProps } = props;
  let [user, setUser] = useState(null);
  let [totalItems, setTotalItems] = useState(0);
  let [restaurant, setRestaurant] = useState({});
  
  // useEffect(() => {
  //   // console.log(state.cart.total === 0)
  //   if (state.cart.total > 0) {
  //     window.localStorage.setItem('CART', JSON.stringify(state.cart));
  //   }
  // }, [state.cart]);

  // useEffect(() => {
  //   const data = window.localStorage.getItem('CART');
  //   // console.log("Data ::::::::" + data)
  //   if ( data !== null ) setState({ cart: JSON.parse(data)});
  // }, [])
  
  addItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    let foundItem = true;
    if (items.length > 0) {
      foundItem = items.find((i) => i.id === item.id);

      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }
    // console.log(`Found Item value: ${JSON.stringify(foundItem)}`);
    // if item is not new, add to cart, set quantity to 1
    if (!foundItem) {
      //set quantity property to 1

      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [...state.cart.items, temp],
        total: state.cart.total + item.attributes.price,
      };
      setState({ cart: newCart });
      // console.log(`Total items: ${JSON.stringify(newCart)}`);
    } else {
      // we already have it so just increase quantity ++
      console.log("Adding to cart");
      console.log(state.cart.items);
      newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity + 1 });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.attributes.price,
      };
    }
    setState({ cart: newCart }); // problem is this is not updated yet
    setTotalItems((totalItems += 1));
    console.log(`state reset to cart:${JSON.stringify(state)}`);
  };
  removeItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    const foundItem = items.find((i) => i.id === item.id);
    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity - 1 });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.attributes.price,
      };
      //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log(`Try remove item ${JSON.stringify(foundItem)}`);
      const index = items.findIndex((i) => i.id === foundItem.id);
      items.splice(index, 1);
      var newCart = { items: items, total: state.cart.total - item.price };
    }
    setTotalItems((totalItems -= 1));
    setState({ cart: newCart });
  };

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        dishes: dishes,
        addItem: addItem,
        removeItem: removeItem,
        isAuthenticated: false,
        user: user,
        setUser: setUser,
        totalItems: totalItems,
        restaurant: restaurant,
        setRestaurant: setRestaurant,
      }}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
