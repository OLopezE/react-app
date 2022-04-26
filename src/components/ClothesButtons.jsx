import React from 'react'
import {Button, List} from 'reactstrap'
import './style.css'

export default function ClothesButton() {
  return (
    <div className='ButtonList'>
      <List type='unstyled'>
        <li>
          <Button className='boton'>Playera</Button>
        </li>
        <br/>
        <li>
          <Button className='boton'>Pantalones</Button>
        </li>
        <br/>
        <li>
        <Button className='boton'>Sudadera</Button>
        </li>
        <br/>
      </List>
        
        
        
    </div>
  )
}
