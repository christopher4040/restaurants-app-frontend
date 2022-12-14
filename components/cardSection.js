import React from "react";

import { CardElement } from "@stripe/react-stripe-js";
import { Button } from "reactstrap";

function CardSection(props) {
  function checkData() {
    console.log(props.data);
    return (
      props.data.address === "" ||
      props.data.city === "" ||
      props.data.state === "" ||
      props.stripeError !== ""
    );
  }

  return (
    <div>
      <div>
        <label htmlFor="card-element">Credit or debit card</label>

        <div>
          <fieldset style={{ border: "none" }}>
            <div className="form-row">
              <div id="card-element" style={{ width: "100%" }}>
                <CardElement
                  options={{
                    style: { width: "100%", base: { fontSize: "16px" } },
                  }}
                />
              </div>
              <br />
              <div className="order-button-wrapper">
                <Button
                  className="checkoutButton"
                  disabled={checkData()}
                  onClick={props.submitOrder}
                >
                  {" "}
                  {props.loading ? "Loading... " : "Confirm Order"}
                </Button>
              </div>
              {props.stripeError ? (
                <div>{props.stripeError.toString()}</div>
              ) : null}
              <div id="card-errors" role="alert" />
            </div>
          </fieldset>
        </div>
      </div>
      <style jsx>
        {`
          .order-button-wrapper {
            display: flex;
            width: 100%;
            align-items: flex-end;
            justify-content: flex-end;
          }
        `}
      </style>
    </div>
  );
}
export default CardSection;
