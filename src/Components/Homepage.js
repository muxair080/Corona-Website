import React,{useState} from 'react';
import '../Styles/Homepage.css';

import AllData from './AllData';
import img from '../Images/covid-showcase-img.png';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
    const [state, setstate] = useState(true);

    return (
      <>
      {
      <section className="Showcase">
        <div className="container">
            <div>
            <div>
            <h1 className="Main-Heading text-danger">INFORMATIONS ABOUT COVID19</h1>
            <div> <strong className = "msg text-warning">Please</strong> </div>
            <span className = "msg text-success">Stay Safe </span> 
            <span className = "msg text-success">Stay Home </span> 
            <span className = "msg text-success">Save Lives</span> 
            
            
            </div>
            <div className="btn">
                <NavLink className  = 'btn-report' to = "/AllData" >GET STARTED</NavLink>
            </div>
            </div>
          
        </div>
        <div className="coronaimg">
            <img src={img} alt="Covid19" />
        </div>
    </section>
    }
    </>
    )
}
export default Homepage
