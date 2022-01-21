import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Contact</Link>
    <Link to="https://www.reboart.net">Desain</Link>
    <ThemeChanger/>
  </nav>
  
)
