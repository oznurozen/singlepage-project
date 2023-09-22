import React from 'react'
import {Container,Row, Col} from 'react-bootstrap';
import { FaCannabis } from "react-icons/fa";
import resim2 from '../../assetst/Images/resim2.png'

function About() {
  return (
    <div>
      <Container className='mt-5 mb-5'>
        <Row>
          <div className='baslik'>
            <h1>SEKTÖR HAKKINDA</h1>
            <span className='baslikIcon'><FaCannabis/></span>
          </div>
          
          <Col lg={6}>
           <img src={resim2} alt="logo" className='w-100'/>
          </Col>

          <Col lg={6}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About