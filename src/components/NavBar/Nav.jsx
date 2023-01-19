import { Col, Container, Row } from "react-bootstrap";
import { LestElement, Link, List, NavBar } from "./Nav.Style";
import React from "react";

export const NavStyle = () => {
  return (
    <NavBar>
      <Container>
        <Row>
          <Col xs={2}>
            <span style={{ color: "white", textAlign: "center" }}>LOGO</span>
          </Col>
          <Col xs={10}>
            <List>
              <LestElement>
                <Link href="#" style={{ backgroundColor: "red" }}>
                  TRYFORFREE
                </Link>
              </LestElement>{" "}
              <LestElement>
                <Link href="null.com">APPSTORE</Link>
              </LestElement>
              <LestElement>
                <Link href="null.com">RESOURCES</Link>
              </LestElement>{" "}
              <LestElement>
                <Link href="null.com">PRICING</Link>
              </LestElement>{" "}
              <LestElement>
                <Link href="null.com">CUSTOMER</Link>
              </LestElement>{" "}
              <LestElement>
                <Link href="null.com">FEATURES</Link>
              </LestElement>{" "}
              <LestElement>
                <Link href="null.com">DEMO</Link>
              </LestElement>{" "}
              <LestElement>
                <Link href="null.com">PRODUCT</Link>
              </LestElement>{" "}
            </List>
          </Col>
        </Row>
      </Container>
    </NavBar>
  );
};
export default NavStyle;
