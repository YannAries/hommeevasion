import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  defaultAddr: any;
}

export const DefaultAddress = ({ defaultAddr }: Props) => {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col sm={8}>
            <h4>Adresse d&#39;expédition</h4>
          </Col>
          <Col>
            {defaultAddr && (
              <Link to="/profile/addresses" style={{ float: "right" }}>
                (Change)
              </Link>
            )}
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {defaultAddr && (
          <div>
            <span>{defaultAddr.contactPerson},</span>
            <br />
            <span>{defaultAddr.address},</span>
            <br />
            <span>{defaultAddr.city},</span>
            <br />
            <span>{`${defaultAddr.state}, ${defaultAddr.zip}`}</span>
          </div>
        )}
        {!defaultAddr && (
          <span>
            <br />
            Pas d&#39;adresse trouvée.{" "}
            <Link to="/profile/addresses">Ajouter une nouvelle adresse</Link>
            <br />
            <br />
          </span>
        )}
      </Card.Body>
    </Card>
  );
};
