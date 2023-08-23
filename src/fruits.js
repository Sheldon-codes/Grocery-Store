import React from 'react'
import './fruits.css'
import Card from './Componets/card'
import {FruitItems} from './Stock'
import bg from './images/R.png'


function fruits() {
  return (
    <div>
        {baseRoute()}
    </div>
  )
}



function baseRoute(){
  return(
    <>
      <section class="fruit-Header">

        <div class="fruit-title">

          <img src={bg} alt=""/>

          <h3>Fruits</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. unde quidem delectus minima nihil! Mollitia iste nemo quam impedit sint labore aspernatur, voluptates quos a fac</p>
          <button type="button">Explore</button>

          
        </div>


        <div class="fruit-items fruit-bg">

            
        </div>

  </section>


    <section class="fruit-row">

    {displayitems(FruitItems)}
    


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





export default fruits