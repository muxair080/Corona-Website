import React from 'react'
import '../Styles/MoreInfoData.css';
const ReadMoreInfo = (props) => {
    return (

        <div className = "Container">
         <div className = "Table">

                <h1 className="Top-Heading">{props.data.country}</h1>
                <table >
                <thead>
                
                </thead>
                <tbody>
                <tr>
                        <th>Category</th>
                        <th>No Of Cases</th>
                    </tr>
                <tr>
                    <td>Cases</td>
                <td>{props.data.cases}</td>
                </tr>
                <tr>
                    <td>TodayCases</td>
                    <td>{props.data.todayCases}</td>

                </tr>
                <tr>
                    <td>Deaths</td>
                    <td>{props.data.deaths}</td>

                </tr>
                    <tr>
                        <td>TodayDeaths</td> 
                        <td>{props.data.todayDeaths}</td>
                    </tr>
                    <tr>
                        <td>Recovered</td>
                        <td>{props.data.recovered}</td>
                    </tr>
                    <tr>
                        <td>TodayRecovered</td>
                        <td>{props.data.todayRecovered}</td>
                
                    
                    </tr>
                    <tr>
                        <td>Active</td>
                        <td>{props.data.active}</td>
                    
                    </tr>
                    <tr>
                        <td>Critical</td>
                        <td>{props.data.critical}</td>
                
                    </tr>
                    <tr>
                    <td>CasesPerOneMillion</td>
                    <td>{props.data.casesPerOneMillion}</td>
                
                </tr>
                <tr>
                    <td>DeathsPerOneMillion</td>
                    <td>{props.data.deathsPerOneMillion}</td>
                
                </tr>
                <tr>
                    <td>Tests</td>
                    <td>{props.data.tests}</td>
                    
                </tr>
                <tr>
                    <td>TestsPerOneMillion</td>
                    <td>{props.data.testsPerOneMillion}</td>
                </tr>
                <tr>
                    <td>Population</td>
                    <td>{props.data.population}</td>
                
                </tr>
                <tr>
                    <td>Continent</td>
                    <td>{props.data.continent}</td>
                
                </tr>
                <tr>
                    <td>OneCasePerPeople</td>
                    <td>{props.data.oneCasePerPeople}</td>          
                </tr>
                <tr>
                    <td>OneDeathPerPeople</td>
                    <td>{props.data.oneDeathPerPeople}</td>
                
                </tr>
                <tr>
                    <td>OneTestPerPeople</td>
                    <td>{props.data.oneTestPerPeople}</td>
                    
                </tr>
                <tr>
                    <td>ActivePerOneMillion</td>
                    <td>{props.data.activePerOneMillion}</td>

                </tr>
                <tr>
                    <td>RecoveredPerOneMillion</td>
                    <td>{props.data.recoveredPerOneMillion}</td> 
                </tr>
                <tr>
                    <td>CriticalPerOneMillion</td>
                    <td>{props.data.criticalPerOneMillion}</td>
                </tr> 
                </tbody>  
                </table>
            <button className="btn btn-primary my-2" onClick = {()=>{props.showdata(true)}}>Go-Back</button>
                </div>
            
        </div>
    )
}

export default ReadMoreInfo
