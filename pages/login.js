/* /pages/login.js */

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { login } from "../components/auth";
import AppContext from "../components/context";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const router = useRouter();
  // const appContext = useContext(AppContext);
  let { isAuthenticated, user, setUser } = useContext(AppContext);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <section className="wrapper">
              <Form>
                <fieldset disabled={loading}>
                  <Container>
                    <h2 className="text-center mb-5">Login</h2>
                  </Container>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      name="identifier"
                    />
                  </FormGroup>
                  <br></br>
                  <FormGroup>
                    <Label>Password:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      type="password"
                      name="password"
                    />
                  </FormGroup>
                  {Object.keys(error).length > 0 && (
                    <div style={{ marginBottom: 10 }}>
                      <small style={{ color: "red" }}>
                        {error.response.data.message}
                      </small>
                    </div>
                  )}
                  <br></br>
                  <br></br>
                  <FormGroup>
                    <Button
                      style={{ float: "right", width: "100%" }}
                      color="primary"
                      onClick={() => {
                        setLoading(true);
                        setError({});
                        setTimeout(() => {
                          login(data.identifier, data.password)
                          .then((res) => {
                            setLoading(false);
                            // set authed User in global context to update header/app state
                            setUser(res.data.user);
                            console.log("App Context: ", user);
                          })
                          .catch((error) => {
                            console.log(error);
                            setError(error);
                            setLoading(false);
                          });
                        }, 1000)
                        
                      }}
                    >
                      {loading ? "Loading... " : "Submit"}
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
}

export default Login;
