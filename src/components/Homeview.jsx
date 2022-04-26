import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import Mannequin from './Mannequin'
import Navbar from './Navigationbar'
import ClothesButton from './ClothesButtons'


export default function Homeview() {
  return (
    <div >
        <Navbar/>
        <Container fluid>
        <Row>
            <Col>
            <h3>Selecciona una prenda:</h3>
            <br></br>
            <ClothesButton/>
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
