import React from 'react'
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">COVID19</Link>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse navigation" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" to="/AllData">Countries</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Contactpage">Conact Us</Link>
              </li>
            </ul>
            <form className="">
              <input className=" me-2" type="search" placeholder="🔍 Search Country Name Here" aria-label="Search" onChange = {(e) => {props.value(e.target.value)}}  />
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
