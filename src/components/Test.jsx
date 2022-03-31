import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Test(){
  return (
    <div>
      <ListGroup>
        <ListGroup.Item variant="secondary">
          <div className="fw-bold">Question Title</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="fw-bold">(a)</div><div>(answer 1)</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="fw-bold">(b)</div><div>(answer 2)</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="fw-bold">(c)</div><div>(answer 3)</div>
        </ListGroup.Item>
    </ListGroup>
    </div>
  )
  }