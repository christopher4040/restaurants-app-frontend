import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardTitle, Table } from "reactstrap";
import AppContext from "./context";
import Link from "next/link";
import Checkout from "../pages/checkout";
// we can pass cart data in via props method
// the alternative is using useContext as below
function Cart(props) {
  // let isAuthenticated = true;
  let { cart, addItem, removeItem } = useContext(AppContext);
  const [state, setState] = useState({ cart: cart });
  let [totalItems, setTotalItems] = useState(0);

  const toggle = props.toggle;

  console.log(`in CART: ${JSON.stringify(cart)}`);

  //   problem is that cart may not be set
  const router = useRouter();
  let { items } = cart;
  console.log(`Router Path: ${JSON.stringify(router)}`);
  const renderItems = () => {
    console.log(`items: ${JSON.stringify(items)}`);
    console.log(`Total Items: ${totalItems}`);

    var itemList = cart.items.map((item) => {
      if (item.quantity > 0) {
        return (
          <>
            <Table className="m-0">
              <tbody style={{ verticalAlign: "middle" }}>
                <tr key={item.id}>
                  <td style={{ width: "0" }}>
                    <img
                      height={64}
                      src={`http://localhost:1337` + item.image.url}
                    ></img>
                  </td>
                  <td>
                    <span id="item-name">&nbsp; {item.name}</span>
                    
                    <br></br>
                    <span>&nbsp; Qty:</span>
                    <Button
                      style={{
                        height: 30,
                        padding: 0,
                        width: 20,
                        marginRight: 5,
                        marginLeft: 10,
                        fontSize: 18,
                      }}
                      onClick={() => removeItem(item)}
                      color="outline-secondary"
                    >
                      -
                    </Button>
                    <span
                      style={{ marginLeft: 5, fontSize: 18 }}
                      id="item-quantity"
                    >
                      {item.quantity}
                    </span>
                    <Button
                      style={{
                        height: 30,
                        padding: 0,
                        width: 20,
                        marginRight: 5,
                        marginLeft: 10,
                        fontSize: 18,
                      }}
                      onClick={() => addItem(item)}
                      color="outline-secondary"
                    >
                      +
                    </Button>
                    
                    
                  </td>
                  <td style={{ textAlign: "end" }}>
                    <span
                      style={{ marginLeft: 5, fontSize: 18 }}
                      id="item-quantity"
                    >
                      ${item.price * item.quantity}
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        );
      }
    });
    return itemList;
  };

  const checkoutItems = () => {
    return (
      <div>
        <Table className="my-4">
          <tbody style={{ verticalAlign: "middle", fontSize: "18px" }}>
            <tr key="total-price">
              <td style={{ width: "112px" }}></td>
              <td>
                <b>
                  <span>&nbsp;Total Price:</span>
                </b>
              </td>
              <td style={{ textAlign: "end" }}>
                <b>
                  <span>&nbsp;${cart.total}</span>
                </b>
              </td>
            </tr>
          </tbody>
        </Table>
        { router.pathname !== '/checkout' ?  
        <div className="mt-5">
        <Link href="/checkout/">
          <Button style={{ width: "100%" }} color="primary" onClick={toggle}>
            <a>Checkout</a>
          </Button>
        </Link>
      </div> : null}
        
      </div>
    );
  };

  // return Cart
  return (
    <div>
      <Card style={{ padding: "10px 5px", border: "none", marginTop: 10 }} className="cart">
        {items && items.length ? (
          <>
            <CardTitle style={{ margin: 10, marginBottom: 0, fontSize: 18 }}>
              <h5 className="mb-0">Order details:</h5>
            </CardTitle>
            <hr></hr>
            <CardBody style={{ padding: 10 }}>
              <div>{renderItems()}</div>
              <div>{checkoutItems()}</div>

              {console.log(`Router Path: ${router.asPath}`)}
            </CardBody>
          </>
        ) : (
          <h5 className="text-center">Your cart is empty!</h5>
        )}
      </Card>

      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
}
export default Cart;
