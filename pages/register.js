/* /pages/register.js */

import React, { useState, useContext } from "react";
import Router from "next/router";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Fade
} from "reactstrap";
import { registerUser } from "../components/auth";
import AppContext from "../components/context";

const Register = () => {
  const [data, setData] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const appContext = useContext(AppContext);
  const [success, setSuccess] = useState(false);

  return (
    <Container>
     
      <Row>
      
        <Col sm="12" md={{ size: 5, offset: 3 }}>
        
          <div className="paper">
            <Fade>
            <Alert isOpen={success} color="success">
              Account created successfully!
            </Alert>
            </Fade>
          
            <section className="wrapper">
              <Container>
                <h2 className="text-center mb-5">Register</h2>
              </Container>
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>Username:</Label>
                    <Input
                      disabled={loading}
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                      value={data.username}
                      type="text"
                      name="username"
                    />
                  </FormGroup>
                  <br></br>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      value={data.email}
                      type="email"
                      name="email"
                    />
                  </FormGroup>
                  <br></br>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      value={data.password}
                      type="password"
                      name="password"
                    />
                  </FormGroup>
                  {Object.keys(error).length > 0 && (
                    <div style={{ marginBottom: 10 }}>
                      <small style={{ color: "red" }}>
                        {error.response.data.error.message}
                      </small>
                    </div>
                  )}
                  <br></br>
                  <FormGroup>
                    <Button
                      style={{ width: "100%" }}
                      color="primary"
                      disabled={loading}
                      onClick={() => {
                        setLoading(true);
                        setError({});
                        setTimeout(() => {
                          registerUser(data.username, data.email, data.password)
                            .then((res) => {
                              // set authed user in global context object
                              console.log(res)
                              setSuccess(true);
                              setLoading(false);
                              setTimeout(() => {
                                appContext.setUser(res.data.user);
                                setSuccess(false);
                                Router.push("/");
                              }, 2000);
                              console.log(
                                `registered user: ${JSON.stringify(res.data)}`
                              );
                            })
                            .catch((error) => {
                              setError(error);
                              setLoading(false);
                            });
                        }, 500);
                      }}
                    >
                      {loading ? "Loading.." : "Submit"}
                    </Button>
                  </FormGroup>
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>
    </Container>
  );
};
export default Register;
