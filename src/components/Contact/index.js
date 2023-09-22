import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container,Row, Col} from 'react-bootstrap';
import { FaCannabis } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <Container>
        <Row>
        <div className='baslik'>
              <h1>ILETISIM Formu</h1>
              <span className='baslikIcon'><FaCannabis/></span>
        </div>
          <Col md={8} className='m-auto'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adınız Soyadınız</Form.Label>
              <Form.Control type="text" placeholder="Adınızı Giriniz" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email Giriniz" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mesajınızı Giriniz</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit" className='button'>
              Gönder
            </Button>
          </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact