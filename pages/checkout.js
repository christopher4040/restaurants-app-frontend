/* pages/checkout.js */

import React, { useContext } from "react";
import { useState } from "react";
import { Row, Col, Alert, Container } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";
import { useRouter } from "next/router";

function Checkout() {
  // get app context
  const { isAuthenticated, cart } = useContext(AppContext);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;

  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51LoFubCzea9b9xKE6OpaRDNrsWTWSE12ZiaADgAx8tb39QnKzAdOeo8v2IZ1FFJX3GDF7G9CJ3c1zSv3gbQmQGPp00CUlarmgA"
  );

  return (
    <>
    
      <Alert isOpen={success} color="success">
        Order processed successfully!
      </Alert>
      <Container style={{ display: "flex", marginTop: "20px" }}>
        <a style={{ alignSelf: "center" }} href="javascript:void(0)" onClick={() => router.push("/#")}>
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
        <h3 style={{ marginTop: "10px", marginLeft: 0, color: "rgba(0,0,0,.8)" }}>Checkout</h3>
      </Container>

      <Row>
        <Col
          style={{
            alignItems: "center",
            aligItems: "center",
            padding: "1px 4rem",
          }}
          sm={{ size: 6, order: 1 }}
        >
          <Cart />
        </Col>
        { cart.total > 0 ? 
    <>
    <Col style={{ paddingLeft: 5, maxWidth: "570px", margin: "auto" }} sm={{ size: 6, order: 2 }}>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              loading={loading}
              setLoading={setLoading}
              setSuccess={setSuccess}
            />
          </Elements>
        </Col>
    </> : <></> }
        
      </Row>
    </>
  );
  // }
}
export default Checkout;
