import React from "react";
import Gallery from "../assets/image/gallery.png";
import Icon from "../assets/image/icon.png";
import Dash from "../assets/image/dashboard.png";
import { Col, Image, Row } from "react-bootstrap";

function SideBar() {
  return (
    <>
      <div className="shadow-sm p-4 bg-white h-100">
        <div className="bg-body-secondary p-3 mt-4 w-75 mx-auto rounded">
          <Image src={Gallery} className="mx-auto d-block" />
        </div>

        <div className="bg-body-tertiary pt-3 border d-flex justify-content-center align-items-center rounded mt-4">
          <Row className="">
            <Col md={2}>
              <Image src={Icon} />
            </Col>
            <Col>
              <h5 className="fw-bold">Lekan Okeowo</h5>
              <p>demo@gmail.com</p>
            </Col>
          </Row>
        </div>

        <div className="mt-4 border-end border-4 border-info">
          <Row className="py-2">
            <Col>
              <Image src={Dash} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default SideBar;
