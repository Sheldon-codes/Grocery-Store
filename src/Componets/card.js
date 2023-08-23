import React from 'react'

const Card = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
      <div class="fruit-card"  key={index}>
      <div class="card-image-holder default" style={{backgroundImage: `url(${value.path})`}}></div>
      <div className="fruit-description">
        <h4 style={{margin: '0px 0px'}}> {value.title} </h4>
        <p style={{margin: '0px 0px'}}> {value.description} </p>
        <button>Add to cart</button>
      </div>
    </div>
    ))}
    </>
  )
}


export default Card