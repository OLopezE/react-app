import React from 'react'
import {Button, List} from 'reactstrap'
import './style.css'

export default function ClothesButton(props) {
  return (
    <div className='buttonOuter'>
          <Button className='boton'>{props.prenda}</Button>   
    </div>
  )
}
