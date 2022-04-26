import React from 'react'
import { Button, Container } from 'reactstrap'
import './style.css'

import imagen from '../ropa/1111.jpg'

export default function Mannequin(props) {
  return (
    <div className='mannequinHome'>
        <br/>
        <div className='mannequinContainer'>
            <img className='ropa' src={imagen}></img>
            <br/>
            <br/>
            <Button>Agregar al carro</Button>
        </div>

    </div>

  )
}
