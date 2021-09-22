import "./App.css";
import Homepage from "./Components/Homepage";
import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllData from "./Components/AllData";
import Navbar from "./Components/Navbar";
import Contactpage from './Components/Contactpage';
import Footer from "./Components/Footer";


let CoronaData = createContext();
 let InputValue =  createContext();

function App() {
  const [covid, setcovid] = useState([]);
  const [InputVal, setInputVal] = useState('');
  const [Item, setItem] = useState(null);
  const [state, setstate] = useState(true);

  const GetValue = (value) => {
    setInputVal(value);
  };

  function ShowData(value, data) {
    setstate(value);
    setItem(data);
  }

  async function FetchApi() {
    const url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";

    let response = await fetch(url);
    let data = await response.json();
    setcovid(data);
  }

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar value={GetValue} />
        <Switch>
          <Route path="/AllData">
            {/* {covid , InputVal} */}
            <CoronaData.Provider value={covid}>
            <InputValue.Provider value = {InputVal}>
              <AllData showdata={ShowData} State={state} item={Item} />
            </InputValue.Provider>
            </CoronaData.Provider>
          </Route>
          <Route path="/Contactpage">
          <Contactpage/>
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
export { CoronaData , InputValue };
