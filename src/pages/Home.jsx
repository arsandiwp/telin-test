import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import Expenses from "../components/Expenses";
import Invoice from "../components/Invoice";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}>
            <SideBar />
          </Col>
          <Col md={5} className="py-4 h-100">
            <Expenses />
            <Invoice />
          </Col>
          <Col md={4} className="py-4 h-100">
            <Card />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
