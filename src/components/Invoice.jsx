import React from "react";
import { Button, Carousel, Col, Form, Image, Row } from "react-bootstrap";
import Add from "../assets/image/add.png";
import Icon1 from "../assets/image/icon1.png";
import Icon2 from "../assets/image/icon2.png";
import Icon3 from "../assets/image/icon3.png";

function Invoice() {
  return (
    <div className="shadow-sm bg-white p-4 rounded mt-4">
      <Row className="mb-4">
        <Col md={10}>
          <h5 className="fw-bold">Quick Invoice</h5>
        </Col>
        <Col>
          <Image src={Add} />
        </Col>
      </Row>

      <Row className="mb-4">
        <h6 className="fw-bold mb-3">Latest Transaction</h6>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <div className="bg-body-tertiary d-flex justify-content-center align-items-center rounded">
              <Row className="pt-3">
                <Col>
                  <Image src={Icon1} />
                </Col>
                <Col>
                  <h6 className="fw-bold">Madrani Andi</h6>
                  <p>Madraniandi20@gmail.com</p>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-body-tertiary d-flex justify-content-center align-items-center rounded">
              <Row className="pt-3">
                <Col>
                  <Image src={Icon2} roundedCircle />
                </Col>
                <Col>
                  <h6 className="fw-bold">Josua Nunito</h6>
                  <p>JoshNunito@gmail.com</p>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-body-tertiary d-flex justify-content-center align-items-center rounded">
              <Row className="pt-3">
                <Col>
                  <Image src={Icon3} roundedCircle />
                </Col>
                <Col>
                  <h6 className="fw-bold">Arsandi Wira</h6>
                  <p>arsandiwp@gmail.com</p>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </Row>

      <Form className="fw-bold">
        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Customer name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type customer name"
              className="bg-body-tertiary"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Customer email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Type customer email"
              className="bg-body-tertiary"
            />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Item name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type customer name"
              className="bg-body-tertiary"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Item mount</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="bg-body-tertiary"
            >
              <option hidden>Mount</option>
              <option value="usd">USD</option>
              <option value="euro">Euro</option>
              <option value="rupiah">Rupiah</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Button
              variant="outline-light"
              type="submit"
              className="w-100 text-info fw-bold"
            >
              Add more details
            </Button>
          </Col>
          <Col>
            <Button
              variant="info"
              type="submit"
              className="w-100 text-light fw-bold"
            >
              Send Money
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Invoice;
