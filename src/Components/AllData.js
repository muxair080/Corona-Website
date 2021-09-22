import React, {useContext}  from 'react'
import { CoronaData , InputValue} from '../App';
import CountryData from './CountryData';
import ReadMoreInfo from './ReadMoreInfo';
let data = [] ;
const AllData = (props) => {
    const coviddata  = useContext(CoronaData);
    const Inputval  = useContext(InputValue);
  
    return (
        <>
        <div className="AllData-Container">
            <div className="content">
                <div>
                        <h1>ALL COVID19 SUFFERD COUNTRIES DATA</h1>
                    <p>We are providing covid data of all coutries which is suffer from corona nowdays. and we are providing to you updated data about covid in each country sepeartly and which is easly readable and if there is any mistake or proble so please contact us that we solve this problem for you .</p>
                </div>
           
            </div>
      
       {
           props.State === true && 
           
            <div className="covid-data-of-diff-contries">
                {
                   
                    coviddata.map((element , index )=>{
                        
                        if(Inputval === '' || element.country.toLowerCase().includes(Inputval.toLowerCase())){
                                data[index] = element;
                                return <div key = {index}>
                                <CountryData data = {element} id = {index} showdata = {props.showdata}/>              
                                </div>
                         }
                    })
                } 
            </div> || (props.State === false && <ReadMoreInfo  showdata = {props.showdata} data = {props.item}/>)
        
}
</div>
        </>
    )
}

export default AllData
