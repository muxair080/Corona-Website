import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/Footer.css';




const Footer = () => {
    return (
       <footer className = "Footer bg-dark ">
        <div className="info">
            <h1>COVID19</h1>
            <p>Coronaviruses are a group of related RNA viruses that cause diseases in mammals and birds. In humans and birds, they cause respiratory tract infections that can range from mild to lethal.</p>
            </div>    
            <div className="links">
                <h1>LINKS</h1>
                <ul>
                <li>
                    <NavLink className = "navlinks" to = "/">Home</NavLink>
                </li>
                <li>
                    <NavLink className = "navlinks" to = "/">Covid Countries</NavLink>
                </li>
                <li>
                    <NavLink className = "navlinks" to = "/">All Information</NavLink>
                </li> 
                <li>
                    <NavLink className = "navlinks" to = "/">Contact Us</NavLink>
                </li>
                </ul>
              
            </div>
            <div className="Subsicribe">
                <h1>SUBSCRIBE</h1>
                <div className="login">
                    <input type="email" id = "email" placeholder = "Enter Email" title = "Enter Email" autoComplete = "off" />
                    <button>Login</button>
                </div>
            </div>
       </footer>
    )
}

export default Footer
