import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ImageCard = ({ data }) => {
  return (
    <Card className="mb-4">
      <Row>
        <Col sm={4}>
          <Card.Img className="cardImg" variant="top" src={data.thumbnail} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{data.brand}</Card.Title>
            <Card.Text className="mb-2">{data.title}</Card.Text>
            <Card.Text className="mb-2">${data.price}</Card.Text>
            <Card.Text>
              <small>
                <i>{data.description}</i>
              </small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ImageCard;
