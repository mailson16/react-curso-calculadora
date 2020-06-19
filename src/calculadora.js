import React from 'react';
import './calculadora.css';
import{ 
  Jumbotron, Container, Row, Col, Button, Form 
} from 'react-bootstrap';

function Calculadora() {
  return (
    <Jumbotron style={{
      background:'transparent !important',
      backgroundColor:'gray',
      padding:'5px',
      margin:'5px',
      width:'400px'
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger">C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumeros"
              class="text-right"
              readOnly="readonly">
            </Form.Control>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
            <Button variant="light">7</Button>
          </Col>
          <Col xs="3">
            <Button variant="light">8</Button>
          </Col>
          <Col xs="3">
            <Button variant="light">9</Button>
          </Col>
          <Col xs="3">
            <Button variant="warning">/</Button>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
            <Button variant="light">4</Button>
          </Col>
          <Col xs="3">
            <Button variant="light">5</Button>
          </Col>
          <Col xs="3">
            <Button variant="light">6</Button>
          </Col>
          <Col xs="3">
            <Button variant="warning">x</Button>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
            <Button variant="light">1</Button>
          </Col>
          <Col xs="3">
            <Button variant="light">2</Button>
          </Col>
          <Col xs="3">
            <Button variant="light">3</Button>
          </Col>
          <Col xs="3">
            <Button variant="warning">-</Button>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
            <Button variant="light">0</Button>
          </Col>
          <Col xs="3">
            <Button variant="light">.</Button>
          </Col>
          <Col xs="3">
            <Button variant="success">=</Button>
          </Col>
          <Col xs="3">
            <Button variant="warning">+</Button>
          </Col>
        </Row>

      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
