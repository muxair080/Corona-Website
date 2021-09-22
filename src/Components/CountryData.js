import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';


import '../Styles/Country-data.css';
const CountryData = (props) => {

    return (
    
        <div className="country-data">
    
                <img src={props.data.countryInfo.flag} alt="props.data.country" title = {props.data.country} />
          
            <div className="Corona-data">
                <h1>{props.data.country}</h1>
                <div className='data'>
                    
                        <h4>Cases : {props.data.cases} </h4>
                        <h4>Today Cases : {props.data.todayCases} </h4>
                        <button className="btn-readmore"  onClick = {()=>props.showdata(false, props.data)}>Read-More</button>
                </div>
            </div>
        </div>
   
        
    )
}

export default CountryData
