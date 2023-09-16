import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Carde from "../assets/image/card.png";

function Card() {
  const [history, setHistory] = useState(null);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("/api/transaction-history")
      .then((res) => res.json())
      .then((json) => setHistory(json.history))
      .catch((err) => console.log(err));
  }, []);

  const handleSeeAllClick = () => {
    setShowAll(true);
  };

  return (
    <div className="shadow-sm bg-white p-4 rounded">
      <Row>
        <h5 className="fw-bold">My Card</h5>
        <Image src={Carde} className="mt-2 pb-4 border-bottom" />
        <Col className="my-3" md={9}>
          <h5 className="fw-bold">Transaction History</h5>
        </Col>
        <Col className="my-3">
          {!showAll && (
            <p
              className="text-info"
              style={{ cursor: "pointer" }}
              onClick={handleSeeAllClick}
            >
              See all
            </p>
          )}
        </Col>
      </Row>

      {history?.length > 0 ? (
        <>
          {history
            .slice(0, showAll ? history.length : 2)
            .map(({ id, date, description, amount, type }) => (
              <Row key={id} className="mt-2 bg-body-tertiary p-3 rounded">
                <Col md={8}>
                  <h6 className="fw-bold">{description}</h6>
                  <p>{date}</p>
                </Col>
                <Col
                  className={`text-end fw-bold ${
                    type === "pengeluaran" ? "text-danger" : "text-success"
                  }`}
                >
                  <h5 className="fw-bold">${amount}</h5>
                </Col>
              </Row>
            ))}
        </>
      ) : (
        <p>No History Transaction</p>
      )}
    </div>
  );
}

export default Card;
