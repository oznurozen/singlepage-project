import React from 'react'
import {Container,Row, Col} from 'react-bootstrap';
import { FaCannabis } from "react-icons/fa";
import Kadro from './Kadro';
import Data from './Data'


function Personal() {
  return (
    <div>
        <Container>
          <Row> 
            <div className='baslik'>
              <h1>KADROMUZ</h1>
              <span className='baslikIcon'><FaCannabis/></span>
            </div>
              <Col className='cardCol'>
                {Data.map((values, i)=>{
                  return(
                    <Kadro key={i} name1 = {values.name} 
                            imgSource = {values.imgSrc}
                            desc1 = {values.desc}
                            id1 = {values.id}
                    />
                  );
                })}
              </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Personal