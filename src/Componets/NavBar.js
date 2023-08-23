import React, {useState} from 'react'

import {Link, useMatch, useResolvedPath} from 'react-router-dom'



function NavBar(icon) {

  const [toggle_class, setToggleClass] = useState("button open")
  const [nav_class, setNavClass] = useState("nav close")
  const [isMenuClicked, setIsMenuClicked] = useState(false)


    const updateMenu = () => {
      if(!isMenuClicked) {
        setToggleClass("button close")
        setNavClass("nav open")
      }
      else {
        setToggleClass("button open") 
        setNavClass("nav close")
      }
      setIsMenuClicked(!isMenuClicked)
    }

  return (
    
        <header>
          <div style={{display: 'flex', alignItems: 'center', width: 'fit-content'}}>
              <img src={icon} alt="icon" class="icon" />
              <h1>Mama Mboga</h1>
          </div>

          <div className="cc">
          <div className="menu-togle menu">
          <div className={toggle_class} onClick={updateMenu} > 
          </div>
               </div>
            <div id="nav" className={nav_class}>
              <ul>
                <CustomLink style={{textDecoration: 'none'}} to="/">Home</CustomLink>
                <CustomLink style={{textDecoration: 'none'}} to='/dairy'>Dairy</CustomLink>
                <CustomLink style={{textDecoration: 'none'}} to='/fruits'>Fruits</CustomLink> 
                <CustomLink style={{textDecoration: 'none'}} to='/vegetables'>Vegetables</CustomLink>
       
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </header>

  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end:true })


  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} className={isActive ? "active" : ""} > {children} </Link>
    </li>
  )

}





export default NavBar