import './App.css';
import Home from './home'
import fruits from './fruits';
import Icon from './images/grocery-icon.png'
import vegetables from './vegetables';
import dairy from './dairy';
import NavBar from './Componets/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {

 

  return (
    <div class='container'>
      {NavBar(Icon)}

      <Routes>
        <Route path='/' element={Home()} />
        <Route path='/fruits' element={fruits()} />
        <Route path='/dairy' element={dairy()} />
        <Route path='/vegetables' element={vegetables()} />
      </Routes>
    </div>
  );


}






let openNav = document.querySelector(".openMenu")
let closeNav = document.querySelector('.closeMenu')

let nav = document.querySelector("#nav")


function navtoggle() {


  console.log('The link has been  clicked.');

  nav.classList.toggle("open")
  openNav.classList.toggle("close")
  closeNav.classList.toggle("open")
  console.log('clicked')
}




export default App;
