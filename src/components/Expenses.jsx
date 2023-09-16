import React, { useEffect, useState } from "react";
import { Col, Form, Image, Row } from "react-bootstrap";

function Expenses() {
  const [expenses, setExpenses] = useState(null);
  useEffect(() => {
    fetch("/api/all-expenses")
      .then((res) => res.json())
      .then((json) => setExpenses(json.expenses))
      .then((err) => console.log(err));
  }, []);

  return (
    <div className="shadow-sm bg-white p-4 rounded">
      <Row>
        <Col md={8}>
          <h5 className="fw-bold">All Expenses</h5>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option hidden>Monthly</option>
            <option value="jan">Jan</option>
            <option value="feb">Feb</option>
            <option value="mar">Mar</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="gap-2 mt-3">
        {expenses?.length > 0 ? (
          <>
            {expenses.map(({ id, type, month, amount, image }) => (
              <Col
                key={id}
                className={`${
                  type === "Balance"
                    ? "bg-info text-light rounded"
                    : "border border-secondary-subtle rounded"
                }`}
              >
                <Image src={image} />
                <h6 className="mt-5 fw-bold">{type}</h6>
                <p className={`${type === "Balance" ? "text-light" : ""}`}>
                  {month}
                </p>
                <h4
                  className={`fw-bold ${
                    type === "Balance" ? "text-light" : "text-info"
                  }`}
                >
                  ${amount}
                </h4>
              </Col>
            ))}
          </>
        ) : (
          <p>no</p>
        )}
      </Row>
    </div>
  );
}

export default Expenses;
