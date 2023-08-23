import React from "react";
import './style.css';
import './carrosel.css';
import corn from './images/11.jpg';
import orange from './images/22.jpg';
import tomatoas from './images/33.jpg';
import strawberry from './images/44.jpg';
import grapes from './images/55.jpg';
import raspberry from './images/66.jpg';

const Home = () => {
    return(
        <div>
            {carrosel()}
            {dairySection()}
            {fruitSection()}
            {vegetableSection()}
        </div>
        
    )
}

function carrosel() {


function next(){
    let lists = document.querySelectorAll('#carrsel_item');
    document.getElementById('slide').appendChild(lists[0]);
    console.log('next item')
}
function prev(){
    let lists = document.querySelectorAll('#carrsel_item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    console.log('prev item')
}


  return(
    <div className="carrosel">
        <div id="slide">
            <div className="item" id="carrsel_item" style={{backgroundImage: `url(${corn})`}}>
                <div className="content">
                    <div className="name">CORN</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas sint nam maxime illum quo.</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" id="carrsel_item" style={{backgroundImage: `url(${orange})`}}>
                <div className="content">
                    <div className="name">ORANGES</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil explicabo in sint aspernatur!</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" id="carrsel_item" style={{backgroundImage: `url(${tomatoas})`}}>
                <div className="content">
                    <div className="name">Tomatoes</div>
                    <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla porro dignissimos repellat dolores quod.</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" id="carrsel_item" style={{backgroundImage: `url(${strawberry})`}}>
                <div className="content">
                    <div className="name">STRAW BERRY</div>
                    <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae obcaecati quod officiis laboriosam alias?</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" id="carrsel_item" style={{backgroundImage: `url(${grapes})`}}>
                <div className="content">
                    <div className="name">GRAPES</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis magni assumenda ratione dolor.</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" id="carrsel_item" style={{backgroundImage: `url(${raspberry})`}}>
                <div className="content">
                    <div className="name">RASP BERRIES</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam dolorem voluptate vero aperiam!</div>
                    <button>See more</button>
                </div>
            </div>
        </div>
        <div className="buttons">
            <button id="prev" onClick={prev}></button>
            <button id="next" onClick={next}></button>
        </div>




    </div>

  )
}

function dairySection(){
    return(
      <section class="dairy dairy_products">
  
      
  
          <div class="title">
              <h3>Dairy</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. unde quidem delectus minima nihil! Mollitia iste nemo quam impedit sint labore aspernatur, voluptates quos a fac</p>
              <button type="button">Explore</button>
  
              
          </div>
          <div class="dairy-items">
              <div class="card-item " >
                  <h5>Milk</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div class="card-item" >
                  <h5>Yoghurt</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div class="card-item" >
                  <h5>Montserela</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div class="card-item" >
                  <h5>Cofee</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
          </div>
  
      </section>
    )
  }
  
function fruitSection() {
    return (
      <section class="dairy fruits">
  
          
            <div class="dairy-items">
                <div class="card-item" >
                <h5>Guava</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div class="card-item">
                <h5>Orange</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div class="card-item">
                <h5>Strawberry</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div class="card-item">
                <h5>Banana</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              
            </div>
  
  
            <div class="title fruit">
              <h3 style={{textAlign: 'end'}}>Fruits</h3>
              <p class="title_description" >Lorem ipsum dolor sit amet consectetur adipisicing elit. unde quidem delectus minima nihil! Mollitia iste nemo quam impedit sint labore aspernatur, voluptates quos a fac</p>
              <button type="button" style={{}}>Explore</button>
  
              
            </div>
  
          </section>
    )
  }
  
  function vegetableSection(){
    return(
      <section class="dairy vegetable">
  
          
  
          <div class="title vegetable">
              <h3 class="veg_title">Vegetable</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. unde quidem delectus minima nihil! Mollitia iste nemo quam impedit sint labore aspernatur, voluptates quos a fac</p>
              <button type="button">Explore</button>
  
              
          </div>
          <div class="gallery">
              <div class="img" ><h3>Tomatoes</h3></div>
              <div class="img" ><h3>Potatoes</h3></div>
              <div class="img" ><h3>Red Onions</h3></div>
              <div class="img" ><h3>Corns</h3></div>
  
          </div>
          
  
      </section>
    )
  }


export default Home;