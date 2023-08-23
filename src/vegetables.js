import React from 'react'
import './fruits.css'
import Card from './Componets/card'
import { VegetableItems } from './Stock'
import bg from './images/R (2).png'



function vegetables() {
  return (
    <div>
        {baseRoute()}
    </div>
  )
}



function baseRoute(){
  return(
    <>
      <section class="fruit-Header vegetable-bg">

        <div class="fruit-title vegies">

          <img src={bg} alt=""/>

          <h3>Vegetables</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. unde quidem delectus minima nihil! Mollitia iste nemo quam impedit sint labore aspernatur, voluptates quos a fac</p>
          <button type="button">Explore</button>

          
        </div>


        <div class="fruit-items vegetable">

            
        </div>

  </section>


    <section class="fruit-row">
    {displayitems(VegetableItems)}
    </section>
    </>
  )
}

function displayitems(items){
  for(let i = 0; i<=items.length; i++){
    return(
      <Card details={items} />
    )
  }

}





export default vegetables