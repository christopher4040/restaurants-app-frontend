/* /context/AppContext.js */

import React from "react";
// create auth context with default value

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = React.createContext(
    {isAuthenticated:true, 
        cart: {items:[], 
        total:0},
        dishes: [],
        addItem:()=>{},
        removeItem:()=>{},
        clearCart:()=> {},
        user:false, 
        setUser:()=>{},
        totalItems:0,
        restaurant: {},
        setRestaurant: ()=>{},
    });
export default AppContext;