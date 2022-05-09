import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import Mannequin from './Mannequin'
import Navbar from './Navigationbar'
import ClothesButton from './ClothesButtons'
import background from '../media/background.png'
import ClothesList from './ClothesList'


export default function Homeview() {
  return (
    <div style ={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no"}}>
       
        <Container fluid>
        <Row>
            <Col>
            <h3 className='titleText'>Generate Character</h3>
            <br></br>
            <ClothesList/>
            </Col>
            <Col>
            <Mannequin/>
            </Col>
            <Col>
            </Col>
        </Row>
        </Container>
    </div>
  )
}
