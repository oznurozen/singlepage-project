import React from 'react'
import {Card} from 'react-bootstrap';

function Kadro(props) {
  return (
    <div>
        <Card className='text-center cardCard'>
          <Card.Img variant="top" src={props.imgSource} alt='img' className='cardImage' />
          <Card.Body>
            <Card.Title>{props.name1}</Card.Title>
            <Card.Text>
             {props.desc1}
            </Card.Text>
          </Card.Body>
        </Card>

    </div>
  )
}

export default Kadro

