import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Container,Row, Col} from 'react-bootstrap';
import slide1 from '../../assetst/Images/slide1.png'
import slide2 from '../../assetst/Images/slide2.png'
import slide3 from '../../assetst/Images/slide3.png'
import resim1 from '../../assetst/Images/resim1.png'
import { FaCannabis } from "react-icons/fa";


function Home() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>


      <Container className='mt-5 mb-5'>
        <Row>

          <div className='baslik'>
            <h1>SEKTÖR HAKKINDA</h1>
            <span className='baslikIcon'><FaCannabis/></span>
          </div>
          
          <Col lg={6}>
           <img src={resim1} alt="logo" className='w-100'/>
          </Col>

          <Col lg={6}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home