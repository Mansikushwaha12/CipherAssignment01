import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <div className='card--body'>
        <img src={props.img} alt=""  className='card--image'/>
        <h2 className='cardTitle'>{props.title}</h2> 
            <p className='card--description'>  {props.description}
            </p>
      </div>
      <button className='card--btn'>Viwe  Recipe</button>
    </div>
  )
}

export default Card
